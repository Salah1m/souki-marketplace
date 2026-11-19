import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "https://salah1m.github.io",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405, headers: cors });
  const publicKey = Deno.env.get("VAPID_PUBLIC_KEY");
  const privateKey = Deno.env.get("VAPID_PRIVATE_KEY");
  const subject = Deno.env.get("VAPID_SUBJECT") || "mailto:admin@example.com";
  if (!publicKey || !privateKey) return Response.json({ error: "Push service is not configured yet" }, { status: 503, headers: cors });

  const url = Deno.env.get("SUPABASE_URL")!;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const token = (req.headers.get("Authorization") || "").replace(/^Bearer\\s+/i, "");
  if (!token) return Response.json({ error: "Unauthorized" }, { status: 401, headers: cors });
  const userClient = createClient(url, anon, { global: { headers: { Authorization: `Bearer ${token}` } }, auth: { persistSession: false } });
  const { data: { user }, error: authError } = await userClient.auth.getUser(token);
  if (authError || !user) return Response.json({ error: "Unauthorized" }, { status: 401, headers: cors });

  let body: { message_id?: string };
  try { body = await req.json(); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400, headers: cors }); }
  if (!body.message_id) return Response.json({ error: "message_id is required" }, { status: 400, headers: cors });

  const admin = createClient(url, serviceKey, { auth: { persistSession: false } });
  const { data: message, error: messageError } = await admin.from("messages")
    .select("id,body,sender_id,conversation_id,conversations(buyer_id,seller_id,listing_id,listings(title))")
    .eq("id", body.message_id).maybeSingle();
  if (messageError || !message) return Response.json({ error: "Message not found" }, { status: 404, headers: cors });
  if (message.sender_id !== user.id) return Response.json({ error: "Forbidden" }, { status: 403, headers: cors });
  const conv = Array.isArray(message.conversations) ? message.conversations[0] : message.conversations;
  if (!conv || (conv.buyer_id !== user.id && conv.seller_id !== user.id)) return Response.json({ error: "Forbidden" }, { status: 403, headers: cors });
  const recipientId = conv.buyer_id === user.id ? conv.seller_id : conv.buyer_id;
  const { data: prefs } = await admin.from("user_preferences").select("notifications_enabled").eq("user_id", recipientId).maybeSingle();
  if (prefs?.notifications_enabled === false) return Response.json({ sent: 0, skipped: "disabled" }, { headers: cors });
  const { data: subscriptions, error: subError } = await admin.from("push_subscriptions").select("id,subscription").eq("user_id", recipientId);
  if (subError) return Response.json({ error: "Could not load subscriptions" }, { status: 500, headers: cors });

  webpush.setVapidDetails(subject, publicKey, privateKey);
  const listing = Array.isArray(conv.listings) ? conv.listings[0] : conv.listings;
  const payload = JSON.stringify({
    title: "رسالة جديدة في سوقي",
    body: String(message.body || "").slice(0, 140),
    tag: "souki-chat-" + message.conversation_id,
    url: "/souki-marketplace/chat.html?id=" + message.conversation_id,
    listing: listing?.title || "محادثة سوقي",
  });
  let sent = 0;
  for (const row of subscriptions || []) {
    try { await webpush.sendNotification(row.subscription, payload); sent++; }
    catch (error) {
      const status = (error as { statusCode?: number }).statusCode;
      if (status === 404 || status === 410) await admin.from("push_subscriptions").delete().eq("id", row.id);
      else console.error("Push delivery failed", status || error);
    }
  }
  return Response.json({ sent }, { headers: cors });
});
