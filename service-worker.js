const CACHE_NAME = "souki-pwa-v3-language";
const APP_SHELL = ["./", "./manifest.webmanifest", "./icons/souki.svg"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("push", event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch { data = { body: event.data?.text() || "لديك رسالة جديدة" }; }
  const title = data.title || "رسالة جديدة في سوقي";
  const options = {
    body: data.body || "لديك رسالة جديدة",
    icon: "./icons/souki.svg",
    badge: "./icons/souki.svg",
    tag: data.tag || "souki-message",
    renotify: true,
    data: { url: data.url || "./messages.html" }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
self.addEventListener("notificationclick", event => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || "./messages.html", self.location.origin).href;
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const client of list) {
      if (client.url.startsWith(self.location.origin) && "focus" in client) {
        client.navigate(target);
        return client.focus();
      }
    }
    return clients.openWindow(target);
  }));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  // Always request fresh HTML, JavaScript and CSS. Older cached pages/scripts
  // caused language changes to disappear on navigation.
  const url = new URL(request.url);
  const fresh = request.mode === "navigate" || /\.(?:html|js|css)$/.test(url.pathname) || url.pathname.endsWith("/");
  if (fresh) {
    event.respondWith(fetch(request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(request, copy)));
      }
      return response;
    }).catch(() => caches.match(request).then(cached => cached || (request.mode === "navigate" ? caches.match("./") : Response.error()))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
