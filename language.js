// ============================================================
// AgriSense AI — Language Module
// Supports: en, hi, gu, pa, mr, ta, te, kn
// ============================================================

const TRANSLATIONS = {
  en: {
    nav: { home:"Home", advisor:"AI Advisor", scan:"Crop Scan", weather:"Weather", market:"Market", dashboard:"Dashboard", about:"About" },
    hero: { tag:"Powered by IBM Granite · Langflow · Orchestrate", h1a:"Grow Smarter.", h1b:"Harvest Better.", h1c:"Powered by AI.", sub:"AgriSense AI combines weather intelligence, crop expertise, pest detection, and market insights to help farmers make better decisions every day.", cta1:"Start AI Advisor", cta2:"Scan Crop Disease", cta3:"Open Dashboard" },
    chat: { placeholder:"Ask anything about your farm…", send:"Send", typing:"AgriSense AI is thinking…" },
    scan: { title:"Crop Disease Scanner", upload:"Upload Crop Image", drag:"Drag & Drop your crop photo here", or:"— or —", choose:"Choose Image", scanning:"AI Scanning…", disease:"Disease", confidence:"Confidence", severity:"Severity", treatment:"Recommended Treatment", nextCheck:"Next Inspection" },
    weather: { title:"Weather Dashboard", temp:"Temperature", rain:"Rain Probability", humidity:"Humidity", wind:"Wind Speed", uv:"UV Index", feels:"Feels Like", forecast:"7-Day Forecast" },
    soil: { title:"Soil Health Analysis", nitrogen:"Nitrogen", phosphorus:"Phosphorus", potassium:"Potassium", organic:"Organic Carbon", ph:"Soil pH", moisture:"Moisture", reco:"AI Recommendations" },
    advisor: { title:"Personalized Farming Advisor", location:"Location", size:"Farm Size", crop:"Primary Crop", season:"Season", water:"Water Source", soil:"Soil Type", generate:"Generate AI Farm Plan", seed:"Recommended Seed", yield:"Expected Yield", harvest:"Harvest Time", profit:"Profit Estimate", risk:"Risk Level" },
    pest: { title:"Pest Risk Monitor", updated:"Updated", nearby:"Nearby Pest Alerts", preventive:"Preventive Actions" },
    market: { title:"Crop Price Intelligence", rising:"Rising", falling:"Falling", stable:"Stable", hold:"Hold", sell:"Sell", buy:"Buy", reco:"AI Recommendation" },
    govt: { title:"Government Advisory", placeholder:"Search schemes, subsidies, guidelines…", search:"Search" },
    agents: { title:"Multi-Agent AI Panel", decision:"Today's AI Decision Summary", profit:"Season Profit Estimate" },
    dashboard: { title:"Farmer Dashboard", health:"Crop Health Overview", expenses:"Farm Expenses", income:"Expected Income", confidence:"AI Confidence" },
    ibm: { title:"Powered by IBM AI" },
    common: { aiReco:"AI Recommendations", lowRisk:"Low Risk", medRisk:"Medium Risk", highRisk:"High Risk", active:"Active", days:"Days", acres:"Acres", optimal:"Optimal" }
  },
  hi: {
    nav: { home:"होम", advisor:"AI सलाहकार", scan:"फसल स्कैन", weather:"मौसम", market:"बाज़ार", dashboard:"डैशबोर्ड", about:"जानकारी" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate द्वारा संचालित", h1a:"स्मार्ट खेती करें।", h1b:"बेहतर फसल काटें।", h1c:"AI की शक्ति से।", sub:"AgriSense AI मौसम, फसल विशेषज्ञता, कीट पहचान और बाजार जानकारी को जोड़कर किसानों को हर दिन बेहतर निर्णय लेने में मदद करता है।", cta1:"AI सलाहकार शुरू करें", cta2:"फसल रोग स्कैन करें", cta3:"डैशबोर्ड खोलें" },
    chat: { placeholder:"अपनी खेती के बारे में कुछ भी पूछें…", send:"भेजें", typing:"AgriSense AI सोच रहा है…" },
    scan: { title:"फसल रोग स्कैनर", upload:"फसल की तस्वीर अपलोड करें", drag:"यहाँ फोटो खींचें और छोड़ें", or:"— या —", choose:"तस्वीर चुनें", scanning:"AI स्कैन कर रहा है…", disease:"रोग", confidence:"विश्वसनीयता", severity:"गंभीरता", treatment:"सुझाया गया उपचार", nextCheck:"अगला निरीक्षण" },
    weather: { title:"मौसम डैशबोर्ड", temp:"तापमान", rain:"बारिश की संभावना", humidity:"आर्द्रता", wind:"हवा की गति", uv:"UV सूचकांक", feels:"महसूस होता है", forecast:"7 दिन का पूर्वानुमान" },
    soil: { title:"मिट्टी स्वास्थ्य विश्लेषण", nitrogen:"नाइट्रोजन", phosphorus:"फास्फोरस", potassium:"पोटेशियम", organic:"कार्बनिक कार्बन", ph:"मिट्टी pH", moisture:"नमी", reco:"AI सिफारिशें" },
    advisor: { title:"व्यक्तिगत कृषि सलाहकार", location:"स्थान", size:"खेत का आकार", crop:"मुख्य फसल", season:"सीजन", water:"पानी का स्रोत", soil:"मिट्टी का प्रकार", generate:"AI खेती योजना बनाएं", seed:"सुझाया गया बीज", yield:"अपेक्षित उपज", harvest:"कटाई का समय", profit:"लाभ अनुमान", risk:"जोखिम स्तर" },
    pest: { title:"कीट जोखिम मॉनिटर", updated:"अपडेट किया", nearby:"आसपास के कीट अलर्ट", preventive:"निवारक उपाय" },
    market: { title:"फसल मूल्य जानकारी", rising:"बढ़ रहा", falling:"गिर रहा", stable:"स्थिर", hold:"रोकें", sell:"बेचें", buy:"खरीदें", reco:"AI सिफारिश" },
    govt: { title:"सरकारी सलाह", placeholder:"योजनाएं, सब्सिडी खोजें…", search:"खोजें" },
    agents: { title:"मल्टी-एजेंट AI पैनल", decision:"आज की AI निर्णय सारांश", profit:"सीजन लाभ अनुमान" },
    dashboard: { title:"किसान डैशबोर्ड", health:"फसल स्वास्थ्य अवलोकन", expenses:"खेत के खर्च", income:"अपेक्षित आय", confidence:"AI विश्वास" },
    ibm: { title:"IBM AI द्वारा संचालित" },
    common: { aiReco:"AI सिफारिशें", lowRisk:"कम जोखिम", medRisk:"मध्यम जोखिम", highRisk:"उच्च जोखिम", active:"सक्रिय", days:"दिन", acres:"एकड़", optimal:"उत्तम" }
  },
  gu: {
    nav: { home:"હોમ", advisor:"AI સલાહકાર", scan:"પાક સ્કેન", weather:"હવામાન", market:"બજાર", dashboard:"ડૅશબોર્ડ", about:"માહિતી" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate દ્વારા સંચાલિત", h1a:"સ્માર્ટ ખેતી કરો.", h1b:"સારી ફસલ કાપો.", h1c:"AI ની શક્તિ સાથે.", sub:"AgriSense AI હવામાન, પાક નિષ્ણાત, જીવાત શોધ અને બજારની માહિતી ભેળવીને ખેડૂતોને રોજ વધુ સારા નિર્ણય લેવામાં મદદ કરે છે.", cta1:"AI સલાહકાર શરૂ કરો", cta2:"પાક રોગ સ્કેન", cta3:"ડૅશબોર્ડ ખોલો" },
    chat: { placeholder:"તમારી ખેતી વિશે કંઈ પણ પૂછો…", send:"મોકલો", typing:"AgriSense AI વિચારી રહ્યું છે…" },
    scan: { title:"પાક રોગ સ્કેનર", upload:"પાકની છબી અપલોડ કરો", drag:"અહીં ફોટો ખેંચો અને છોડો", or:"— અથવા —", choose:"છબી પસંદ કરો", scanning:"AI સ્કેન કરી રહ્યું છે…", disease:"રોગ", confidence:"વિશ્વાસ", severity:"ગંભીરતા", treatment:"ભલામણ કરેલ ઉપચાર", nextCheck:"આગળ તપાસ" },
    weather: { title:"હવામાન ડૅશબોર્ડ", temp:"તાપમાન", rain:"વરસાદ સંભાવના", humidity:"ભેજ", wind:"પવન ઝડપ", uv:"UV સૂચકાંક", feels:"અનુભવ", forecast:"7 દિવસ આગાહી" },
    soil: { title:"જમીન આરોગ્ય વિશ્લેષણ", nitrogen:"નાઇટ્રોજન", phosphorus:"ફોસ્ફરસ", potassium:"પોટેશિયમ", organic:"ઓર્ગેનિક કાર્બન", ph:"જમીન pH", moisture:"ભેજ", reco:"AI ભલામણો" },
    advisor: { title:"વ્યક્તિગત ખેતી સલાહ", location:"સ્થાન", size:"ખેતરનું કદ", crop:"મુખ્ય પાક", season:"સિઝન", water:"પાણીનો સ્ત્રોત", soil:"જમીનનો પ્રકાર", generate:"AI ખેત યોજના બનાવો", seed:"ભલામણ કરેલ બીજ", yield:"અપેક્ષિત ઉત્પાદન", harvest:"લણણી સમય", profit:"નફો અંદાજ", risk:"જોખમ સ્તર" },
    pest: { title:"જીવાત જોખમ મૉનિટર", updated:"અપડેટ", nearby:"નજીકના જીવાત એલર્ટ", preventive:"નિવારક ઉપાય" },
    market: { title:"પાક ભાવ માહિતી", rising:"વધી રહ્યો", falling:"ઘટી રહ્યો", stable:"સ્થિર", hold:"રોકો", sell:"વેચો", buy:"ખરીદો", reco:"AI ભલામણ" },
    govt: { title:"સરકારી સલાહ", placeholder:"યોજના, સબ્સિડી શોધો…", search:"શોધ" },
    agents: { title:"મલ્ટી-એજન્ટ AI પૅનલ", decision:"આજની AI નિર્ણય સારાંશ", profit:"સિઝન નફો અંદાજ" },
    dashboard: { title:"ખેડૂત ડૅશબોર્ડ", health:"પાક આરોગ્ય", expenses:"ખેત ખર્ચ", income:"અપેક્ષિત આવક", confidence:"AI વિશ્વાસ" },
    ibm: { title:"IBM AI દ્વારા સંચાલિત" },
    common: { aiReco:"AI ભલામણો", lowRisk:"ઓછું જોખમ", medRisk:"મધ્યમ જોખમ", highRisk:"ઉચ્ચ જોખમ", active:"સક્રિય", days:"દિવસ", acres:"એકર", optimal:"ઉત્તમ" }
  },
  pa: {
    nav: { home:"ਘਰ", advisor:"AI ਸਲਾਹਕਾਰ", scan:"ਫਸਲ ਸਕੈਨ", weather:"ਮੌਸਮ", market:"ਬਾਜ਼ਾਰ", dashboard:"ਡੈਸ਼ਬੋਰਡ", about:"ਜਾਣਕਾਰੀ" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate ਦੁਆਰਾ ਸੰਚਾਲਿਤ", h1a:"ਸਮਾਰਟ ਖੇਤੀ ਕਰੋ।", h1b:"ਵਧੀਆ ਫਸਲ ਕੱਟੋ।", h1c:"AI ਦੀ ਸ਼ਕਤੀ ਨਾਲ।", sub:"AgriSense AI ਮੌਸਮ, ਫਸਲ ਮਾਹਰਤਾ, ਕੀਟ ਪਤਾ ਲਗਾਉਣਾ ਅਤੇ ਬਾਜ਼ਾਰ ਜਾਣਕਾਰੀ ਨੂੰ ਜੋੜ ਕੇ ਕਿਸਾਨਾਂ ਦੀ ਮਦਦ ਕਰਦਾ ਹੈ।", cta1:"AI ਸਲਾਹਕਾਰ ਸ਼ੁਰੂ ਕਰੋ", cta2:"ਫਸਲ ਰੋਗ ਸਕੈਨ", cta3:"ਡੈਸ਼ਬੋਰਡ ਖੋਲੋ" },
    chat: { placeholder:"ਆਪਣੀ ਖੇਤੀ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ…", send:"ਭੇਜੋ", typing:"AgriSense AI ਸੋਚ ਰਿਹਾ ਹੈ…" },
    scan: { title:"ਫਸਲ ਰੋਗ ਸਕੈਨਰ", upload:"ਫਸਲ ਦੀ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ", drag:"ਇੱਥੇ ਫੋਟੋ ਖਿੱਚੋ", or:"— ਜਾਂ —", choose:"ਤਸਵੀਰ ਚੁਣੋ", scanning:"AI ਸਕੈਨ ਕਰ ਰਿਹਾ ਹੈ…", disease:"ਰੋਗ", confidence:"ਭਰੋਸੇਯੋਗਤਾ", severity:"ਗੰਭੀਰਤਾ", treatment:"ਸਿਫਾਰਸ਼ੀ ਇਲਾਜ", nextCheck:"ਅਗਲਾ ਮੁਆਇਨਾ" },
    weather: { title:"ਮੌਸਮ ਡੈਸ਼ਬੋਰਡ", temp:"ਤਾਪਮਾਨ", rain:"ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ", humidity:"ਨਮੀ", wind:"ਹਵਾ ਦੀ ਗਤੀ", uv:"UV ਸੂਚਕਾਂਕ", feels:"ਮਹਿਸੂਸ", forecast:"7 ਦਿਨ ਭਵਿੱਖਬਾਣੀ" },
    soil: { title:"ਮਿੱਟੀ ਸਿਹਤ ਵਿਸ਼ਲੇਸ਼ਣ", nitrogen:"ਨਾਈਟ੍ਰੋਜਨ", phosphorus:"ਫਾਸਫੋਰਸ", potassium:"ਪੋਟਾਸ਼ੀਅਮ", organic:"ਜੈਵਿਕ ਕਾਰਬਨ", ph:"ਮਿੱਟੀ pH", moisture:"ਨਮੀ", reco:"AI ਸਿਫਾਰਸ਼ਾਂ" },
    advisor: { title:"ਨਿੱਜੀ ਖੇਤੀ ਸਲਾਹਕਾਰ", location:"ਸਥਾਨ", size:"ਖੇਤ ਦਾ ਆਕਾਰ", crop:"ਮੁੱਖ ਫਸਲ", season:"ਸੀਜ਼ਨ", water:"ਪਾਣੀ ਦਾ ਸ੍ਰੋਤ", soil:"ਮਿੱਟੀ ਦੀ ਕਿਸਮ", generate:"AI ਖੇਤੀ ਯੋਜਨਾ ਬਣਾਓ", seed:"ਸਿਫਾਰਸ਼ੀ ਬੀਜ", yield:"ਅਨੁਮਾਨਿਤ ਝਾੜ", harvest:"ਕਟਾਈ ਸਮਾਂ", profit:"ਮੁਨਾਫ਼ਾ ਅਨੁਮਾਨ", risk:"ਜੋਖਮ ਪੱਧਰ" },
    pest: { title:"ਕੀਟ ਜੋਖਮ ਮਾਨੀਟਰ", updated:"ਅਪਡੇਟ", nearby:"ਨੇੜੇ ਕੀਟ ਅਲਰਟ", preventive:"ਰੋਕਥਾਮ ਉਪਾਅ" },
    market: { title:"ਫਸਲ ਭਾਅ ਜਾਣਕਾਰੀ", rising:"ਵਧ ਰਿਹਾ", falling:"ਘਟ ਰਿਹਾ", stable:"ਸਥਿਰ", hold:"ਰੋਕੋ", sell:"ਵੇਚੋ", buy:"ਖਰੀਦੋ", reco:"AI ਸਿਫਾਰਸ਼" },
    govt: { title:"ਸਰਕਾਰੀ ਸਲਾਹ", placeholder:"ਯੋਜਨਾਵਾਂ, ਸਬਸਿਡੀ ਖੋਜੋ…", search:"ਖੋਜੋ" },
    agents: { title:"ਮਲਟੀ-ਏਜੈਂਟ AI ਪੈਨਲ", decision:"ਅੱਜ ਦੀ AI ਫੈਸਲੇ ਦਾ ਸਾਰ", profit:"ਸੀਜ਼ਨ ਮੁਨਾਫ਼ਾ ਅਨੁਮਾਨ" },
    dashboard: { title:"ਕਿਸਾਨ ਡੈਸ਼ਬੋਰਡ", health:"ਫਸਲ ਸਿਹਤ", expenses:"ਖੇਤ ਖਰਚੇ", income:"ਅਨੁਮਾਨਿਤ ਆਮਦਨ", confidence:"AI ਭਰੋਸਾ" },
    ibm: { title:"IBM AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ" },
    common: { aiReco:"AI ਸਿਫਾਰਸ਼ਾਂ", lowRisk:"ਘੱਟ ਜੋਖਮ", medRisk:"ਮੱਧਮ ਜੋਖਮ", highRisk:"ਉੱਚ ਜੋਖਮ", active:"ਸਕਿਰਿਆ", days:"ਦਿਨ", acres:"ਏਕੜ", optimal:"ਸ਼੍ਰੇਸ਼ਠ" }
  },
  mr: {
    nav: { home:"मुखपृष्ठ", advisor:"AI सल्लागार", scan:"पीक स्कॅन", weather:"हवामान", market:"बाजार", dashboard:"डॅशबोर्ड", about:"माहिती" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate द्वारे चालवले", h1a:"स्मार्ट शेती करा.", h1b:"चांगले पीक काढा.", h1c:"AI च्या शक्तीने.", sub:"AgriSense AI हवामान, पीक तज्ञता, कीड शोधणे आणि बाजाराची माहिती एकत्र करून शेतकऱ्यांना रोज चांगले निर्णय घेण्यास मदत करते.", cta1:"AI सल्लागार सुरू करा", cta2:"पीक रोग स्कॅन करा", cta3:"डॅशबोर्ड उघडा" },
    chat: { placeholder:"तुमच्या शेतीबद्दल काहीही विचारा…", send:"पाठवा", typing:"AgriSense AI विचार करत आहे…" },
    scan: { title:"पीक रोग स्कॅनर", upload:"पिकाची छायाचित्र अपलोड करा", drag:"येथे फोटो ओढा व सोडा", or:"— किंवा —", choose:"छायाचित्र निवडा", scanning:"AI स्कॅन करत आहे…", disease:"रोग", confidence:"आत्मविश्वास", severity:"तीव्रता", treatment:"शिफारस केलेले उपचार", nextCheck:"पुढील तपासणी" },
    weather: { title:"हवामान डॅशबोर्ड", temp:"तापमान", rain:"पावसाची शक्यता", humidity:"आर्द्रता", wind:"वाऱ्याचा वेग", uv:"UV निर्देशांक", feels:"वाटते", forecast:"७ दिवस अंदाज" },
    soil: { title:"माती आरोग्य विश्लेषण", nitrogen:"नायट्रोजन", phosphorus:"फॉस्फरस", potassium:"पोटॅशियम", organic:"सेंद्रिय कार्बन", ph:"माती pH", moisture:"ओलावा", reco:"AI शिफारसी" },
    advisor: { title:"वैयक्तिक शेती सल्लागार", location:"स्थान", size:"शेताचा आकार", crop:"मुख्य पीक", season:"हंगाम", water:"पाण्याचे स्त्रोत", soil:"मातीचा प्रकार", generate:"AI शेती योजना तयार करा", seed:"शिफारस केलेले बियाणे", yield:"अपेक्षित उत्पादन", harvest:"कापणीचा वेळ", profit:"नफ्याचा अंदाज", risk:"जोखीम पातळी" },
    pest: { title:"कीड जोखीम मॉनिटर", updated:"अद्यतनित", nearby:"जवळपासचे कीड अलर्ट", preventive:"प्रतिबंधक उपाय" },
    market: { title:"पीक किंमत माहिती", rising:"वाढत आहे", falling:"घसरत आहे", stable:"स्थिर", hold:"थांबा", sell:"विका", buy:"खरेदी करा", reco:"AI शिफारस" },
    govt: { title:"सरकारी सल्ला", placeholder:"योजना, अनुदान शोधा…", search:"शोधा" },
    agents: { title:"मल्टी-एजंट AI पॅनेल", decision:"आजचा AI निर्णय सारांश", profit:"हंगाम नफ्याचा अंदाज" },
    dashboard: { title:"शेतकरी डॅशबोर्ड", health:"पीक आरोग्य आढावा", expenses:"शेत खर्च", income:"अपेक्षित उत्पन्न", confidence:"AI विश्वास" },
    ibm: { title:"IBM AI द्वारे चालवले" },
    common: { aiReco:"AI शिफारसी", lowRisk:"कमी जोखीम", medRisk:"मध्यम जोखीम", highRisk:"उच्च जोखीम", active:"सक्रिय", days:"दिवस", acres:"एकर", optimal:"उत्तम" }
  },
  ta: {
    nav: { home:"முகப்பு", advisor:"AI ஆலோசகர்", scan:"பயிர் ஸ்கேன்", weather:"வானிலை", market:"சந்தை", dashboard:"டாஷ்போர்ட்", about:"தகவல்" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate மூலம் இயக்கப்படுகிறது", h1a:"சிறந்த விவசாயம் செய்யுங்கள்.", h1b:"சிறந்த அறுவடை செய்யுங்கள்.", h1c:"AI சக்தியால்.", sub:"AgriSense AI வானிலை, பயிர் நிபுணத்துவம், பூச்சி கண்டறிதல் மற்றும் சந்தை நுண்ணறிவை ஒன்றிணைத்து விவசாயிகளுக்கு தினமும் சிறந்த முடிவுகளை எடுக்க உதவுகிறது.", cta1:"AI ஆலோசகரை தொடங்குங்கள்", cta2:"பயிர் நோய் ஸ்கேன்", cta3:"டாஷ்போர்டை திறக்கவும்" },
    chat: { placeholder:"உங்கள் விவசாயம் பற்றி எதையும் கேளுங்கள்…", send:"அனுப்பு", typing:"AgriSense AI யோசிக்கிறது…" },
    scan: { title:"பயிர் நோய் ஸ்கேனர்", upload:"பயிர் படம் பதிவேற்றவும்", drag:"இங்கே படத்தை இழுக்கவும்", or:"— அல்லது —", choose:"படம் தேர்வு செய்யவும்", scanning:"AI ஸ்கேன் செய்கிறது…", disease:"நோய்", confidence:"நம்பகத்தன்மை", severity:"தீவிரம்", treatment:"பரிந்துரைக்கப்பட்ட சிகிச்சை", nextCheck:"அடுத்த ஆய்வு" },
    weather: { title:"வானிலை டாஷ்போர்ட்", temp:"வெப்பநிலை", rain:"மழை வாய்ப்பு", humidity:"ஈரப்பதம்", wind:"காற்று வேகம்", uv:"UV குறியீடு", feels:"உணர்கிறது", forecast:"7 நாள் முன்னறிவிப்பு" },
    soil: { title:"மண் ஆரோக்கிய பகுப்பாய்வு", nitrogen:"நைட்ரஜன்", phosphorus:"பாஸ்பரஸ்", potassium:"பொட்டாசியம்", organic:"கரிம கார்பன்", ph:"மண் pH", moisture:"ஈரப்பதம்", reco:"AI பரிந்துரைகள்" },
    advisor: { title:"தனிப்பயன் விவசாய ஆலோசகர்", location:"இடம்", size:"பண்ணை அளவு", crop:"முக்கிய பயிர்", season:"பருவம்", water:"நீர் ஆதாரம்", soil:"மண் வகை", generate:"AI பண்ணை திட்டம் உருவாக்கவும்", seed:"பரிந்துரைக்கப்பட்ட விதை", yield:"எதிர்பார்க்கப்படும் மகசூல்", harvest:"அறுவடை நேரம்", profit:"லாப மதிப்பீடு", risk:"ஆபத்து நிலை" },
    pest: { title:"பூச்சி ஆபத்து கண்காணிப்பு", updated:"புதுப்பிக்கப்பட்டது", nearby:"அருகில் பூச்சி எச்சரிக்கைகள்", preventive:"தடுப்பு நடவடிக்கைகள்" },
    market: { title:"பயிர் விலை நுண்ணறிவு", rising:"உயர்கிறது", falling:"குறைகிறது", stable:"நிலையானது", hold:"காத்திருங்கள்", sell:"விற்கவும்", buy:"வாங்கவும்", reco:"AI பரிந்துரை" },
    govt: { title:"அரசு ஆலோசனை", placeholder:"திட்டங்கள், மானியங்கள் தேடுங்கள்…", search:"தேடு" },
    agents: { title:"பல-முகவர் AI பலகை", decision:"இன்றைய AI முடிவு சுருக்கம்", profit:"பருவ லாப மதிப்பீடு" },
    dashboard: { title:"விவசாயி டாஷ்போர்ட்", health:"பயிர் ஆரோக்கிய கண்ணோட்டம்", expenses:"பண்ணை செலவுகள்", income:"எதிர்பார்க்கப்படும் வருமானம்", confidence:"AI நம்பிக்கை" },
    ibm: { title:"IBM AI மூலம் இயக்கப்படுகிறது" },
    common: { aiReco:"AI பரிந்துரைகள்", lowRisk:"குறைந்த ஆபத்து", medRisk:"நடுத்தர ஆபத்து", highRisk:"அதிக ஆபத்து", active:"செயலில்", days:"நாட்கள்", acres:"ஏக்கர்", optimal:"உகந்தது" }
  },
  te: {
    nav: { home:"హోమ్", advisor:"AI సలహాదారు", scan:"పంట స్కాన్", weather:"వాతావరణం", market:"మార్కెట్", dashboard:"డాష్‌బోర్డ్", about:"సమాచారం" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate ద్వారా నడపబడింది", h1a:"స్మార్ట్ వ్యవసాయం చేయండి.", h1b:"మెరుగైన పంట కోయండి.", h1c:"AI శక్తితో.", sub:"AgriSense AI వాతావరణ మేధస్సు, పంట నిపుణత, తెగులు గుర్తింపు మరియు మార్కెట్ అంతర్దృష్టులను కలిపి రైతులకు ప్రతిరోజూ మెరుగైన నిర్ణయాలు తీసుకునేందుకు సహాయపడుతుంది.", cta1:"AI సలహాదారు ప్రారంభించండి", cta2:"పంట వ్యాధి స్కాన్", cta3:"డాష్‌బోర్డ్ తెరవండి" },
    chat: { placeholder:"మీ వ్యవసాయం గురించి ఏదైనా అడగండి…", send:"పంపండి", typing:"AgriSense AI ఆలోచిస్తోంది…" },
    scan: { title:"పంట వ్యాధి స్కానర్", upload:"పంట చిత్రాన్ని అప్‌లోడ్ చేయండి", drag:"ఇక్కడ ఫోటో లాగండి", or:"— లేదా —", choose:"చిత్రం ఎంచుకోండి", scanning:"AI స్కాన్ చేస్తోంది…", disease:"వ్యాధి", confidence:"నమ్మకం", severity:"తీవ్రత", treatment:"సిఫార్సు చేయబడిన చికిత్స", nextCheck:"తదుపరి తనిఖీ" },
    weather: { title:"వాతావరణ డాష్‌బోర్డ్", temp:"ఉష్ణోగ్రత", rain:"వర్షం సంభావ్యత", humidity:"తేమ", wind:"గాలి వేగం", uv:"UV సూచిక", feels:"అనిపిస్తుంది", forecast:"7 రోజుల అంచనా" },
    soil: { title:"నేల ఆరోగ్య విశ్లేషణ", nitrogen:"నైట్రోజన్", phosphorus:"ఫాస్ఫరస్", potassium:"పొటాషియమ్", organic:"సేంద్రియ కార్బన్", ph:"నేల pH", moisture:"తేమ", reco:"AI సిఫార్సులు" },
    advisor: { title:"వ్యక్తిగత వ్యవసాయ సలహాదారు", location:"స్థానం", size:"పొలం పరిమాణం", crop:"ప్రధాన పంట", season:"సీజన్", water:"నీటి వనరు", soil:"నేల రకం", generate:"AI వ్యవసాయ ప్రణాళిక రూపొందించండి", seed:"సిఫార్సు విత్తనం", yield:"అంచనా దిగుబడి", harvest:"కోత సమయం", profit:"లాభం అంచనా", risk:"ప్రమాద స్థాయి" },
    pest: { title:"తెగులు నిఘా", updated:"నవీకరించబడింది", nearby:"సమీప తెగులు హెచ్చరికలు", preventive:"నివారణ చర్యలు" },
    market: { title:"పంట ధర మేధస్సు", rising:"పెరుగుతోంది", falling:"తగ్గుతోంది", stable:"స్థిరంగా ఉంది", hold:"నిలిపి ఉంచండి", sell:"అమ్మండి", buy:"కొనండి", reco:"AI సిఫార్సు" },
    govt: { title:"ప్రభుత్వ సలహా", placeholder:"పథకాలు, రాయితీలు వెతకండి…", search:"వెతకండి" },
    agents: { title:"బహు-ఏజెంట్ AI ప్యానెల్", decision:"నేటి AI నిర్ణయ సారాంశం", profit:"సీజన్ లాభం అంచనా" },
    dashboard: { title:"రైతు డాష్‌బోర్డ్", health:"పంట ఆరోగ్య అవలోకనం", expenses:"పొలం ఖర్చులు", income:"అంచనా ఆదాయం", confidence:"AI విశ్వాసం" },
    ibm: { title:"IBM AI ద్వారా నడపబడింది" },
    common: { aiReco:"AI సిఫార్సులు", lowRisk:"తక్కువ ప్రమాదం", medRisk:"మధ్యస్థ ప్రమాదం", highRisk:"అధిక ప్రమాదం", active:"క్రియాశీలంగా", days:"రోజులు", acres:"ఎకరాలు", optimal:"సరైనది" }
  },
  kn: {
    nav: { home:"ಮನೆ", advisor:"AI ಸಲಹೆಗಾರ", scan:"ಬೆಳೆ ಸ್ಕ್ಯಾನ್", weather:"ಹವಾಮಾನ", market:"ಮಾರುಕಟ್ಟೆ", dashboard:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", about:"ಮಾಹಿತಿ" },
    hero: { tag:"IBM Granite · Langflow · Orchestrate ಮೂಲಕ ನಡೆಸಲಾಗುತ್ತಿದೆ", h1a:"ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಮಾಡಿ.", h1b:"ಉತ್ತಮ ಫಸಲು ತೆಗೆಯಿರಿ.", h1c:"AI ಶಕ್ತಿಯಿಂದ.", sub:"AgriSense AI ಹವಾಮಾನ ಬುದ್ಧಿಮತ್ತೆ, ಬೆಳೆ ತಜ್ಞತೆ, ಕೀಟ ಪತ್ತೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಒಳನೋಟಗಳನ್ನು ಸಂಯೋಜಿಸಿ ರೈತರಿಗೆ ಪ್ರತಿದಿನ ಉತ್ತಮ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.", cta1:"AI ಸಲಹೆಗಾರ ಪ್ರಾರಂಭಿಸಿ", cta2:"ಬೆಳೆ ರೋಗ ಸ್ಕ್ಯಾನ್", cta3:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ" },
    chat: { placeholder:"ನಿಮ್ಮ ಕೃಷಿಯ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ…", send:"ಕಳುಹಿಸು", typing:"AgriSense AI ಯೋಚಿಸುತ್ತಿದೆ…" },
    scan: { title:"ಬೆಳೆ ರೋಗ ಸ್ಕ್ಯಾನರ್", upload:"ಬೆಳೆ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", drag:"ಇಲ್ಲಿ ಫೋಟೋ ಎಳೆದು ಬಿಡಿ", or:"— ಅಥವಾ —", choose:"ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಿ", scanning:"AI ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತಿದೆ…", disease:"ರೋಗ", confidence:"ವಿಶ್ವಾಸ", severity:"ತೀವ್ರತೆ", treatment:"ಶಿಫಾರಸು ಚಿಕಿತ್ಸೆ", nextCheck:"ಮುಂದಿನ ತಪಾಸಣೆ" },
    weather: { title:"ಹವಾಮಾನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", temp:"ತಾಪಮಾನ", rain:"ಮಳೆ ಸಂಭಾವ್ಯತೆ", humidity:"ತೇವಾಂಶ", wind:"ಗಾಳಿ ವೇಗ", uv:"UV ಸೂಚ್ಯಂಕ", feels:"ಅನಿಸುತ್ತದೆ", forecast:"7 ದಿನ ಮುನ್ಸೂಚನೆ" },
    soil: { title:"ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ", nitrogen:"ನೈಟ್ರೋಜನ್", phosphorus:"ಫಾಸ್ಫರಸ್", potassium:"ಪೊಟ್ಯಾಸಿಯಮ್", organic:"ಸಾವಯವ ಇಂಗಾಲ", ph:"ಮಣ್ಣಿನ pH", moisture:"ತೇವಾಂಶ", reco:"AI ಶಿಫಾರಸುಗಳು" },
    advisor: { title:"ವ್ಯಕ್ತಿಗತ ಕೃಷಿ ಸಲಹೆಗಾರ", location:"ಸ್ಥಳ", size:"ಜಮೀನಿನ ಗಾತ್ರ", crop:"ಮುಖ್ಯ ಬೆಳೆ", season:"ಋತು", water:"ನೀರಿನ ಮೂಲ", soil:"ಮಣ್ಣಿನ ಪ್ರಕಾರ", generate:"AI ಕೃಷಿ ಯೋಜನೆ ಮಾಡಿ", seed:"ಶಿಫಾರಸು ಬೀಜ", yield:"ನಿರೀಕ್ಷಿತ ಇಳುವರಿ", harvest:"ಕಟಾವು ಸಮಯ", profit:"ಲಾಭ ಅಂದಾಜು", risk:"ಅಪಾಯ ಮಟ್ಟ" },
    pest: { title:"ಕೀಟ ಅಪಾಯ ಮಾನಿಟರ್", updated:"ನವೀಕರಿಸಲಾಗಿದೆ", nearby:"ಹತ್ತಿರದ ಕೀಟ ಎಚ್ಚರಿಕೆಗಳು", preventive:"ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು" },
    market: { title:"ಬೆಳೆ ಬೆಲೆ ಬುದ್ಧಿಮತ್ತೆ", rising:"ಏರುತ್ತಿದೆ", falling:"ಇಳಿಯುತ್ತಿದೆ", stable:"ಸ್ಥಿರ", hold:"ನಿಲ್ಲಿಸಿ", sell:"ಮಾರಿ", buy:"ಖರೀದಿಸಿ", reco:"AI ಶಿಫಾರಸು" },
    govt: { title:"ಸರ್ಕಾರಿ ಸಲಹೆ", placeholder:"ಯೋಜನೆಗಳು, ಸಬ್ಸಿಡಿ ಹುಡುಕಿ…", search:"ಹುಡುಕಿ" },
    agents: { title:"ಬಹು-ಏಜೆಂಟ್ AI ಪ್ಯಾನಲ್", decision:"ಇಂದಿನ AI ನಿರ್ಧಾರ ಸಾರಾಂಶ", profit:"ಋತು ಲಾಭ ಅಂದಾಜು" },
    dashboard: { title:"ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", health:"ಬೆಳೆ ಆರೋಗ್ಯ ಅವಲೋಕನ", expenses:"ಜಮೀನಿನ ವೆಚ್ಚಗಳು", income:"ನಿರೀಕ್ಷಿತ ಆದಾಯ", confidence:"AI ವಿಶ್ವಾಸ" },
    ibm: { title:"IBM AI ಮೂಲಕ ನಡೆಸಲಾಗುತ್ತಿದೆ" },
    common: { aiReco:"AI ಶಿಫಾರಸುಗಳು", lowRisk:"ಕಡಿಮೆ ಅಪಾಯ", medRisk:"ಮಧ್ಯಮ ಅಪಾಯ", highRisk:"ಹೆಚ್ಚು ಅಪಾಯ", active:"ಸಕ್ರಿಯ", days:"ದಿನಗಳು", acres:"ಎಕರೆ", optimal:"ಸೂಕ್ತ" }
  }
};

let currentLang = 'en';

function t(section, key) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const sec  = lang[section] || TRANSLATIONS.en[section] || {};
  return sec[key] || (TRANSLATIONS.en[section] || {})[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Nav
  const navMap = { 'nav-home':'home','nav-advisor':'advisor','nav-scan':'scan','nav-weather':'weather','nav-market':'market','nav-dashboard':'dashboard','nav-about':'about' };
  Object.entries(navMap).forEach(([id,k]) => { const el=document.getElementById(id); if(el) el.textContent=t('nav',k); });

  // Hero
  const ids = {
    'hero-tag':'tag','hero-h1a':'h1a','hero-h1b':'h1b','hero-h1c':'h1c','hero-sub':'sub',
    'hero-cta1':'cta1','hero-cta2':'cta2','hero-cta3':'cta3'
  };
  Object.entries(ids).forEach(([id,k]) => { const el=document.getElementById(id); if(el) el.textContent=t('hero',k); });

  // Chat placeholder
  const chatInput = document.getElementById('chat-input');
  if(chatInput) chatInput.placeholder = t('chat','placeholder');
  const sendBtn = document.getElementById('chat-send');
  if(sendBtn) sendBtn.textContent = t('chat','send');

  // Scan
  const scanIds = { 'scan-title':'title','scan-upload':'upload','scan-drag':'drag','scan-or':'or','scan-choose':'choose' };
  Object.entries(scanIds).forEach(([id,k]) => { const el=document.getElementById(id); if(el) el.textContent=t('scan',k); });

  // Weather
  const weatherIds = { 'weather-title':'title' };
  Object.entries(weatherIds).forEach(([id,k]) => { const el=document.getElementById(id); if(el) el.textContent=t('weather',k); });

  // Dispatch event so other modules can react
  document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
}

// Language selector binding
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('lang-selector');
  if(sel) {
    sel.addEventListener('change', (e) => applyLanguage(e.target.value));
    // Init with default
    applyLanguage(sel.value || 'en');
  }
});

window.AgriLang = { t, applyLanguage, getCurrent: () => currentLang };
