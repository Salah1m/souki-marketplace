/* SOUKI shared appearance: apply the saved theme before page content is painted. */
(function(){
  "use strict";
  function readTheme(){
    try{return localStorage.getItem("souki-theme")==="dark"?"dark":"light";}
    catch(e){return "light";}
  }
  function apply(){
    var dark=readTheme()==="dark";
    var root=document.documentElement;
    root.setAttribute("data-souki-theme",dark?"dark":"light");
    root.style.colorScheme=dark?"dark":"light";
    if(document.body){
      document.body.classList.toggle("souki-dark",dark);
      document.body.classList.toggle("dark",dark);
    }
    var meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute("content",dark?"#101a14":"#087443");
  }
  apply();
  document.addEventListener("DOMContentLoaded",apply,{once:true});
  window.addEventListener("storage",function(e){if(e.key==="souki-theme")apply();});
  window.addEventListener("pageshow",apply);
})();