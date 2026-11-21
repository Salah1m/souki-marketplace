const capacitor = window.Capacitor;
const isNativeAndroid = capacitor?.isNativePlatform?.() && capacitor.getPlatform?.() === "android";

if (isNativeAndroid && location.pathname.endsWith("/souki-marketplace/") && !location.hash && !location.search) {
  // Android WebView can restore an old scroll offset on a fresh app launch.
  // The marketplace home must always open from its actual top.
  history.scrollRestoration = "manual";
  const resetHomeScroll = () => window.scrollTo(0, 0);
  resetHomeScroll();
  window.addEventListener("pageshow", resetHomeScroll, { once: true });
  requestAnimationFrame(() => requestAnimationFrame(resetHomeScroll));
  window.addEventListener("load", () => {
    resetHomeScroll();
    setTimeout(resetHomeScroll, 250);
  }, { once: true });
}

if (isNativeAndroid) {
  // Load push independently: a failure in the Browser or App helper must not
  // prevent the notification plugin from becoming available to settings.html.
  let PushNotifications;
  try {
    ({ PushNotifications } = await import("https://esm.sh/@capacitor/push-notifications@8.0.0"));
    window.soukiPushNotifications = PushNotifications;
    window.soukiPushLoadError = null;
  } catch (error) {
    window.soukiPushLoadError = error?.message || String(error);
    console.error("SOUKI PushNotifications module failed to load:", error);
  }

  const [{ Browser }, { App }] = await Promise.all([
    import("https://esm.sh/@capacitor/browser@8.0.0"),
    import("https://esm.sh/@capacitor/app@8.0.0")
  ]);

  if (PushNotifications) {

  let pushListenersReady = false;
  let pendingFcmToken = null;
  let pushRegistrationStarted = false;

  async function saveFcmToken(token) {
    const client = window.soukiAuthClient;
    if (!client || !token) return;
    const { data: { user }, error } = await client.auth.getUser();
    if (error || !user) {
      pendingFcmToken = token;
      return;
    }
    const { error: saveError } = await client.from("fcm_tokens").upsert({
      user_id: user.id,
      token,
      platform: "android",
      updated_at: new Date().toISOString()
    }, { onConflict: "token" });
    if (saveError) console.warn("SOUKI FCM token save failed:", saveError.message);
    else pendingFcmToken = null;
  }

  async function setupNativePush() {
    if (pushRegistrationStarted) return;
    const client = window.soukiAuthClient;
    if (!client) return;
    const { data: { user } } = await client.auth.getUser();
    if (!user) return;
    pushRegistrationStarted = true;
    try {
      if (!pushListenersReady) {
        pushListenersReady = true;
        await PushNotifications.addListener("registration", token => {
          saveFcmToken(token.value).catch(error => console.warn("SOUKI FCM token:", error));
        });
        await PushNotifications.addListener("registrationError", error => {
          console.warn("SOUKI native push registration error:", error);
          pushRegistrationStarted = false;
        });
        await PushNotifications.addListener("pushNotificationActionPerformed", action => {
          const data = action.notification?.data || {};
          const target = data.url || (data.conversation_id
            ? "chat.html?id=" + encodeURIComponent(data.conversation_id)
            : "messages.html");
          try {
            const url = new URL(target, location.origin);
            if (url.origin === location.origin) location.href = url.href;
          } catch (error) {
            console.warn("SOUKI notification target:", error);
          }
        });
      }
      await PushNotifications.createChannel({
        id: "souki_messages",
        name: "رسائل سوقي",
        description: "إشعارات الرسائل الجديدة في سوقي",
        importance: 5,
        vibration: true
      });
      let permission = await PushNotifications.checkPermissions();
      if (permission.receive !== "granted") permission = await PushNotifications.requestPermissions();
      if (permission.receive !== "granted") {
        pushRegistrationStarted = false;
        return;
      }
      await PushNotifications.register();
    } catch (error) {
      pushRegistrationStarted = false;
      console.warn("SOUKI native push setup:", error);
    }
  }

  const nativeAuthClient = () => window.soukiAuthClient;
  const waitForAuthClient = setInterval(() => {
    const client = nativeAuthClient();
    if (!client || client.__soukiPushAuthHook) return;
    clearInterval(waitForAuthClient);
    client.__soukiPushAuthHook = true;
    client.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        if (pendingFcmToken) saveFcmToken(pendingFcmToken);
        setupNativePush();
      } else {
        pushRegistrationStarted = false;
      }
    });
    setupNativePush();
  }, 300);

  const REDIRECT_URL = "com.souki.marketplace://login-callback/";

  async function completeNativeLogin(rawUrl) {
    try {
      const callback = new URL(rawUrl);
      const params = new URLSearchParams(callback.hash.replace(/^#/, ""));
      const error = params.get("error_description") || params.get("error");
      if (error) {
        alert("تعذر تسجيل الدخول: " + decodeURIComponent(error.replace(/\\+/g, " ")));
        return;
      }
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");
      if (!access_token || !refresh_token) return;
      const client = window.soukiAuthClient;
      if (!client) throw new Error("تعذر العثور على جلسة تسجيل الدخول");
      const { error: sessionError } = await client.auth.setSession({ access_token, refresh_token });
      if (sessionError) throw sessionError;
      await Browser.close().catch(() => {});
      window.location.reload();
    } catch (error) {
      console.error("SOUKI native auth callback:", error);
      alert("تعذر إكمال تسجيل الدخول. حاول مرة أخرى.");
    }
  }

  App.addListener("appUrlOpen", ({ url }) => completeNativeLogin(url));
  App.getLaunchUrl().then(result => {
    if (result?.url) completeNativeLogin(result.url);
  }).catch(error => console.warn("SOUKI launch URL:", error));

  window.soukiNativeGoogleLogin = async client => {
    window.soukiAuthClient = client;
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: REDIRECT_URL, skipBrowserRedirect: true }
    });
    if (error) throw error;
    if (!data?.url) throw new Error("لم يتم إنشاء رابط تسجيل الدخول");
    await Browser.open({ url: data.url, toolbarColor: "#087443" });
  };
  }
}
