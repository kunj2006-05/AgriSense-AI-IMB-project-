// ============================================================
// AgriSense AI — Voice Module (STT + TTS)
// ============================================================

const Voice = (() => {
  let recognition = null;
  let isSpeaking   = false;
  let isListening  = false;
  const synthesis  = window.speechSynthesis;

  // ── Setup Speech Recognition ──
  function setupRecognition(lang = 'en-IN') {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;
    const r = new SpeechRecognition();
    r.continuous = false;
    r.interimResults = true;
    r.lang = lang;
    return r;
  }

  // Language code map
  const langCodes = {
    en:'en-IN', hi:'hi-IN', gu:'gu-IN', pa:'pa-IN',
    mr:'mr-IN', ta:'ta-IN', te:'te-IN', kn:'kn-IN'
  };

  // ── Start Listening ──
  function startListening(targetInputId, micBtnId, onResult) {
    const lang = window.AgriLang ? langCodes[window.AgriLang.getCurrent()] : 'en-IN';
    recognition = setupRecognition(lang);
    if (!recognition) {
      alert('Speech recognition not supported in this browser. Please use Chrome.');
      return;
    }
    const micBtn = document.getElementById(micBtnId);
    const input  = document.getElementById(targetInputId);
    isListening  = true;

    if (micBtn) { micBtn.classList.add('active'); micBtn.innerHTML = '🔴'; }

    // Show listening indicator
    showVoiceIndicator(true);

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
      if (input) input.value = transcript;
    };
    recognition.onend = () => {
      isListening = false;
      if (micBtn) { micBtn.classList.remove('active'); micBtn.innerHTML = '🎤'; }
      showVoiceIndicator(false);
      if (onResult && input) onResult(input.value);
    };
    recognition.onerror = (e) => {
      console.warn('Speech recognition error:', e.error);
      isListening = false;
      if (micBtn) { micBtn.classList.remove('active'); micBtn.innerHTML = '🎤'; }
      showVoiceIndicator(false);
    };
    recognition.start();
  }

  function stopListening() {
    if (recognition && isListening) { recognition.stop(); }
  }

  // ── Text to Speech ──
  function speak(text, lang) {
    if (!synthesis) return;
    synthesis.cancel();
    const langCode = lang ? (langCodes[lang] || 'en-IN') :
      (window.AgriLang ? (langCodes[window.AgriLang.getCurrent()] || 'en-IN') : 'en-IN');
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = langCode;
    utt.rate  = 0.92;
    utt.pitch = 1.0;
    utt.volume = 1.0;
    isSpeaking = true;
    showSpeakingIndicator(true);
    utt.onend = () => { isSpeaking = false; showSpeakingIndicator(false); };
    synthesis.speak(utt);
  }

  function stopSpeaking() {
    synthesis.cancel();
    isSpeaking = false;
    showSpeakingIndicator(false);
  }

  // ── UI Indicators ──
  function showVoiceIndicator(show) {
    let el = document.getElementById('voice-indicator');
    if (!el) {
      el = document.createElement('div');
      el.id = 'voice-indicator';
      el.style.cssText = `
        position:fixed; bottom:90px; right:24px; z-index:9999;
        background:rgba(22,163,74,0.95); color:#fff;
        padding:12px 20px; border-radius:50px;
        font-weight:700; font-size:0.85rem;
        display:flex; align-items:center; gap:10px;
        box-shadow:0 8px 24px rgba(22,163,74,0.4);
        transition: opacity 0.3s, transform 0.3s;
      `;
      el.innerHTML = `
        <span style="display:flex;gap:4px;align-items:center;">
          <span class="vbar" style="width:3px;height:16px;background:#fff;border-radius:2px;animation:wave 0.8s ease-in-out infinite;"></span>
          <span class="vbar" style="width:3px;height:22px;background:#fff;border-radius:2px;animation:wave 0.8s ease-in-out 0.2s infinite;"></span>
          <span class="vbar" style="width:3px;height:14px;background:#fff;border-radius:2px;animation:wave 0.8s ease-in-out 0.4s infinite;"></span>
        </span>
        <span id="vi-text">Listening…</span>
        <button onclick="Voice.stopListening()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;border-radius:20px;padding:4px 10px;cursor:pointer;font-size:0.75rem;">Stop</button>
      `;
      document.body.appendChild(el);
    }
    el.style.opacity = show ? '1' : '0';
    el.style.transform = show ? 'translateY(0)' : 'translateY(20px)';
    el.style.pointerEvents = show ? 'auto' : 'none';
  }

  function showSpeakingIndicator(show) {
    let el = document.getElementById('speaking-indicator');
    if (!el) {
      el = document.createElement('div');
      el.id = 'speaking-indicator';
      el.style.cssText = `
        position:fixed; bottom:90px; right:24px; z-index:9999;
        background:rgba(56,189,248,0.95); color:#0c4a6e;
        padding:12px 20px; border-radius:50px;
        font-weight:700; font-size:0.85rem;
        display:flex; align-items:center; gap:10px;
        box-shadow:0 8px 24px rgba(56,189,248,0.4);
        transition: opacity 0.3s, transform 0.3s;
      `;
      el.innerHTML = `
        <span>🔊</span>
        <span>AI Speaking…</span>
        <button onclick="Voice.stopSpeaking()" style="background:rgba(12,74,110,0.2);border:none;color:#0c4a6e;border-radius:20px;padding:4px 10px;cursor:pointer;font-size:0.75rem;">Stop</button>
      `;
      document.body.appendChild(el);
    }
    el.style.opacity = show ? '1' : '0';
    el.style.transform = show ? 'translateY(0)' : 'translateY(20px)';
    el.style.pointerEvents = show ? 'auto' : 'none';
  }

  return { startListening, stopListening, speak, stopSpeaking,
           isListening: () => isListening, isSpeaking: () => isSpeaking };
})();

window.Voice = Voice;
