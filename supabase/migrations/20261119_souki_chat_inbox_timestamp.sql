create or replace function public.souki_touch_conversation()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.conversations
  set last_message_at = new.created_at
  where id = new.conversation_id;
  return new;
end;
$$;
revoke all on function public.souki_touch_conversation() from public;
drop trigger if exists souki_messages_touch_conversation on public.messages;
create trigger souki_messages_touch_conversation
after insert on public.messages
for each row execute function public.souki_touch_conversation();