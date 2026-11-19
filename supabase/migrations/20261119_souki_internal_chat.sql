alter table public.listings
  add column if not exists communication_mode text not null default 'whatsapp';

alter table public.listings
  drop constraint if exists listings_communication_mode_check;
alter table public.listings
  add constraint listings_communication_mode_check
  check (communication_mode in ('chat', 'whatsapp', 'both'));

create table if not exists public.user_blocks (
  id uuid primary key default gen_random_uuid(),
  blocker_id uuid not null references auth.users(id) on delete cascade,
  blocked_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint user_blocks_not_self check (blocker_id <> blocked_id),
  constraint user_blocks_unique_pair unique (blocker_id, blocked_id)
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  buyer_id uuid not null references auth.users(id) on delete cascade,
  seller_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  last_message_at timestamptz not null default now(),
  constraint conversations_not_self check (buyer_id <> seller_id),
  constraint conversations_one_per_buyer_listing unique (listing_id, buyer_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 4000),
  created_at timestamptz not null default now(),
  read_at timestamptz
);

create index if not exists conversations_buyer_last_idx
  on public.conversations (buyer_id, last_message_at desc);
create index if not exists conversations_seller_last_idx
  on public.conversations (seller_id, last_message_at desc);
create index if not exists messages_conversation_created_idx
  on public.messages (conversation_id, created_at);

create table if not exists public.conversation_reports (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reported_user_id uuid not null references auth.users(id) on delete cascade,
  reason text not null check (char_length(btrim(reason)) between 3 and 1000),
  created_at timestamptz not null default now(),
  constraint conversation_reports_not_self check (reporter_id <> reported_user_id)
);

create or replace function public.souki_users_blocked(user_a uuid, user_b uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.user_blocks b
    where (b.blocker_id = user_a and b.blocked_id = user_b)
       or (b.blocker_id = user_b and b.blocked_id = user_a)
  );
$$;
revoke all on function public.souki_users_blocked(uuid, uuid) from public;
grant execute on function public.souki_users_blocked(uuid, uuid) to authenticated;

alter table public.user_blocks enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.conversation_reports enable row level security;

drop policy if exists "Users view own blocks" on public.user_blocks;
create policy "Users view own blocks" on public.user_blocks
  for select to authenticated using (blocker_id = auth.uid());
drop policy if exists "Users create own blocks" on public.user_blocks;
create policy "Users create own blocks" on public.user_blocks
  for insert to authenticated with check (blocker_id = auth.uid() and blocked_id <> auth.uid());
drop policy if exists "Users remove own blocks" on public.user_blocks;
create policy "Users remove own blocks" on public.user_blocks
  for delete to authenticated using (blocker_id = auth.uid());

drop policy if exists "Conversation participants read" on public.conversations;
create policy "Conversation participants read" on public.conversations
  for select to authenticated using (buyer_id = auth.uid() or seller_id = auth.uid());

drop policy if exists "Buyers start eligible conversations" on public.conversations;
create policy "Buyers start eligible conversations" on public.conversations
  for insert to authenticated with check (
    buyer_id = auth.uid()
    and buyer_id <> seller_id
    and exists (
      select 1 from public.listings l
      where l.id = listing_id
        and l.seller_id = seller_id
        and l.status = 'active'
        and l.communication_mode in ('chat', 'both')
    )
    and not public.souki_users_blocked(buyer_id, seller_id)
  );

drop policy if exists "Conversation participants read messages" on public.messages;
create policy "Conversation participants read messages" on public.messages
  for select to authenticated using (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (c.buyer_id = auth.uid() or c.seller_id = auth.uid())
    )
  );

drop policy if exists "Participants send messages" on public.messages;
create policy "Participants send messages" on public.messages
  for insert to authenticated with check (
    sender_id = auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (c.buyer_id = auth.uid() or c.seller_id = auth.uid())
        and not public.souki_users_blocked(c.buyer_id, c.seller_id)
    )
  );

drop policy if exists "Message receiver marks read" on public.messages;
create policy "Message receiver marks read" on public.messages
  for update to authenticated using (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and ((c.buyer_id = auth.uid() and sender_id = c.seller_id)
          or (c.seller_id = auth.uid() and sender_id = c.buyer_id))
    )
  ) with check (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and ((c.buyer_id = auth.uid() and sender_id = c.seller_id)
          or (c.seller_id = auth.uid() and sender_id = c.buyer_id))
    )
  );

drop policy if exists "Participants submit conversation reports" on public.conversation_reports;
create policy "Participants submit conversation reports" on public.conversation_reports
  for insert to authenticated with check (
    reporter_id = auth.uid()
    and exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (
          (c.buyer_id = auth.uid() and reported_user_id = c.seller_id)
          or (c.seller_id = auth.uid() and reported_user_id = c.buyer_id)
        )
    )
  );
drop policy if exists "Reporters read own reports" on public.conversation_reports;
create policy "Reporters read own reports" on public.conversation_reports
  for select to authenticated using (reporter_id = auth.uid());

grant select, insert, delete on public.user_blocks to authenticated;
grant select, insert on public.conversations to authenticated;
grant select, insert on public.messages to authenticated;
grant update (read_at) on public.messages to authenticated;
grant select, insert on public.conversation_reports to authenticated;

do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    alter publication supabase_realtime add table public.messages;
    alter publication supabase_realtime add table public.conversations;
  end if;
exception when duplicate_object then
  null;
end $$;
