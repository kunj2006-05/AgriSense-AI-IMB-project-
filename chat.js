// ============================================================
// AgriSense AI — Chat Module
// AI Chat interface with typing animation, shimmer, quick replies
// ============================================================

const AgriChat = (() => {

  // Sample AI responses keyed by topic keywords
  const responses = {
    mildew: {
      disease:'Powdery Mildew', confidence:96, recovery:7,
      steps:['Spray Sulfur Fungicide (0.3% solution)','Reduce Humidity below 60%','Remove infected leaves immediately','Apply Neem Oil as preventive measure']
    },
    blight: {
      disease:'Leaf Blight', confidence:94, recovery:10,
      steps:['Spray Copper Oxychloride 50% WP @ 3g/L','Apply in early morning or evening','Remove heavily infected plant parts','Repeat after 10 days if symptoms persist']
    },
    irrigat: {
      text:'Weather Agent reports 82% rain probability tomorrow. Do NOT irrigate today — wait for natural rainfall. Apply fertilizer 2 hours after rain for best absorption. Expected savings: ₹340 in water cost.'
    },
    fertil: {
      text:'Based on soil analysis: Apply DAP @ 100 kg/acre. Reduce Urea by 20%. Add Organic Compost (2 tonnes/acre). Best time: Apply after tomorrow\'s rainfall for maximum absorption.'
    },
    market: {
      text:'Cotton price is ₹7,420/Qtl and RISING. AI recommends HOLD — expected +5% increase in 6 days (₹7,791/Qtl). Additional profit potential: ₹11,130 for 30 quintals. Groundnut is falling — sell now if you have stock.'
    },
    pest: {
      text:'Current Pest Risk: LOW (18%). Stem Borer detected in 5 farms 3km away. Install yellow sticky traps for Whitefly. Apply Spinosad spray preventively. Monitor field edges weekly.'
    },
    weather: {
      text:'Current: 29°C, Humidity 71%, Wind 11km/h. Tomorrow: 82% rain probability — heavy shower expected. Thu/Fri: Clear skies, good for pesticide application. Weekend: Cloudy with light rain.'
    },
    soil: {
      text:'Soil Analysis: Nitrogen Medium ✓, Phosphorus LOW ⚠ (apply DAP), Potassium High ✓, pH 6.8 Optimal. Recommendation: Apply DAP, reduce Urea by 20%, add Organic Compost 2T/acre.'
    },
    kisan: {
      text:'PM Kisan Samman Nidhi: You are ELIGIBLE ✅. Annual benefit: ₹6,000 (3 installments of ₹2,000). Next installment: August 2025. Required docs: Aadhaar + Land Records + Bank Passbook. Register at pmkisan.gov.in'
    },
    default: {
      text:'Based on your farm profile (5 Acres, Cotton, Ahmedabad), here are today\'s key recommendations: (1) Do not irrigate — rain expected tomorrow. (2) Apply DAP fertilizer after rainfall. (3) Monitor Leaf Blight on Cotton. (4) Hold Cotton stock for 6 days for +5% price gain. Expected season profit: ₹1.92 Lakhs.'
    }
  };

  function getResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('mildew') || q.includes('white spot') || q.includes('white'))  return responses.mildew;
    if (q.includes('blight') || q.includes('yellow') || q.includes('brown leaf'))  return responses.blight;
    if (q.includes('irrig') || q.includes('water') || q.includes('rain'))          return responses.irrigat;
    if (q.includes('fertil') || q.includes('fertilizer') || q.includes('dap'))     return responses.fertil;
    if (q.includes('market') || q.includes('price') || q.includes('sell') || q.includes('cotton')) return responses.market;
    if (q.includes('pest') || q.includes('insect') || q.includes('bug'))            return responses.pest;
    if (q.includes('weather') || q.includes('temperature') || q.includes('forecast')) return responses.weather;
    if (q.includes('soil') || q.includes('nitrogen') || q.includes('ph'))           return responses.soil;
    if (q.includes('kisan') || q.includes('scheme') || q.includes('govt') || q.includes('subsidy')) return responses.kisan;
    return responses.default;
  }

  function buildBotBubble(resp) {
    if (resp.text) {
      return `<div class="msg-text">${resp.text}</div>`;
    }
    // Disease card
    return `
      <div class="disease-card-inner">
        <div class="dc-header">
          <span class="dc-icon">🦠</span>
          <div>
            <div class="dc-name">${resp.disease} Detected</div>
            <div class="dc-conf-row">
              <span class="text-sm text-muted">Confidence</span>
              <span class="dc-conf-val">${resp.confidence}%</span>
            </div>
            <div class="progress-wrap" style="width:180px;margin-top:4px;">
              <div class="progress-fill" style="width:${resp.confidence}%"></div>
            </div>
          </div>
        </div>
        <ul class="dc-steps">
          ${resp.steps.map(s => `<li><span class="dc-check">✔</span>${s}</li>`).join('')}
        </ul>
        <div class="dc-recovery">⏱ Expected Recovery: <strong>${resp.recovery} Days</strong></div>
      </div>
    `;
  }

  // Quick reply chips
  const quickReplies = {
    en: ['🌾 My crop health?','💧 Should I irrigate?','🐛 Any pest risks?','💰 Cotton price today?','🌧 Rain forecast?','📋 PM Kisan scheme'],
    hi: ['🌾 फसल की स्थिति?','💧 सिंचाई करूं?','🐛 कीट का खतरा?','💰 कपास का भाव?','🌧 बारिश का अनुमान?'],
    gu: ['🌾 પાકની સ્થિતિ?','💧 સિંચાઈ કરું?','🐛 જીવાત?','💰 કપાસ ભાવ?','🌧 વરસાદ?']
  };

  function renderQuickReplies(container) {
    const lang = window.AgriLang ? window.AgriLang.getCurrent() : 'en';
    const replies = quickReplies[lang] || quickReplies.en;
    container.innerHTML = replies.map(r =>
      `<button class="quick-chip">${r}</button>`
    ).join('');

    container.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const input = document.getElementById('chat-input');
        if (input) { input.value = chip.textContent.replace(/^[^\s]+\s/,''); sendMessage(); }
      });
    });
  }

  function appendMessage(type, html, msgList) {
    const div = document.createElement('div');
    div.className = `msg msg-${type}`;
    div.innerHTML = `
      <div class="msg-avatar">${type === 'user' ? '👨‍🌾' : '🤖'}</div>
      <div class="msg-bubble">${html}</div>
    `;
    msgList.appendChild(div);
    msgList.scrollTop = msgList.scrollHeight;
    return div;
  }

  function showTypingIndicator(msgList) {
    const div = document.createElement('div');
    div.className = 'msg msg-bot typing-indicator';
    div.id = 'typing-ind';
    div.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    msgList.appendChild(div);
    msgList.scrollTop = msgList.scrollHeight;
    return div;
  }

  function sendMessage() {
    const input   = document.getElementById('chat-input');
    const msgList = document.getElementById('chat-messages');
    if (!input || !msgList || !input.value.trim()) return;

    const query = input.value.trim();
    input.value = '';

    // User message
    appendMessage('user', `<div class="msg-text">${query}</div>`, msgList);

    // Typing indicator
    const indicator = showTypingIndicator(msgList);
    const delay = 1200 + Math.random() * 800;

    setTimeout(() => {
      indicator.remove();
      const resp = getResponse(query);
      const bubble = appendMessage('bot', buildBotBubble(resp), msgList);

      // Speak the response if TTS enabled
      const ttsToggle = document.getElementById('tts-toggle');
      if (ttsToggle && ttsToggle.checked && window.Voice) {
        const spokenText = resp.text ||
          `${resp.disease} detected with ${resp.confidence} percent confidence. ${resp.steps ? resp.steps.join('. ') : ''}`;
        window.Voice.speak(spokenText);
      }

      // Animate progress bar in bubble if present
      bubble.querySelectorAll('.progress-fill').forEach(f => {
        const w = f.style.width; f.style.width = '0';
        setTimeout(() => { f.style.transition = 'width 1s ease'; f.style.width = w; }, 100);
      });

      // Update quick replies
      const qr = document.getElementById('quick-replies');
      if (qr) renderQuickReplies(qr);
    }, delay);
  }

  function init() {
    const sendBtn = document.getElementById('chat-send');
    const input   = document.getElementById('chat-input');
    const micBtn  = document.getElementById('chat-mic');
    const qr      = document.getElementById('quick-replies');

    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (input) {
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });
    }
    if (micBtn && window.Voice) {
      micBtn.addEventListener('click', () => {
        window.Voice.startListening('chat-input', 'chat-mic', sendMessage);
      });
    }
    if (qr) renderQuickReplies(qr);

    // Speak button on bot messages (delegated)
    const msgList = document.getElementById('chat-messages');
    if (msgList) {
      msgList.addEventListener('click', (e) => {
        if (e.target.closest('.speak-btn') && window.Voice) {
          const bubble = e.target.closest('.msg-bubble');
          if (bubble) window.Voice.speak(bubble.textContent.trim());
        }
      });
    }

    // Listen for language changes
    document.addEventListener('langChanged', (e) => {
      const qr = document.getElementById('quick-replies');
      if (qr) renderQuickReplies(qr);
      const inp = document.getElementById('chat-input');
      if (inp) inp.placeholder = window.AgriLang.t('chat','placeholder');
    });
  }

  return { init, sendMessage };
})();

document.addEventListener('DOMContentLoaded', AgriChat.init);
window.AgriChat = AgriChat;
