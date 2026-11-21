create table if not exists public.conversation_hidden (
  user_id uuid not null references auth.users(id) on delete cascade,
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  hidden_at timestamptz not null default now(),
  primary key (user_id, conversation_id)
);

alter table public.conversation_hidden enable row level security;

drop policy if exists "Users view own hidden conversations" on public.conversation_hidden;
create policy "Users view own hidden conversations"
on public.conversation_hidden for select
to authenticated
using (user_id = (select auth.uid()));

drop policy if exists "Users hide own conversations" on public.conversation_hidden;
create policy "Users hide own conversations"
on public.conversation_hidden for insert
to authenticated
with check (
  user_id = (select auth.uid())
  and exists (
    select 1 from public.conversations c
    where c.id = conversation_id
      and (c.buyer_id = (select auth.uid()) or c.seller_id = (select auth.uid()))
  )
);

drop policy if exists "Users unhide own conversations" on public.conversation_hidden;
create policy "Users unhide own conversations"
on public.conversation_hidden for delete
to authenticated
using (user_id = (select auth.uid()));

grant select, insert, delete on public.conversation_hidden to authenticated;
create index if not exists conversation_hidden_user_idx
on public.conversation_hidden (user_id, conversation_id);
