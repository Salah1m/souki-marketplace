(()=>{"use strict";
const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
if(!["ar","fr","en"].includes(lang))return;
document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
if(lang==="ar")return;
const D={
fr:{
"حسابي الشخصي":"Mon compte","إدارة ملفك الشخصي ونشاطك في سوقي":"Gérez votre profil et votre activité sur SOUKI","يرجى تسجيل الدخول إلى حسابك أولاً من الصفحة الرئيسية.":"Veuillez d’abord vous connecter depuis la page d’accueil.","مرحباً بك":"Bienvenue","عضو في سوقي":"Membre de SOUKI","اضغط على قلم الصورة لتغييرها، أو قلم الاسم لتعديله":"Cliquez sur le crayon de la photo pour la changer, ou sur celui du nom pour le modifier","اكتب اسمك":"Saisissez votre nom","الاسم الظاهر في سوقي":"Nom affiché sur SOUKI","حفظ":"Enregistrer","إلغاء":"Annuler","الأشخاص الذين يتابعونك":"Personnes qui vous suivent","متابعون":"Abonnés","معلومات الملف الشخصي":"Informations du profil","خدمات حسابك":"Services de votre compte","إعدادات حسابي":"Paramètres du compte","اللغة والخصوصية والإشعارات":"Langue, confidentialité et notifications","البائعون الذين أتابعهم":"Vendeurs suivis","إدارة قائمة المتابعة":"Gérer votre liste d’abonnements","الرسائل":"Messages","رسائلي ومحادثاتي":"Mes messages et conversations","تواصل مع المشترين والبائعين":"Communiquer avec les acheteurs et les vendeurs","لوحة إدارة SOUKI":"Administration SOUKI","إدارة المنصة ومراقبتها":"Gérer et surveiller la plateforme","تسجيل الخروج":"Se déconnecter","إعلاناتي":"Mes annonces","جميع الإعلانات التي نشرتها، بما فيها الإعلانات غير المتوفرة.":"Toutes les annonces que vous avez publiées, y compris celles qui ne sont plus disponibles.","جارٍ تحميل إعلاناتك...":"Chargement de vos annonces…","حفظ التغييرات":"Enregistrer les modifications","تم حفظ بيانات حسابك بنجاح":"Les informations de votre compte ont été enregistrées.","تعذر حفظ التعديلات:":"Impossible d’enregistrer les modifications :","اختر صورة لا يتجاوز حجمها 5 ميغابايت":"Choisissez une image de 5 Mo maximum","لم تنشر أي إعلان بعد. عندما تضيف إعلاناً سيظهر هنا.":"Vous n’avez pas encore publié d’annonce. Vos annonces apparaîtront ici.","إعدادات حسابي":"Paramètres du compte","← العودة إلى السوق":"← Retour au marché",
"الإعدادات":"Paramètres","خصص تجربة SOUKI بالطريقة التي تناسبك. هذه الاختيارات محفوظة في حسابك وحدك ولا تغيّر إعدادات المستخدمين الآخرين.":"Personnalisez votre expérience SOUKI. Ces préférences sont enregistrées uniquement dans votre compte.","جارٍ تحميل إعدادات حسابك...":"Chargement des paramètres…","تفضيلات العرض":"Préférences d’affichage","اللغة":"Langue","لغة واجهة الموقع التي تفضلها":"Langue préférée de l’interface","العملة المفضلة":"Devise préférée","اختيار العملة التي تفضلها":"Choisissez votre devise","مظهر الموقع":"Apparence du site","اختيار المظهر الفاتح أو الداكن":"Choisissez le mode clair ou sombre","فاتح":"Clair","داكن":"Sombre","موقعك":"Votre emplacement","البلد":"Pays","بلد إقامتك أو المكان الذي تستخدم منه سوقي":"Votre pays de résidence ou le lieu depuis lequel vous utilisez SOUKI","المغرب":"Maroc","الجزائر":"Algérie","تونس":"Tunisie","مصر":"Égypte","السعودية":"Arabie saoudite","الإمارات":"Émirats arabes unis","فرنسا":"France","بلد آخر":"Autre pays","المدينة":"Ville","اكتب مدينتك":"Saisissez votre ville","الإشعارات":"Notifications","تفضيل الإشعارات":"Préférences de notification","احفظ اختيارك لتلقي إشعارات سوقي عندما تتوفر هذه الخدمة":"Enregistrez votre choix pour recevoir les notifications SOUKI lorsqu’elles seront disponibles","تفعيل إشعارات الرسائل على الهاتف":"Activer les notifications de messages sur le téléphone","يمكنك تفعيل إشعارات الرسائل حتى عندما لا يكون سوقي مفتوحاً.":"Vous pouvez activer les notifications même lorsque SOUKI est fermé.","حفظ إعداداتي":"Enregistrer mes paramètres","خصوصيتك مهمة: كل مستخدم يستطيع قراءة وتعديل إعداداته الخاصة فقط، ولا يستطيع المستخدمون الآخرون الاطلاع عليها.":"Votre confidentialité est importante : chaque utilisateur peut uniquement consulter et modifier ses propres paramètres.","حسابي":"Mon compte",
"الرسائل":"Messages","رسائلي":"Mes messages","صندوق الرسائل":"Boîte de réception","جارٍ تحميل المحادثات...":"Chargement des conversations…","يجب تسجيل الدخول لعرض رسائلك.":"Connectez-vous pour consulter vos messages.","تسجيل الدخول باستخدام Google":"Se connecter avec Google","لا توجد محادثات حتى الآن. يمكنك مراسلة البائع من صفحة الإعلان.":"Aucune conversation pour le moment. Vous pouvez contacter le vendeur depuis la page de l’annonce.","محادثة الإعلان":"Conversation concernant l’annonce","رسائلك الخاصة مع البائع":"Vos messages privés avec le vendeur","جارٍ تحميل المحادثة...":"Chargement de la conversation…","اكتب رسالتك...":"Écrivez votre message…","إرسال":"Envoyer","هل المنتج متوفر؟":"Le produit est-il disponible ?","هل السعر قابل للتفاوض؟":"Le prix est-il négociable ?","أريد تفاصيل أكثر":"Je souhaite plus de détails","🗑 حذف الرسالة":"🗑 Supprimer le message","حظر المستخدم":"Bloquer l’utilisateur","الإبلاغ عن المحادثة":"Signaler la conversation","مفضلتي":"Mes favoris","المنتجات التي حفظتها للرجوع إليها لاحقاً":"Les articles enregistrés pour plus tard","العودة إلى السوق":"Retour au marché","البائعون الذين أتابعهم":"Vendeurs suivis","← العودة إلى الإعلانات":"← Retour aux annonces"
},
en:{
"حسابي الشخصي":"My Account","إدارة ملفك الشخصي ونشاطك في سوقي":"Manage your profile and activity on SOUKI","يرجى تسجيل الدخول إلى حسابك أولاً من الصفحة الرئيسية.":"Please sign in first from the home page.","مرحباً بك":"Welcome","عضو في سوقي":"SOUKI member","اضغط على قلم الصورة لتغييرها، أو قلم الاسم لتعديله":"Tap the photo pencil to change it, or the name pencil to edit your name","اكتب اسمك":"Enter your name","الاسم الظاهر في سوقي":"Name displayed on SOUKI","حفظ":"Save","إلغاء":"Cancel","الأشخاص الذين يتابعونك":"People following you","متابعون":"Followers","معلومات الملف الشخصي":"Profile information","خدمات حسابك":"Account services","إعدادات حسابي":"Account settings","اللغة والخصوصية والإشعارات":"Language, privacy and notifications","البائعون الذين أتابعهم":"Sellers I follow","إدارة قائمة المتابعة":"Manage your following list","الرسائل":"Messages","رسائلي ومحادثاتي":"My messages and conversations","تواصل مع المشترين والبائعين":"Chat with buyers and sellers","لوحة إدارة SOUKI":"SOUKI Admin","إدارة المنصة ومراقبتها":"Manage and monitor the platform","تسجيل الخروج":"Sign out","إعلاناتي":"My Ads","جميع الإعلانات التي نشرتها، بما فيها الإعلانات غير المتوفرة.":"All ads you have posted, including unavailable listings.","جارٍ تحميل إعلاناتك...":"Loading your ads…","حفظ التغييرات":"Save changes","تم حفظ بيانات حسابك بنجاح":"Your account details were saved successfully","اختر صورة لا يتجاوز حجمها 5 ميغابايت":"Choose an image no larger than 5 MB","لم تنشر أي إعلان بعد. عندما تضيف إعلاناً سيظهر هنا.":"You haven’t posted any ads yet. Your ads will appear here.","← العودة إلى السوق":"← Back to marketplace",
"الإعدادات":"Settings","خصص تجربة SOUKI بالطريقة التي تناسبك. هذه الاختيارات محفوظة في حسابك وحدك ولا تغيّر إعدادات المستخدمين الآخرين.":"Customize your SOUKI experience. These preferences are saved only to your account and do not affect other users.","جارٍ تحميل إعدادات حسابك...":"Loading your account settings…","تفضيلات العرض":"Display preferences","اللغة":"Language","لغة واجهة الموقع التي تفضلها":"Your preferred interface language","العملة المفضلة":"Preferred currency","اختيار العملة التي تفضلها":"Choose your preferred currency","مظهر الموقع":"Site appearance","اختيار المظهر الفاتح أو الداكن":"Choose light or dark mode","فاتح":"Light","داكن":"Dark","موقعك":"Your location","البلد":"Country","بلد إقامتك أو المكان الذي تستخدم منه سوقي":"Your country of residence or where you use SOUKI","المغرب":"Morocco","الجزائر":"Algeria","تونس":"Tunisia","مصر":"Egypt","السعودية":"Saudi Arabia","الإمارات":"United Arab Emirates","فرنسا":"France","بلد آخر":"Other country","المدينة":"City","اكتب مدينتك":"Enter your city","الإشعارات":"Notifications","تفضيل الإشعارات":"Notification preferences","احفظ اختيارك لتلقي إشعارات سوقي عندما تتوفر هذه الخدمة":"Save your choice to receive SOUKI notifications when available","تفعيل إشعارات الرسائل على الهاتف":"Enable message notifications on this phone","يمكنك تفعيل إشعارات الرسائل حتى عندما لا يكون سوقي مفتوحاً.":"You can receive message notifications even when SOUKI is closed.","حفظ إعداداتي":"Save my settings","خصوصيتك مهمة: كل مستخدم يستطيع قراءة وتعديل إعداداته الخاصة فقط، ولا يستطيع المستخدمون الآخرون الاطلاع عليها.":"Your privacy matters: each user can only view and edit their own settings.","حسابي":"My Account",
"الرسائل":"Messages","رسائلي":"My Messages","صندوق الرسائل":"Inbox","جارٍ تحميل المحادثات...":"Loading conversations…","يجب تسجيل الدخول لعرض رسائلك.":"Please sign in to view your messages.","تسجيل الدخول باستخدام Google":"Sign in with Google","لا توجد محادثات حتى الآن. يمكنك مراسلة البائع من صفحة الإعلان.":"No conversations yet. You can message a seller from an ad page.","محادثة الإعلان":"Listing conversation","رسائلك الخاصة مع البائع":"Your private messages with the seller","جارٍ تحميل المحادثة...":"Loading conversation…","اكتب رسالتك...":"Write your message…","إرسال":"Send","هل المنتج متوفر؟":"Is this item available?","هل السعر قابل للتفاوض؟":"Is the price negotiable?","أريد تفاصيل أكثر":"I would like more details","🗑 حذف الرسالة":"🗑 Delete message","حظر المستخدم":"Block user","الإبلاغ عن المحادثة":"Report conversation","مفضلتي":"My Favorites","المنتجات التي حفظتها للرجوع إليها لاحقاً":"Items you saved for later","العودة إلى السوق":"Back to marketplace","← العودة إلى الإعلانات":"← Back to listings"
}};
const dict=D[lang]||{};
const attrMap={"العودة إلى السوق":dict["← العودة إلى السوق"]||"Back to marketplace","تغيير الصورة الشخصية":lang==="fr"?"Changer la photo de profil":"Change profile photo","تغيير الاسم":lang==="fr"?"Modifier le nom":"Edit name","اختيار صورة شخصية":lang==="fr"?"Choisir une photo de profil":"Choose profile photo","إغلاق":lang==="fr"?"Fermer":"Close"};
function translateRoot(root=document){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=walker.nextNode())){const raw=n.nodeValue,trim=raw.trim();if(dict[trim])n.nodeValue=raw.replace(trim,dict[trim]);}
 root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach(el=>{for(const a of ["placeholder","aria-label","title"]){const v=el.getAttribute(a);if(v&&attrMap[v])el.setAttribute(a,attrMap[v]);}});
}
const languageSelect=document.getElementById("language");
if(languageSelect){languageSelect.addEventListener("change",()=>{try{localStorage.setItem("souki-language",languageSelect.value)}catch(e){}location.reload()})}
translateRoot();
const observer=new MutationObserver(records=>{for(const r of records){if(r.type==="childList")r.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE){const k=n.nodeValue.trim();if(dict[k])n.nodeValue=n.nodeValue.replace(k,dict[k])}else if(n.nodeType===Node.ELEMENT_NODE)translateRoot(n)});}});
observer.observe(document.body,{subtree:true,childList:true});
const titles={"حسابي الشخصي | SOUKI":lang==="fr"?"Mon compte | SOUKI":"My Account | SOUKI","الإعدادات | SOUKI":lang==="fr"?"Paramètres | SOUKI":"Settings | SOUKI","رسائلي | سوقي":lang==="fr"?"Messages | SOUKI":"My Messages | SOUKI","مفضلتي | SOUKI":lang==="fr"?"Favoris | SOUKI":"My Favorites | SOUKI"};
if(titles[document.title])document.title=titles[document.title];
})();
/* Extended page translations for account and listing forms */
(()=> {
 const l=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(l==="ar")return;
 const maps={
 fr:{
 "سوقي · SOUKI":"SOUKI · Marketplace","← العودة إلى السوق":"← Retour au marché","حسابي الشخصي":"Mon compte","إدارة ملفك الشخصي ونشاطك في سوقي":"Gérez votre profil et votre activité sur SOUKI","يرجى تسجيل الدخول إلى حسابك أولاً من الصفحة الرئيسية.":"Veuillez d’abord vous connecter depuis la page d’accueil.","الصورة الشخصية":"Photo de profil","تغيير الصورة الشخصية":"Changer la photo de profil","تغيير الاسم":"Modifier le nom","عضو في سوقي":"Membre de SOUKI","اضغط على قلم الصورة لتغييرها، أو قلم الاسم لتعديله":"Utilisez le crayon pour modifier votre photo ou votre nom","مرحباً بك":"Bienvenue","اكتب اسمك":"Saisissez votre nom","الاسم الظاهر في سوقي":"Nom affiché sur SOUKI","اختيار صورة شخصية":"Choisir une photo de profil","حفظ":"Enregistrer","إلغاء":"Annuler","الأشخاص الذين يتابعونك":"Personnes qui vous suivent","متابعون":"Abonnés","معلومات الملف الشخصي":"Informations du profil","خدمات حسابك":"Services de votre compte","إعدادات حسابي":"Paramètres du compte","اللغة والخصوصية والإشعارات":"Langue, confidentialité et notifications","البائعون الذين أتابعهم":"Vendeurs suivis","إدارة قائمة المتابعة":"Gérer les abonnements","رسائلي ومحادثاتي":"Mes messages et conversations","تواصل مع المشترين والبائعين":"Communiquer avec les acheteurs et les vendeurs","لوحة إدارة SOUKI":"Administration SOUKI","إدارة المنصة ومراقبتها":"Gérer la plateforme","تسجيل الخروج":"Se déconnecter","إعلاناتي":"Mes annonces","جميع الإعلانات التي نشرتها، بما فيها الإعلانات غير المتوفرة.":"Toutes les annonces que vous avez publiées, y compris celles qui ne sont plus disponibles.","جارٍ تحميل إعلاناتك...":"Chargement de vos annonces…","لم تنشر أي إعلان بعد. عندما تضيف إعلاناً سيظهر هنا.":"Vous n’avez pas encore publié d’annonce.","إضافة إعلان":"Publier une annonce","لإضافة إعلان، سجّل الدخول أولاً إلى حسابك في سوقي.":"Connectez-vous d’abord à votre compte SOUKI pour publier une annonce.","تسجيل الدخول باستخدام Google":"Se connecter avec Google","اسم المنتج":"Nom du produit","السعر بالدرهم":"Prix en dirhams","حالة المنتج":"État du produit","اختر حالة المنتج":"Choisissez l’état du produit","جديد":"Neuf","مستعمل":"Occasion","وصف الإعلان":"Description de l’annonce","اكتب تفاصيل المنتج وحالته ومميزاته...":"Décrivez le produit, son état et ses caractéristiques…","الفئة":"Catégorie","اختر الفئة":"Choisissez une catégorie","المدينة":"Ville","اختر المدينة":"Choisissez une ville","صور المنتج (حتى 5 صور)":"Photos du produit (jusqu’à 5)","إضافة صور":"Ajouter des photos","اختيار من الهاتف":"Choisir depuis le téléphone","اختر صورة واحدة على الأقل، وحتى 5 صور.":"Choisissez au moins une photo, jusqu’à 5 photos.","رقم WhatsApp":"Numéro WhatsApp","اكتب الرقم مع رمز الدولة، مثلاً 212.":"Saisissez le numéro avec l’indicatif du pays, par exemple 212.","طريقة التواصل معك":"Mode de contact","💬 محادثة داخل سوقي + WhatsApp":"💬 Chat SOUKI + WhatsApp","💬 المحادثة داخل سوقي فقط":"💬 Chat SOUKI uniquement","🟢 WhatsApp فقط":"🟢 WhatsApp uniquement","اختر كيف تريد أن يتواصل معك المشترون بخصوص هذا الإعلان.":"Choisissez comment les acheteurs peuvent vous contacter pour cette annonce.","نشر الإعلان":"Publier l’annonce","إغلاق":"Fermer","حذف الصورة":"Supprimer la photo","عرض الصورة بالحجم الكبير":"Afficher l’image en grand"
 },
 en:{
 "سوقي · SOUKI":"SOUKI Marketplace","← العودة إلى السوق":"← Back to marketplace","حسابي الشخصي":"My Account","إدارة ملفك الشخصي ونشاطك في سوقي":"Manage your profile and activity on SOUKI","يرجى تسجيل الدخول إلى حسابك أولاً من الصفحة الرئيسية.":"Please sign in first from the home page.","الصورة الشخصية":"Profile photo","تغيير الصورة الشخصية":"Change profile photo","تغيير الاسم":"Edit name","عضو في سوقي":"SOUKI member","اضغط على قلم الصورة لتغييرها، أو قلم الاسم لتعديله":"Use the pencil to change your photo or edit your name","مرحباً بك":"Welcome","اكتب اسمك":"Enter your name","الاسم الظاهر في سوقي":"Name displayed on SOUKI","اختيار صورة شخصية":"Choose profile photo","حفظ":"Save","إلغاء":"Cancel","الأشخاص الذين يتابعونك":"People following you","متابعون":"Followers","معلومات الملف الشخصي":"Profile information","خدمات حسابك":"Account services","إعدادات حسابي":"Account settings","اللغة والخصوصية والإشعارات":"Language, privacy and notifications","البائعون الذين أتابعهم":"Sellers I follow","إدارة قائمة المتابعة":"Manage following list","رسائلي ومحادثاتي":"My messages and conversations","تواصل مع المشترين والبائعين":"Chat with buyers and sellers","لوحة إدارة SOUKI":"SOUKI Admin","إدارة المنصة ومراقبتها":"Manage the platform","تسجيل الخروج":"Sign out","إعلاناتي":"My Ads","جميع الإعلانات التي نشرتها، بما فيها الإعلانات غير المتوفرة.":"All ads you have posted, including unavailable listings.","جارٍ تحميل إعلاناتك...":"Loading your ads…","لم تنشر أي إعلان بعد. عندما تضيف إعلاناً سيظهر هنا.":"You haven’t posted any ads yet.","إضافة إعلان":"Post an ad","لإضافة إعلان، سجّل الدخول أولاً إلى حسابك في سوقي.":"Sign in to your SOUKI account before posting an ad.","تسجيل الدخول باستخدام Google":"Sign in with Google","اسم المنتج":"Product name","السعر بالدرهم":"Price in MAD","حالة المنتج":"Product condition","اختر حالة المنتج":"Choose product condition","جديد":"New","مستعمل":"Used","وصف الإعلان":"Ad description","اكتب تفاصيل المنتج وحالته ومميزاته...":"Describe the product, its condition and features…","الفئة":"Category","اختر الفئة":"Choose a category","المدينة":"City","اختر المدينة":"Choose a city","صور المنتج (حتى 5 صور)":"Product photos (up to 5)","إضافة صور":"Add photos","اختيار من الهاتف":"Choose from phone","اختر صورة واحدة على الأقل، وحتى 5 صور.":"Choose at least one photo, up to 5 photos.","رقم WhatsApp":"WhatsApp number","اكتب الرقم مع رمز الدولة، مثلاً 212.":"Enter the number with country code, e.g. 212.","طريقة التواصل معك":"Contact method","💬 محادثة داخل سوقي + WhatsApp":"💬 SOUKI chat + WhatsApp","💬 المحادثة داخل سوقي فقط":"💬 SOUKI chat only","🟢 WhatsApp فقط":"🟢 WhatsApp only","اختر كيف تريد أن يتواصل معك المشترون بخصوص هذا الإعلان.":"Choose how buyers can contact you about this ad.","نشر الإعلان":"Publish ad","إغلاق":"Close","حذف الصورة":"Delete photo","عرض الصورة بالحجم الكبير":"View image full size"
 }};
 const dict=maps[l]||{};
 const norm=s=>s.replace(/\s+/g," ").trim();
 const attrs=["placeholder","aria-label","title"];
 function walk(root){
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){const key=norm(n.nodeValue);if(dict[key])n.nodeValue=n.nodeValue.replace(key,dict[key]);}
  if(root.querySelectorAll)root.querySelectorAll("*").forEach(el=>attrs.forEach(a=>{const v=el.getAttribute(a);if(v&&dict[norm(v)])el.setAttribute(a,dict[norm(v)]);}));
 }
 walk(document.body);
 new MutationObserver(records=>records.forEach(rec=>{
  if(rec.type==="childList")rec.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE){const k=norm(n.nodeValue);if(dict[k])n.nodeValue=n.nodeValue.replace(k,dict[k]);}else if(n.nodeType===Node.ELEMENT_NODE)walk(n);});
  else if(rec.type==="characterData"){const k=norm(rec.target.nodeValue);if(dict[k])rec.target.nodeValue=rec.target.nodeValue.replace(k,dict[k]);}
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
})();


/* Final translations for remaining internal-page labels and dynamically rendered UI */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const maps={
 fr:{
  "حسابي ←":"Mon compte ←","💬 رسائلي":"💬 Mes messages","جارٍ تحميل المحادثات...":"Chargement des conversations…","يجب تسجيل الدخول لعرض رسائلك.":"Connectez-vous pour consulter vos messages.","تسجيل الدخول باستخدام Google":"Se connecter avec Google","لا توجد محادثات حتى الآن. يمكنك مراسلة البائع من صفحة الإعلان.":"Aucune conversation pour le moment. Vous pouvez contacter le vendeur depuis la page de l’annonce.","حدث خطأ أثناء تحميل المحادثات.":"Une erreur est survenue lors du chargement des conversations.",
  "❤️ مفضلتي":"❤️ Mes favoris","المنتجات التي حفظتها للرجوع إليها لاحقاً":"Les articles enregistrés pour plus tard","جارٍ تحميل المفضلة...":"Chargement des favoris…","سجّل الدخول إلى سوقي لرؤية المنتجات التي أضفتها إلى المفضلة.":"Connectez-vous à SOUKI pour voir vos articles favoris.","العودة إلى سوقي":"Retour à SOUKI","لم تحفظ أي منتج بعد. اضغط على ❤️ في بطاقة أي منتج لإضافته هنا.":"Vous n’avez encore enregistré aucun article. Appuyez sur ❤️ sur une fiche produit pour l’ajouter ici.","تصفح المنتجات":"Parcourir les articles","لا توجد منتجات متاحة حالياً في مفضلتك.":"Aucun article n’est actuellement disponible dans vos favoris.","إزالة من المفضلة":"Retirer des favoris",
  "إعلاناتي":"Mes annonces","المبيعات:":"Ventes :","درهم":"DH","متاح للشراء":"Disponible à l’achat","غير متوفر":"Indisponible","فتح الإعلان وتعديله ←":"Ouvrir et modifier l’annonce ←","تعذر تحميل إعلاناتك:":"Impossible de charger vos annonces :","حدث خطأ أثناء تحميل إعلاناتك. أعد تحميل الصفحة.":"Une erreur est survenue lors du chargement de vos annonces. Rechargez la page.",
  "مثلاً: iPhone 13 أو Samsung Galaxy":"Ex. : iPhone 13 ou Samsung Galaxy","أدخل السعر":"Saisissez le prix","اختر حالة المنتج":"Choisissez l’état du produit","اكتب تفاصيل المنتج وحالته ومميزاته...":"Décrivez le produit, son état et ses caractéristiques…","اختر الفئة":"Choisissez une catégorie","اختر المدينة":"Choisissez une ville","اختر صورة واحدة على الأقل، وحتى 5 صور.":"Choisissez au moins une photo, jusqu’à 5 photos.","اختر كيف تريد أن يتواصل معك المشترون بخصوص هذا الإعلان.":"Choisissez comment les acheteurs peuvent vous contacter pour cette annonce.","اختر صور المنتج":"Choisir les photos du produit"
 },
 en:{
  "حسابي ←":"My Account ←","💬 رسائلي":"💬 My Messages","جارٍ تحميل المحادثات...":"Loading conversations…","يجب تسجيل الدخول لعرض رسائلك.":"Please sign in to view your messages.","تسجيل الدخول باستخدام Google":"Sign in with Google","لا توجد محادثات حتى الآن. يمكنك مراسلة البائع من صفحة الإعلان.":"No conversations yet. You can message a seller from an ad page.","حدث خطأ أثناء تحميل المحادثات.":"An error occurred while loading conversations.",
  "❤️ مفضلتي":"❤️ My Favorites","المنتجات التي حفظتها للرجوع إليها لاحقاً":"Items you saved for later","جارٍ تحميل المفضلة...":"Loading favorites…","سجّل الدخول إلى سوقي لرؤية المنتجات التي أضفتها إلى المفضلة.":"Sign in to SOUKI to see your saved items.","العودة إلى سوقي":"Back to SOUKI","لم تحفظ أي منتج بعد. اضغط على ❤️ في بطاقة أي منتج لإضافته هنا.":"You haven’t saved any items yet. Tap ❤️ on any product card to add it here.","تصفح المنتجات":"Browse listings","لا توجد منتجات متاحة حالياً في مفضلتك.":"No items are currently available in your favorites.","إزالة من المفضلة":"Remove from favorites",
  "إعلاناتي":"My Ads","المبيعات:":"Sales:","درهم":"MAD","متاح للشراء":"Available","غير متوفر":"Unavailable","فتح الإعلان وتعديله ←":"Open and edit listing ←","تعذر تحميل إعلاناتك:":"Could not load your ads:","حدث خطأ أثناء تحميل إعلاناتك. أعد تحميل الصفحة.":"An error occurred while loading your ads. Reload the page.",
  "مثلاً: iPhone 13 أو Samsung Galaxy":"E.g. iPhone 13 or Samsung Galaxy","أدخل السعر":"Enter price","اختر حالة المنتج":"Choose product condition","اكتب تفاصيل المنتج وحالته ومميزاته...":"Describe the product, its condition and features…","اختر الفئة":"Choose a category","اختر المدينة":"Choose a city","اختر صورة واحدة على الأقل، وحتى 5 صور.":"Choose at least one photo, up to 5 photos.","اختر كيف تريد أن يتواصل معك المشترون بخصوص هذا الإعلان.":"Choose how buyers can contact you about this ad.","اختر صور المنتج":"Choose product photos"
 }
 };
 const dict=maps[lang]||{};
 const attrs=["placeholder","aria-label","title"];
 const protectedText=".ad-title,.body h3,.details strong,.details small";
 function translateNode(node){
  if(!node||!node.nodeValue)return;
  const parent=node.parentElement;
  if(parent&&parent.closest(protectedText))return;
  let value=node.nodeValue;
  for(const [ar,translated] of Object.entries(dict)){
   if(value.includes(ar))value=value.split(ar).join(translated);
  }
  if(value!==node.nodeValue)node.nodeValue=value;
 }
 function translateElement(root){
  if(root.nodeType===Node.TEXT_NODE){translateNode(root);return}
  if(root.nodeType!==Node.ELEMENT_NODE&&root!==document)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node;while((node=walker.nextNode()))translateNode(node);
  if(root.querySelectorAll)root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el=>{
   for(const attr of attrs){const value=el.getAttribute(attr);if(value&&dict[value])el.setAttribute(attr,dict[value]);}
  });
 }
 translateElement(document.body);
 new MutationObserver(records=>records.forEach(record=>{
  if(record.type==="characterData")translateNode(record.target);
  else record.addedNodes.forEach(node=>translateElement(node));
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
 const titleMap={"رسائلي | سوقي":lang==="fr"?"Messages | SOUKI":"My Messages | SOUKI","مفضلتي | SOUKI":lang==="fr"?"Favoris | SOUKI":"My Favorites | SOUKI","حسابي الشخصي | SOUKI":lang==="fr"?"Mon compte | SOUKI":"My Account | SOUKI","إضافة إعلان | سوقي":lang==="fr"?"Publier une annonce | SOUKI":"Post an ad | SOUKI"};
 if(titleMap[document.title])document.title=titleMap[document.title];
})();

/* Listing details and private chat interface */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const dict=lang==="fr"?{
  "جارٍ تحميل الإعلان...":"Chargement de l’annonce…",
  "تعذر تحميل الإعلان. تحقق من اتصال الإنترنت وحاول مجدداً.":"Impossible de charger l’annonce. Vérifiez votre connexion Internet et réessayez.",
  "رابط الإعلان غير صحيح.":"Le lien de l’annonce est invalide.",
  "تعذر العثور على الإعلان. ربما تم حذفه أو إيقافه.":"Annonce introuvable. Elle a peut-être été supprimée ou désactivée.",
  "💬 مراسلة البائع داخل سوقي":"💬 Contacter le vendeur sur SOUKI",
  "مراسلة البائع داخل سوقي":"Contacter le vendeur sur SOUKI",
  "جارٍ تحميل المتابعين...":"Chargement des abonnés…",
  "عرض المزيد":"Voir plus","عرض أقل":"Voir moins",
  "جارٍ حفظ التعديلات...":"Enregistrement des modifications…",
  "حفظ التعديلات":"Enregistrer les modifications",
  "جارٍ حذف الإعلان...":"Suppression de l’annonce…",
  "🗑️ حذف الإعلان":"🗑️ Supprimer l’annonce",
  "✏️ تعديل الإعلان":"✏️ Modifier l’annonce",
  "محادثة الإعلان":"Conversation concernant l’annonce",
  "رسائلك الخاصة مع البائع":"Vos messages privés avec le vendeur",
  "جارٍ تحميل المحادثة...":"Chargement de la conversation…",
  "يجب تسجيل الدخول قبل إرسال الرسائل.":"Connectez-vous pour envoyer des messages.",
  "الإعلان غير متاح للمراسلة.":"Cette annonce n’est pas disponible pour la messagerie.",
  "لا يمكنك بدء محادثة مع نفسك.":"Vous ne pouvez pas démarrer une conversation avec vous-même.",
  "هذا الإعلان لا يقبل الرسائل الداخلية.":"Cette annonce n’accepte pas les messages internes.",
  "تعذر فتح المحادثة:":"Impossible d’ouvrir la conversation :",
  "رابط المحادثة غير صحيح.":"Le lien de la conversation est invalide.",
  "ليس لديك صلاحية الوصول إلى هذه المحادثة.":"Vous n’êtes pas autorisé à accéder à cette conversation.",
  "لا يمكن إرسال الرسائل بسبب وجود حظر بين الطرفين.":"Les messages ne peuvent pas être envoyés en raison d’un blocage entre les deux utilisateurs.",
  "تعذر تحميل الرسائل.":"Impossible de charger les messages.",
  "اكتب رسالتك...":"Écrivez votre message…",
  "إرسال":"Envoyer","حظر المستخدم":"Bloquer l’utilisateur",
  "الإبلاغ عن المحادثة":"Signaler la conversation",
  "حدث خطأ:":"Une erreur est survenue :"
 }:{
  "جارٍ تحميل الإعلان...":"Loading listing…",
  "تعذر تحميل الإعلان. تحقق من اتصال الإنترنت وحاول مجدداً.":"Could not load the listing. Check your internet connection and try again.",
  "رابط الإعلان غير صحيح.":"Invalid listing link.",
  "تعذر العثور على الإعلان. ربما تم حذفه أو إيقافه.":"Listing not found. It may have been deleted or disabled.",
  "💬 مراسلة البائع داخل سوقي":"💬 Message seller on SOUKI",
  "مراسلة البائع داخل سوقي":"Message seller on SOUKI",
  "جارٍ تحميل المتابعين...":"Loading followers…",
  "عرض المزيد":"Show more","عرض أقل":"Show less",
  "جارٍ حفظ التعديلات...":"Saving changes…",
  "حفظ التعديلات":"Save changes",
  "جارٍ حذف الإعلان...":"Deleting listing…",
  "🗑️ حذف الإعلان":"🗑️ Delete listing",
  "✏️ تعديل الإعلان":"✏️ Edit listing",
  "محادثة الإعلان":"Listing conversation",
  "رسائلك الخاصة مع البائع":"Your private messages with the seller",
  "جارٍ تحميل المحادثة...":"Loading conversation…",
  "يجب تسجيل الدخول قبل إرسال الرسائل.":"Sign in before sending messages.",
  "الإعلان غير متاح للمراسلة.":"This listing is not available for messaging.",
  "لا يمكنك بدء محادثة مع نفسك.":"You cannot start a conversation with yourself.",
  "هذا الإعلان لا يقبل الرسائل الداخلية.":"This listing does not accept internal messages.",
  "تعذر فتح المحادثة:":"Could not open conversation:",
  "رابط المحادثة غير صحيح.":"Invalid conversation link.",
  "ليس لديك صلاحية الوصول إلى هذه المحادثة.":"You are not authorized to access this conversation.",
  "لا يمكن إرسال الرسائل بسبب وجود حظر بين الطرفين.":"Messages cannot be sent because one user has blocked the other.",
  "تعذر تحميل الرسائل.":"Could not load messages.",
  "اكتب رسالتك...":"Write your message…",
  "إرسال":"Send","حظر المستخدم":"Block user",
  "الإبلاغ عن المحادثة":"Report conversation",
  "حدث خطأ:":"An error occurred:"
 };
 const norm=s=>s.replace(/\s+/g," ").trim();
 function translateText(node){
  const raw=node.nodeValue;if(!raw)return;
  const key=norm(raw);
  if(dict[key]){node.nodeValue=raw.replace(key,dict[key]);return;}
  let next=raw;
  for(const [ar,en] of Object.entries(dict))if(next.includes(ar))next=next.split(ar).join(en);
  if(next!==raw)node.nodeValue=next;
 }
 function scan(root){
  if(root.nodeType===Node.TEXT_NODE){translateText(root);return}
  if(root.nodeType!==Node.ELEMENT_NODE&&root!==document)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
  while((n=walker.nextNode()))translateText(n);
  if(root.querySelectorAll)root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el=>{
   for(const a of ["placeholder","aria-label","title"]){const v=el.getAttribute(a);if(v&&dict[v])el.setAttribute(a,dict[v]);}
  });
 }
 scan(document.body);
 new MutationObserver(records=>records.forEach(rec=>{
  if(rec.type==="characterData")translateText(rec.target);
  else rec.addedNodes.forEach(scan);
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
 const titles={"تفاصيل الإعلان | سوقي":lang==="fr"?"Détails de l’annonce | SOUKI":"Listing details | SOUKI","محادثة سوقي | SOUKI":lang==="fr"?"Conversation SOUKI | SOUKI":"SOUKI Chat | SOUKI"};
 if(titles[document.title])document.title=titles[document.title];
})();

/* WhatsApp contact and listing availability controls */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const d=lang==="fr"?{
  "تواصل مع البائع عبر WhatsApp":"Contacter le vendeur via WhatsApp",
  "⛔ جعل المنتج غير متوفر":"⛔ Marquer comme indisponible",
  "✅ إعادة إتاحة المنتج":"✅ Rendre le produit disponible",
  "هل تريد جعل هذا المنتج غير متوفر وإخفاءه من الإعلانات؟":"Voulez-vous marquer ce produit comme indisponible et le masquer des annonces ?",
  "هل تريد إعادة إتاحة المنتج للناس؟":"Voulez-vous rendre ce produit à nouveau disponible ?",
  "تعذر تحديث حالة المنتج:":"Impossible de mettre à jour le statut du produit :",
  "أصبح المنتج غير متوفر ولن يظهر في الإعلانات.":"Le produit est maintenant indisponible et n’apparaîtra plus dans les annonces.",
  "تمت إعادة إتاحة المنتج.":"Le produit est de nouveau disponible.",
  "جارٍ حذف الإعلان...":"Suppression de l’annonce…",
  "ليس لديك صلاحية حذف هذا الإعلان.":"Vous n’êtes pas autorisé à supprimer cette annonce.",
  "هل أنت متأكد أنك تريد حذف هذا الإعلان نهائياً؟ لا يمكن التراجع عن هذه العملية.":"Voulez-vous vraiment supprimer définitivement cette annonce ? Cette action est irréversible.",
  "تعذر تحديث الطلب:":"Impossible de mettre à jour la demande :",
  "تم تأكيد البيع واحتساب عملية بيع جديدة.":"Vente confirmée et comptabilisée.",
  "تم رفض الطلب.":"Demande refusée."
 }:{
  "تواصل مع البائع عبر WhatsApp":"Contact seller via WhatsApp",
  "⛔ جعل المنتج غير متوفر":"⛔ Mark as unavailable",
  "✅ إعادة إتاحة المنتج":"✅ Make product available",
  "هل تريد جعل هذا المنتج غير متوفر وإخفاءه من الإعلانات؟":"Do you want to mark this product as unavailable and hide it from listings?",
  "هل تريد إعادة إتاحة المنتج للناس؟":"Do you want to make this product available again?",
  "تعذر تحديث حالة المنتج:":"Could not update product status:",
  "أصبح المنتج غير متوفر ولن يظهر في الإعلانات.":"The product is now unavailable and will no longer appear in listings.",
  "تمت إعادة إتاحة المنتج.":"The product is available again.",
  "جارٍ حذف الإعلان...":"Deleting listing…",
  "ليس لديك صلاحية حذف هذا الإعلان.":"You are not authorized to delete this listing.",
  "هل أنت متأكد أنك تريد حذف هذا الإعلان نهائياً؟ لا يمكن التراجع عن هذه العملية.":"Are you sure you want to permanently delete this listing? This action cannot be undone.",
  "تعذر تحديث الطلب:":"Could not update request:",
  "تم تأكيد البيع واحتساب عملية بيع جديدة.":"Sale confirmed and recorded.",
  "تم رفض الطلب.":"Request rejected."
 };
 function trText(node){
  if(!node||!node.nodeValue)return;
  let s=node.nodeValue;
  for(const [a,b] of Object.entries(d))if(s.includes(a))s=s.split(a).join(b);
  if(s!==node.nodeValue)node.nodeValue=s;
 }
 function scan(root){
  if(root.nodeType===Node.TEXT_NODE){trText(root);return}
  if(root.nodeType!==Node.ELEMENT_NODE&&root!==document)return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))trText(n);
 }
 scan(document.body);
 new MutationObserver(records=>records.forEach(r=>{
  if(r.type==="characterData")trText(r.target);else r.addedNodes.forEach(scan);
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
})();

/* Settings page complete localization and explicit availability-button label */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const d=lang==="fr"?{
  "⚙️ الإعدادات":"⚙️ Paramètres","خصص تجربة SOUKI بالطريقة التي تناسبك. هذه الاختيارات محفوظة في حسابك وحدك ولا تغيّر إعدادات المستخدمين الآخرين.":"Personnalisez votre expérience SOUKI. Ces préférences sont enregistrées uniquement dans votre compte et ne modifient pas les paramètres des autres utilisateurs.",
  "جارٍ تحميل إعدادات حسابك...":"Chargement des paramètres de votre compte…","يرجى تسجيل الدخول أولاً لفتح إعدادات حسابك.":"Veuillez vous connecter pour accéder aux paramètres de votre compte.","تعذر تحميل الإعدادات:":"Impossible de charger les paramètres :",
  "🌐 تفضيلات العرض":"🌐 Préférences d’affichage","اللغة":"Langue","لغة واجهة الموقع التي تفضلها":"Langue préférée de l’interface","العملة المفضلة":"Devise préférée","اختيار العملة التي تفضلها":"Choisissez votre devise préférée","مظهر الموقع":"Apparence du site","اختيار المظهر الفاتح أو الداكن":"Choisissez le thème clair ou sombre","فاتح":"Clair","داكن":"Sombre",
  "📍 موقعك":"📍 Votre emplacement","البلد":"Pays","بلد إقامتك أو المكان الذي تستخدم منه سوقي":"Votre pays de résidence ou le lieu depuis lequel vous utilisez SOUKI","المغرب":"Maroc","الجزائر":"Algérie","تونس":"Tunisie","مصر":"Égypte","السعودية":"Arabie saoudite","الإمارات":"Émirats arabes unis","فرنسا":"France","بلد آخر":"Autre pays","المدينة":"Ville","اكتب مدينتك":"Saisissez votre ville",
  "🔔 الإشعارات":"🔔 Notifications","تفضيل الإشعارات":"Préférences de notification","احفظ اختيارك لتلقي إشعارات سوقي عندما تتوفر هذه الخدمة":"Enregistrez votre choix pour recevoir les notifications SOUKI lorsqu’elles seront disponibles","🔔 تفعيل إشعارات الرسائل على الهاتف":"🔔 Activer les notifications de messages sur le téléphone","يمكنك تفعيل إشعارات الرسائل حتى عندما لا يكون سوقي مفتوحاً.":"Vous pouvez recevoir des notifications même lorsque SOUKI est fermé.","حفظ إعداداتي":"Enregistrer mes paramètres",
  "🔒 خصوصيتك مهمة: كل مستخدم يستطيع قراءة وتعديل إعداداته الخاصة فقط، ولا يستطيع المستخدمون الآخرون الاطلاع عليها.":"🔒 Votre confidentialité est importante : chaque utilisateur peut uniquement consulter et modifier ses propres paramètres.",
  "جارٍ تفعيل الإشعارات...":"Activation des notifications…","🔔 إعادة محاولة التفعيل":"🔔 Réessayer l’activation","هذا المتصفح لا يدعم إشعارات الويب.":"Ce navigateur ne prend pas en charge les notifications web.","لم يتم تفعيل إشعارات الرسائل على هذا الجهاز بعد.":"Les notifications de messages ne sont pas encore activées sur cet appareil.","الإشعارات محظورة من إعدادات المتصفح.":"Les notifications sont bloquées dans les paramètres du navigateur.","تعذر تجهيز الإشعارات:":"Impossible de préparer les notifications :","لم تسمح بإرسال الإشعارات. غيّر إذن الإشعارات من إعدادات المتصفح.":"Vous n’avez pas autorisé les notifications. Modifiez l’autorisation dans les paramètres du navigateur.","تعذر التفعيل:":"Échec de l’activation :","تم تفعيل إشعارات الرسائل على هذا الجهاز.":"Les notifications de messages sont activées sur cet appareil.","تعذر حفظ الإعدادات:":"Impossible d’enregistrer les paramètres :","تم حفظ إعداداتك الخاصة بنجاح. ستُطبق التفضيلات على صفحات سوقي.":"Vos paramètres ont été enregistrés. Ils seront appliqués aux pages SOUKI.",
  "← حسابي":"← Mon compte","سوقي · SOUKI":"SOUKI · Marketplace","حفظ":"Enregistrer"
 }:{
  "⚙️ الإعدادات":"⚙️ Settings","خصص تجربة SOUKI بالطريقة التي تناسبك. هذه الاختيارات محفوظة في حسابك وحدك ولا تغيّر إعدادات المستخدمين الآخرين.":"Customize your SOUKI experience. These preferences are saved only to your account and do not affect other users.",
  "جارٍ تحميل إعدادات حسابك...":"Loading your account settings…","يرجى تسجيل الدخول أولاً لفتح إعدادات حسابك.":"Please sign in to access your account settings.","تعذر تحميل الإعدادات:":"Could not load settings:",
  "🌐 تفضيلات العرض":"🌐 Display preferences","اللغة":"Language","لغة واجهة الموقع التي تفضلها":"Preferred interface language","العملة المفضلة":"Preferred currency","اختيار العملة التي تفضلها":"Choose your preferred currency","مظهر الموقع":"Site appearance","اختيار المظهر الفاتح أو الداكن":"Choose light or dark mode","فاتح":"Light","داكن":"Dark",
  "📍 موقعك":"📍 Your location","البلد":"Country","بلد إقامتك أو المكان الذي تستخدم منه سوقي":"Your country of residence or where you use SOUKI","المغرب":"Morocco","الجزائر":"Algeria","تونس":"Tunisia","مصر":"Egypt","السعودية":"Saudi Arabia","الإمارات":"United Arab Emirates","فرنسا":"France","بلد آخر":"Other country","المدينة":"City","اكتب مدينتك":"Enter your city",
  "🔔 الإشعارات":"🔔 Notifications","تفضيل الإشعارات":"Notification preferences","احفظ اختيارك لتلقي إشعارات سوقي عندما تتوفر هذه الخدمة":"Save your choice to receive SOUKI notifications when available","🔔 تفعيل إشعارات الرسائل على الهاتف":"🔔 Enable message notifications on your phone","يمكنك تفعيل إشعارات الرسائل حتى عندما لا يكون سوقي مفتوحاً.":"You can receive message notifications even when SOUKI is closed.","حفظ إعداداتي":"Save my settings",
  "🔒 خصوصيتك مهمة: كل مستخدم يستطيع قراءة وتعديل إعداداته الخاصة فقط، ولا يستطيع المستخدمون الآخرون الاطلاع عليها.":"🔒 Your privacy matters: each user can only view and edit their own settings.",
  "جارٍ تفعيل الإشعارات...":"Enabling notifications…","🔔 إعادة محاولة التفعيل":"🔔 Try enabling again","هذا المتصفح لا يدعم إشعارات الويب.":"This browser does not support web notifications.","لم يتم تفعيل إشعارات الرسائل على هذا الجهاز بعد.":"Message notifications are not enabled on this device yet.","الإشعارات محظورة من إعدادات المتصفح.":"Notifications are blocked in browser settings.","تعذر تجهيز الإشعارات:":"Could not prepare notifications:","لم تسمح بإرسال الإشعارات. غيّر إذن الإشعارات من إعدادات المتصفح.":"You did not allow notifications. Change notification permission in browser settings.","تعذر التفعيل:":"Could not enable notifications:","تم تفعيل إشعارات الرسائل على هذا الجهاز.":"Message notifications are enabled on this device.","تعذر حفظ الإعدادات:":"Could not save settings:","تم حفظ إعداداتك الخاصة بنجاح. ستُطبق التفضيلات على صفحات سوقي.":"Your settings were saved and will apply across SOUKI pages.",
  "← حسابي":"← My account","سوقي · SOUKI":"SOUKI · Marketplace","حفظ":"Save"
 };
 const replaceText=node=>{
  if(!node||!node.nodeValue)return;
  let s=node.nodeValue;
  for(const [a,b] of Object.entries(d))if(s.includes(a))s=s.split(a).join(b);
  if(s!==node.nodeValue)node.nodeValue=s;
 };
 const scan=root=>{
  if(root.nodeType===Node.TEXT_NODE){replaceText(root);return}
  if(root.nodeType!==Node.ELEMENT_NODE&&root!==document)return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))replaceText(n);
  if(root.querySelectorAll)root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el=>{
   for(const a of ["placeholder","aria-label","title"]){const v=el.getAttribute(a);if(v&&d[v])el.setAttribute(a,d[v]);}
  });
 };
 scan(document.body);
 new MutationObserver(records=>records.forEach(r=>{
  if(r.type==="characterData")replaceText(r.target);else r.addedNodes.forEach(scan);
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
 const save=document.getElementById("save");
 if(save)save.textContent=lang==="fr"?"Enregistrer mes paramètres":"Save my settings";
 const push=document.getElementById("enablePush");
 if(push)push.textContent=lang==="fr"?"🔔 Activer les notifications de messages sur le téléphone":"🔔 Enable message notifications on your phone";
 const status=document.getElementById("loading");
 if(status&&status.textContent.includes("جارٍ تحميل"))status.textContent=lang==="fr"?"Chargement des paramètres de votre compte…":"Loading your account settings…";
 const availability=document.getElementById("availabilityToggle");
 if(availability){
  const raw=availability.textContent||"";
  const availableAgain=raw.includes("إعادة إتاحة")||raw.includes("Rendre le produit disponible");
  availability.textContent=availableAgain?(lang==="fr"?"✅ Rendre le produit disponible":"✅ Make product available"):(lang==="fr"?"⛔ Marquer comme indisponible":"⛔ Mark as unavailable");
 }
})();

/* Re-apply the availability label whenever listing content is rendered asynchronously */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const fix=()=>{
  const el=document.getElementById("availabilityToggle");
  if(!el)return;
  const raw=el.textContent||"";
  const again=raw.includes("إعادة إتاحة")||raw.includes("Rendre le produit disponible")||raw.includes("Make product available");
  const label=again?(lang==="fr"?"✅ Rendre le produit disponible":"✅ Make product available"):(lang==="fr"?"⛔ Marquer comme indisponible":"⛔ Mark as unavailable");
  if(el.textContent!==label)el.textContent=label;
 };
 fix();
 new MutationObserver(records=>{
  if(records.some(r=>r.target.id==="availabilityToggle"||r.target.closest?.("#availabilityToggle")||[...r.addedNodes].some(n=>n.nodeType===Node.ELEMENT_NODE&&(n.id==="availabilityToggle"||n.querySelector?.("#availabilityToggle")))))fix();
 }).observe(document.body,{subtree:true,childList:true,characterData:true});
})();

/* Settings labels: match the Arabic label independently of emoji and surrounding whitespace */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const d=lang==="fr"?{
  "الإعدادات":"Paramètres","تفضيلات العرض":"Préférences d’affichage","موقعك":"Votre emplacement","الإشعارات":"Notifications",
  "العملة المفضلة":"Devise préférée","مظهر الموقع":"Apparence du site","البلد":"Pays","المدينة":"Ville",
  "حفظ إعداداتي":"Enregistrer mes paramètres","اللغة":"Langue","فاتح":"Clair","داكن":"Sombre",
  "خصوصيتك مهمة":"Votre confidentialité est importante","تفعيل إشعارات الرسائل على الهاتف":"Activer les notifications de messages sur le téléphone",
  "اكتب مدينتك":"Saisissez votre ville"
 }:{
  "الإعدادات":"Settings","تفضيلات العرض":"Display preferences","موقعك":"Your location","الإشعارات":"Notifications",
  "العملة المفضلة":"Preferred currency","مظهر الموقع":"Site appearance","البلد":"Country","المدينة":"City",
  "حفظ إعداداتي":"Save my settings","اللغة":"Language","فاتح":"Light","داكن":"Dark",
  "خصوصيتك مهمة":"Your privacy matters","تفعيل إشعارات الرسائل على الهاتف":"Enable message notifications on this phone",
  "اكتب مدينتك":"Enter your city"
 };
 const apply=root=>{
  if(root.nodeType===Node.TEXT_NODE){
   let s=root.nodeValue;for(const [a,b] of Object.entries(d))if(s.includes(a))s=s.split(a).join(b);
   if(s!==root.nodeValue)root.nodeValue=s;return;
  }
  if(root.nodeType!==Node.ELEMENT_NODE&&root!==document)return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))apply(n);
 };
 apply(document.body);
 new MutationObserver(records=>records.forEach(r=>{
  if(r.type==="characterData")apply(r.target);else r.addedNodes.forEach(apply);
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
 const language=document.getElementById("language");
 if(language)language.addEventListener("change",()=>{try{localStorage.setItem("souki-language",language.value)}catch(e){}location.reload()});
})();

/* Final translations for followed-sellers page and remaining notification status text */
(()=>{
 const lang=(()=>{try{return localStorage.getItem("souki-language")||"ar"}catch(e){return"ar"}})();
 if(lang==="ar")return;
 const d=lang==="fr"?{
  "البائعون الذين أتابعهم":"Vendeurs suivis",
  "تابع إعلانات البائعين الجدد من خلال زيارة ملفاتهم الشخصية.":"Suivez les nouvelles annonces des vendeurs en consultant leurs profils.",
  "عرض الملف ←":"← Voir le profil",
  "عرض الملف":"Voir le profil",
  "جارٍ تحميل القائمة...":"Chargement de la liste…",
  "يرجى تسجيل الدخول لرؤية البائعين الذين تتابعهم.":"Veuillez vous connecter pour voir les vendeurs que vous suivez.",
  "لم تتابع أي بائع بعد. افتح إعلاناً واضغط على متابعة بجانب اسم البائع.":"Vous ne suivez encore aucun vendeur. Ouvrez une annonce et appuyez sur Suivre à côté du nom du vendeur.",
  "تعذر تحميل قائمة المتابعة. حاول تحديث الصفحة.":"Impossible de charger la liste des abonnements. Actualisez la page.",
  "عضو في سوقي":"Membre de SOUKI",
  "إشعارات الرسائل مفعلة على هذا الجهاز.":"Les notifications de messages sont activées sur cet appareil.",
  "إشعارات الرسائل مفعّلة على هذا الجهاز.":"Les notifications de messages sont activées sur cet appareil.",
  "لم يتم تفعيل إشعارات الرسائل على هذا الجهاز بعد.":"Les notifications de messages ne sont pas encore activées sur cet appareil.",
  "إشعارات الرسائل غير مفعلة على هذا الجهاز.":"Les notifications de messages ne sont pas activées sur cet appareil.",
  "تعذر تحميل إعدادات حسابك.":"Impossible de charger les paramètres de votre compte.",
  "حفظ إعداداتي":"Enregistrer mes paramètres",
  "جارٍ الحفظ...":"Enregistrement…",
  "تم حفظ إعداداتك الخاصة بنجاح. ستُطبق التفضيلات على صفحات سوقي.":"Vos paramètres ont été enregistrés et seront appliqués sur SOUKI."
 }:{
  "البائعون الذين أتابعهم":"Sellers I Follow",
  "تابع إعلانات البائعين الجدد من خلال زيارة ملفاتهم الشخصية.":"Follow new seller listings by visiting their profiles.",
  "عرض الملف ←":"← View profile",
  "عرض الملف":"View profile",
  "جارٍ تحميل القائمة...":"Loading list…",
  "يرجى تسجيل الدخول لرؤية البائعين الذين تتابعهم.":"Please sign in to see the sellers you follow.",
  "لم تتابع أي بائع بعد. افتح إعلاناً واضغط على متابعة بجانب اسم البائع.":"You are not following any sellers yet. Open a listing and tap Follow next to the seller’s name.",
  "تعذر تحميل قائمة المتابعة. حاول تحديث الصفحة.":"Could not load your following list. Please refresh.",
  "عضو في سوقي":"SOUKI member",
  "إشعارات الرسائل مفعلة على هذا الجهاز.":"Message notifications are enabled on this device.",
  "إشعارات الرسائل مفعّلة على هذا الجهاز.":"Message notifications are enabled on this device.",
  "لم يتم تفعيل إشعارات الرسائل على هذا الجهاز بعد.":"Message notifications are not enabled on this device yet.",
  "إشعارات الرسائل غير مفعلة على هذا الجهاز.":"Message notifications are not enabled on this device.",
  "تعذر تحميل إعدادات حسابك.":"Could not load your account settings.",
  "حفظ إعداداتي":"Save my settings",
  "جارٍ الحفظ...":"Saving…",
  "تم حفظ إعداداتك الخاصة بنجاح. ستُطبق التفضيلات على صفحات سوقي.":"Your settings were saved and will be applied across SOUKI."
 };
 const replace=node=>{
  if(!node||!node.nodeValue)return;
  let s=node.nodeValue;
  for(const [a,b] of Object.entries(d))if(s.includes(a))s=s.split(a).join(b);
  if(s!==node.nodeValue)node.nodeValue=s;
 };
 const scan=root=>{
  if(root.nodeType===Node.TEXT_NODE){replace(root);return}
  if(root.nodeType!==Node.ELEMENT_NODE&&root!==document)return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))replace(n);
 };
 scan(document.body);
 new MutationObserver(records=>records.forEach(r=>{
  if(r.type==="characterData")replace(r.target);else r.addedNodes.forEach(scan);
 })).observe(document.body,{subtree:true,childList:true,characterData:true});
})();