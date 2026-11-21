(function(){
"use strict";
if(!/SOUKIAndroidApp/i.test(navigator.userAgent||"")||window.__soukiPullRefreshInstalled)return;
window.__soukiPullRefreshInstalled=true;
document.documentElement.classList.add("souki-native-app");
document.documentElement.style.overscrollBehaviorY="contain";
const bar=document.createElement("div");bar.id="soukiPullRefreshIndicator";bar.textContent="↓ اسحب للتحديث";
Object.assign(bar.style,{position:"fixed",top:"calc(env(safe-area-inset-top,0px) - 58px)",left:"50%",transform:"translateX(-50%)",zIndex:"99999",padding:"10px 18px",borderRadius:"0 0 18px 18px",background:"#087443",color:"#fff",font:"700 13px system-ui,sans-serif",boxShadow:"0 4px 14px #0003",opacity:"0",transition:"top .16s ease,opacity .16s ease",pointerEvents:"none",whiteSpace:"nowrap"});
function mount(){if(!bar.isConnected&&document.body)document.body.appendChild(bar)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount,{once:true});else mount();
let sy=0,sx=0,tracking=false,active=false,ready=false;const limit=88;
function blocked(t){return !!(t&&t.closest&&t.closest("input,textarea,select,button,a,[contenteditable=true],audio,video,.categories,.leaflet-container"))}
function atTop(t){let n=t;while(n&&n!==document.body&&n!==document.documentElement){const s=getComputedStyle(n);if((s.overflowY==="auto"||s.overflowY==="scroll")&&n.scrollHeight>n.clientHeight+4&&n.scrollTop>1)return false;n=n.parentElement}return window.scrollY<=1||document.documentElement.scrollTop<=1}
function reset(){tracking=false;active=false;ready=false;bar.style.top="calc(env(safe-area-inset-top,0px) - 58px)";bar.style.opacity="0"}
document.addEventListener("touchstart",e=>{if(e.touches.length!==1||blocked(e.target)||!atTop(e.target)){reset();return}sy=e.touches[0].clientY;sx=e.touches[0].clientX;tracking=true;active=false;ready=false},{passive:true});
document.addEventListener("touchmove",e=>{if(!tracking||e.touches.length!==1)return;const dy=e.touches[0].clientY-sy,dx=e.touches[0].clientX-sx;if(dy<=0||Math.abs(dx)>Math.max(24,dy*.8)){if(!active)tracking=false;return}if(!atTop(e.target)){reset();return}if(dy>10){active=true;e.preventDefault();ready=dy>=limit;mount();bar.textContent=ready?"↑ ارفع إصبعك للتحديث":"↓ اسحب للتحديث";bar.style.top="calc(env(safe-area-inset-top,0px) + "+Math.min(12+dy*.48,54)+"px)";bar.style.opacity=String(Math.min(.35+dy/limit*.65,1))}},{passive:false});
document.addEventListener("touchend",()=>{const refresh=tracking&&active&&ready;reset();if(refresh){mount();bar.textContent="جارٍ تحديث سوقي…";bar.style.top="calc(env(safe-area-inset-top,0px) + 12px)";bar.style.opacity="1";location.reload()}},{passive:true});
document.addEventListener("touchcancel",reset,{passive:true});
})();