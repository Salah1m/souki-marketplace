const capacitor = window.Capacitor;
if (capacitor?.isNativePlatform?.() && capacitor.getPlatform?.() === "android") {
  const [{ Browser }, { App }] = await Promise.all([
    import("https://esm.sh/@capacitor/browser@8.0.0"),
    import("https://esm.sh/@capacitor/app@8.0.0")
  ]);

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
