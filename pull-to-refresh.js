(function(){
"use strict";
if(!/SOUKIAndroidApp/i.test(navigator.userAgent||"")||window.__soukiPullRefreshInstalled)return;
window.__soukiPullRefreshInstalled=true;
document.documentElement.classList.add("souki-native-app");
document.documentElement.style.overscrollBehaviorY="contain";
const spinner=document.createElement("div");
spinner.id="soukiPullRefreshIndicator";
Object.assign(spinner.style,{position:"fixed",top:"calc(env(safe-area-inset-top,0px) - 42px)",left:"50%",width:"30px",height:"30px",boxSizing:"border-box",border:"3px solid #d5d9d6",borderTopColor:"#777",borderRightColor:"#777",borderRadius:"50%",zIndex:"99999",opacity:"0",transition:"top .16s ease,opacity .16s ease",pointerEvents:"none",background:"transparent",animation:"none"});
const style=document.createElement("style");
style.textContent="@keyframes soukiRefreshSpin{to{transform:translateX(-50%) rotate(360deg)}}";
document.head.appendChild(style);
function mount(){if(!spinner.isConnected&&document.body)document.body.appendChild(spinner)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount,{once:true});else mount();
let startY=0,startX=0,tracking=false,active=false,ready=false;
const threshold=88;
function blocked(t){return !!(t&&t.closest&&t.closest("input,textarea,select,button,a,[contenteditable=true],audio,video,.categories,.leaflet-container"))}
function atTop(t){
 let n=t;
 while(n&&n!==document.body&&n!==document.documentElement){
  const cs=getComputedStyle(n);
  if((cs.overflowY==="auto"||cs.overflowY==="scroll")&&n.scrollHeight>n.clientHeight+4&&n.scrollTop>1)return false;
  n=n.parentElement;
 }
 return window.scrollY<=1||document.documentElement.scrollTop<=1;
}
function reset(){
 tracking=false;active=false;ready=false;
 spinner.style.top="calc(env(safe-area-inset-top,0px) - 42px)";
 spinner.style.opacity="0";spinner.style.animation="none";
}
document.addEventListener("touchstart",e=>{
 if(e.touches.length!==1||blocked(e.target)||!atTop(e.target)){reset();return}
 startY=e.touches[0].clientY;startX=e.touches[0].clientX;
 tracking=true;active=false;ready=false;
},{passive:true});
document.addEventListener("touchmove",e=>{
 if(!tracking||e.touches.length!==1)return;
 const dy=e.touches[0].clientY-startY,dx=e.touches[0].clientX-startX;
 if(dy<=0||Math.abs(dx)>Math.max(24,dy*.8)){if(!active)tracking=false;return}
 if(!atTop(e.target)){reset();return}
 if(dy>10){
  active=true;e.preventDefault();ready=dy>=threshold;mount();
  spinner.style.top="calc(env(safe-area-inset-top,0px) + "+Math.min(12+dy*.48,54)+"px)";
  spinner.style.opacity=String(Math.min(.35+dy/threshold*.65,1));
  spinner.style.animation="soukiRefreshSpin .8s linear infinite";
 }
},{passive:false});
document.addEventListener("touchend",()=>{
 const shouldRefresh=tracking&&active&&ready;
 reset();
 if(shouldRefresh){
  mount();spinner.style.top="calc(env(safe-area-inset-top,0px) + 12px)";
  spinner.style.opacity="1";spinner.style.animation="soukiRefreshSpin .8s linear infinite";
  location.reload();
 }
},{passive:true});
document.addEventListener("touchcancel",reset,{passive:true});
})();