-- SOUKI marketplace: initial database schema
-- Run this script in Supabase Dashboard > SQL Editor > New query.
-- RLS is enabled explicitly and policies limit writes to the listing owner.

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 120),
  description text not null default '' check (char_length(description) <= 5000),
  price numeric(12,2) not null check (price >= 0),
  category text not null,
  city text not null,
  whatsapp text,
  image_urls text[] not null default '{}',
  status text not null default 'active' check (status in ('active','sold','hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists listings_created_at_idx on public.listings (created_at desc);
create index if not exists listings_city_idx on public.listings (city);
create index if not exists listings_category_idx on public.listings (category);
create index if not exists listings_price_idx on public.listings (price);

alter table public.listings enable row level security;

grant select on public.listings to anon, authenticated;
grant insert, update, delete on public.listings to authenticated;

drop policy if exists "Anyone can view active listings" on public.listings;
create policy "Anyone can view active listings"
on public.listings for select
to anon, authenticated
using (status = 'active' or seller_id = (select auth.uid()));

drop policy if exists "Users can create their own listings" on public.listings;
create policy "Users can create their own listings"
on public.listings for insert
to authenticated
with check (seller_id = (select auth.uid()));

drop policy if exists "Users can update their own listings" on public.listings;
create policy "Users can update their own listings"
on public.listings for update
to authenticated
using (seller_id = (select auth.uid()))
with check (seller_id = (select auth.uid()));

drop policy if exists "Users can delete their own listings" on public.listings;
create policy "Users can delete their own listings"
on public.listings for delete
to authenticated
using (seller_id = (select auth.uid()));

-- Public image bucket. Uploads are restricted to a folder named with the user's auth ID.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('listing-images', 'listing-images', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update
set public = true, file_size_limit = 5242880,
    allowed_mime_types = array['image/jpeg','image/png','image/webp'];

drop policy if exists "Public can view listing images" on storage.objects;
create policy "Public can view listing images"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'listing-images');

drop policy if exists "Users upload their own listing images" on storage.objects;
create policy "Users upload their own listing images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'listing-images'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "Users update their own listing images" on storage.objects;
create policy "Users update their own listing images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'listing-images'
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'listing-images'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

drop policy if exists "Users delete their own listing images" on storage.objects;
create policy "Users delete their own listing images"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'listing-images'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);
