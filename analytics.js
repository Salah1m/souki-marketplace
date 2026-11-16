(function(){
  const SUPABASE_URL="https://fvaffhfopoxgrofyilqx.supabase.co";
  const SUPABASE_KEY="sb_publishable_R5BievMMk58RUAgrz4Jz4g_SdBRIXEX";
  try {
    let visitorId=localStorage.getItem("souki_visitor_id");
    if(!visitorId){
      visitorId=(crypto.randomUUID?crypto.randomUUID():("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==="x"?r:(r&3|8)).toString(16)})));
      localStorage.setItem("souki_visitor_id",visitorId);
    }
    const path=location.pathname.replace(/\/{2,}/g,"/").slice(0,300)||"/";
    fetch(SUPABASE_URL+"/rest/v1/page_visits",{
      method:"POST",headers:{apikey:SUPABASE_KEY,"Content-Type":"application/json",Prefer:"return=minimal"},
      body:JSON.stringify({visitor_id:visitorId,page_path:path})
    }).catch(()=>{});
  } catch(e) {}
})();