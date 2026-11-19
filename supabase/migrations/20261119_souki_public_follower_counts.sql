-- Allow both anonymous visitors and signed-in users to read public
-- seller_follows rows so exact follower counts work on account and seller pages.
drop policy if exists "Anyone can count public seller followers" on public.seller_follows;
create policy "Anyone can count public seller followers"
on public.seller_follows
for select
to anon, authenticated
using (true);
