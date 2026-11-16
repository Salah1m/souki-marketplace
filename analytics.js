(function(){
  const SUPABASE_URL="https://fvaffhfopoxgrofyilqx.supabase.co";
  const SUPABASE_KEY="sb_publishable_R5BievMMk58RUAgrz4Jz4g_SdBRIXEX";
  const SESSION_KEY="souki_visit_recorded_v1";
  try{
    // Count one visit per browser tab/session, not every internal page navigation.
    if(sessionStorage.getItem(SESSION_KEY)==="1")return;
    sessionStorage.setItem(SESSION_KEY,"1");
  }catch(e){
    // If session storage is unavailable, avoid repeated counting in this page load.
    if(window.__soukiVisitRecorded)return;
    window.__soukiVisitRecorded=true;
  }
  async function getLocation(){
    try{
      const cached=localStorage.getItem("souki_ip_city");
      if(cached){const v=JSON.parse(cached);if(v&&v.checkedAt>Date.now()-30*24*60*60*1000)return v;}
      const response=await fetch("https://ipwho.is/",{cache:"no-store"});
      if(!response.ok)throw new Error("geo lookup failed");
      const data=await response.json();
      if(!data.success)throw new Error("geo lookup unavailable");
      const result={city:String(data.city||"").slice(0,100),country:String(data.country||"").slice(0,100),checkedAt:Date.now()};
      localStorage.setItem("souki_ip_city",JSON.stringify(result));
      return result;
    }catch(e){return {city:"",country:""};}
  }
  try{
    let visitorId=localStorage.getItem("souki_visitor_id");
    if(!visitorId){
      visitorId=(crypto.randomUUID?crypto.randomUUID():("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==="x"?r:(r&3|8)).toString(16)})));
      localStorage.setItem("souki_visitor_id",visitorId);
    }
    const path=location.pathname.replace(/\/{2,}/g,"/").slice(0,300)||"/";
    getLocation().then(locationData=>{
      fetch(SUPABASE_URL+"/rest/v1/page_visits",{
        method:"POST",headers:{apikey:SUPABASE_KEY,"Content-Type":"application/json",Prefer:"return=minimal"},
        body:JSON.stringify({visitor_id:visitorId,page_path:path,city:locationData.city||null,country:locationData.country||null})
      }).catch(()=>{});
    });
  }catch(e){}
})();