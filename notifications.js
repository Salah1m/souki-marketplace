/* SOUKI: replace browser alert dialogs with a consistent in-page notification. */
(function(){
  if(window.__soukiNoticeInstalled)return;
  window.__soukiNoticeInstalled=true;
  let timer=null;
  function notify(message){
    let host=document.getElementById("souki-global-notice");
    if(!host){
      host=document.createElement("div");
      host.id="souki-global-notice";
      host.setAttribute("role","status");
      host.setAttribute("aria-live","polite");
      host.style.cssText="position:fixed;z-index:2147483000;left:50%;bottom:calc(22px + env(safe-area-inset-bottom,0px));transform:translate(-50%,16px);width:max-content;max-width:calc(100% - 28px);padding:13px 18px;border-radius:14px;background:#123d2b;color:#fff;font:700 14px/1.65 system-ui,-apple-system,'Segoe UI',Tahoma,Arial,sans-serif;text-align:center;box-shadow:0 10px 32px #0003;opacity:0;visibility:hidden;transition:opacity .2s ease,transform .2s ease,visibility .2s ease;pointer-events:none";
      document.body.appendChild(host);
    }
    host.textContent=String(message??"");
    host.style.opacity="1";host.style.visibility="visible";host.style.transform="translate(-50%,0)";
    clearTimeout(timer);
    timer=setTimeout(()=>{host.style.opacity="0";host.style.visibility="hidden";host.style.transform="translate(-50%,16px)"},3400);
  }
  window.alert=notify;
  window.soukiNotify=notify;
})();