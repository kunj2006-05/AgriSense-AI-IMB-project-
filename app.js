// ============================================================
// AgriSense AI — Core App
// Dark mode, Simple Farmer Mode, ripple, PWA, misc
// ============================================================

const AgriApp = (() => {

  // ── Dark / Light Mode ──
  function initTheme() {
    const saved = localStorage.getItem('agri-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = saved === 'dark' ? '☀ Light' : '🌙 Dark';
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('agri-theme', next);
        btn.textContent = next === 'dark' ? '☀ Light' : '🌙 Dark';
      });
    }
  }

  // ── Simple Farmer Mode ──
  function initFarmerMode() {
    const saved = localStorage.getItem('agri-farmer-mode') === 'true';
    if (saved) enableFarmerMode(true, false);
    const btn = document.getElementById('farmer-mode-toggle');
    if (btn) {
      btn.classList.toggle('active', saved);
      btn.addEventListener('click', () => {
        const current = document.body.getAttribute('data-farmer-mode') === 'true';
        enableFarmerMode(!current, true);
      });
    }
  }

  function enableFarmerMode(on, save) {
    document.body.setAttribute('data-farmer-mode', on ? 'true' : 'false');
    if (save) localStorage.setItem('agri-farmer-mode', on);
    const btn = document.getElementById('farmer-mode-toggle');
    if (btn) {
      btn.classList.toggle('active', on);
      btn.textContent = on ? '🔠 Normal Mode' : '👨‍🌾 Farmer Mode';
    }
    // Inject/remove farmer mode style overrides
    let el = document.getElementById('fm-styles');
    if (on && !el) {
      el = document.createElement('style');
      el.id = 'fm-styles';
      el.textContent = `
        body[data-farmer-mode="true"] { font-size:19px !important; }
        body[data-farmer-mode="true"] .section-title { font-size:2rem !important; }
        body[data-farmer-mode="true"] .card { padding:30px !important; }
        body[data-farmer-mode="true"] .btn  { padding:18px 36px !important; font-size:1.05rem !important; min-width:160px; }
        body[data-farmer-mode="true"] p     { font-size:1rem !important; }
        body[data-farmer-mode="true"] .text-sm { font-size:0.92rem !important; }
        body[data-farmer-mode="true"] input, body[data-farmer-mode="true"] select { font-size:1rem !important; padding:14px !important; }
      `;
      document.head.appendChild(el);
    } else if (!on && el) {
      el.remove();
    }
    if (on && window.Voice) {
      // Speak instruction
      setTimeout(() => window.Voice.speak('Farmer mode enabled. Larger text and buttons are now active.'), 300);
    }
  }

  // ── Active Nav Highlight on Scroll ──
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY + 100 >= sec.offsetTop) current = sec.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
  }

  // ── Navbar Scroll Style ──
  function initNavScroll() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.3)' : 'none';
    }, { passive: true });
  }

  // ── Crop Image Upload Simulation ──
  function initCropUpload() {
    const zone = document.getElementById('upload-zone');
    const input = document.getElementById('file-input');
    const result = document.getElementById('scan-result');
    const progress = document.getElementById('scan-progress');

    if (!zone) return;

    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) processUpload(file);
    });
    zone.addEventListener('click', () => input && input.click());
    if (input) input.addEventListener('change', (e) => {
      if (e.target.files[0]) processUpload(e.target.files[0]);
    });

    function processUpload(file) {
      if (!result || !progress) return;
      // Show preview + scanning state
      const reader = new FileReader();
      reader.onload = (ev) => {
        const imgEl = document.getElementById('upload-preview');
        if (imgEl) { imgEl.src = ev.target.result; imgEl.style.display = 'block'; }
      };
      reader.readAsDataURL(file);

      zone.style.borderColor = 'var(--gold)';
      if (progress) {
        progress.style.display = 'flex';
        progress.innerHTML = `
          <div class="animate-spin" style="font-size:1.5rem;">⚙</div>
          <span style="font-weight:700;color:var(--green);">AI Scanning…</span>
        `;
      }
      result.style.display = 'none';

      setTimeout(() => {
        if (progress) progress.style.display = 'none';
        zone.style.borderColor = '';
        result.style.display = 'grid';
        result.classList.add('animate-scaleIn');
        const successEl = document.getElementById('upload-success');
        if (successEl) { successEl.style.display = 'flex'; successEl.classList.add('animate-successBounce'); }
        if (window.Voice) window.Voice.speak('Scan complete. Leaf Blight detected with 95 percent confidence. Spray Copper Oxychloride is recommended.');
      }, 2800);
    }
  }

  // ── Emergency Call Button ──
  function initEmergency() {
    const btn = document.getElementById('emergency-call');
    if (btn) {
      btn.addEventListener('click', () => {
        if (confirm('Call Kisan Helpline 1800-180-1551?\n(Free 24x7 Government Agricultural Support)')) {
          window.location.href = 'tel:18001801551';
        }
      });
    }
  }

  // ── WhatsApp Alert ──
  function initWhatsApp() {
    const btn = document.getElementById('whatsapp-alert');
    if (btn) {
      btn.addEventListener('click', () => {
        const msg = encodeURIComponent(
          'AgriSense AI Alert 🌾\n\nToday\'s Recommendations:\n• Do not irrigate (rain expected)\n• Apply DAP after rain\n• Hold Cotton stock 6 days\n• Pest risk: LOW (18%)\n\nExpected Profit: ₹1.92 Lakhs\n\n- AgriSense AI'
        );
        window.open(`https://wa.me/?text=${msg}`, '_blank');
      });
    }
  }

  // ── Advisor Form Generation Animation ──
  function initAdvisor() {
    const btn = document.getElementById('generate-plan');
    const output = document.getElementById('advisor-output');
    if (!btn || !output) return;

    btn.addEventListener('click', () => {
      output.style.display = 'none';
      btn.innerHTML = '<span class="animate-spin" style="display:inline-block;margin-right:8px;">⚙</span>Analyzing with IBM Granite…';
      btn.disabled = true;

      // Shimmer placeholders
      output.innerHTML = `
        <div class="shimmer" style="height:32px;border-radius:8px;margin-bottom:12px;"></div>
        <div class="shimmer" style="height:24px;border-radius:8px;margin-bottom:8px;width:70%;"></div>
        <div class="shimmer" style="height:24px;border-radius:8px;margin-bottom:8px;width:55%;"></div>
      `;
      output.style.display = 'block';

      setTimeout(() => {
        btn.innerHTML = '🤖 Generate AI Farm Plan';
        btn.disabled = false;
        output.innerHTML = `
          <div class="output-grid">
            <div class="out-card"><div class="out-label">Recommended Seed</div><div class="out-val">Bt Cotton Hybrid</div></div>
            <div class="out-card"><div class="out-label">Expected Yield</div><div class="out-val green">30 Quintals</div></div>
            <div class="out-card"><div class="out-label">Harvest Time</div><div class="out-val">118 Days</div></div>
            <div class="out-card"><div class="out-label">Profit Estimate</div><div class="out-val big">₹1,92,000</div></div>
            <div class="out-card"><div class="out-label">Risk Level</div><div class="out-val"><span class="tag tag-green">🟢 Low</span></div></div>
            <div class="out-card"><div class="out-label">AI Confidence</div><div class="out-val green">97%</div></div>
          </div>
        `;
        output.classList.add('animate-scaleIn');
        if (window.Voice) window.Voice.speak('AI plan ready. Bt Cotton Hybrid recommended. Expected profit: one lakh ninety two thousand rupees. Risk level: Low.');
      }, 3200);
    });
  }

  // ── Floating Action Buttons ──
  function initFAB() {
    const fab = document.getElementById('fab-main');
    const fabMenu = document.getElementById('fab-menu');
    if (!fab || !fabMenu) return;
    let open = false;
    fab.addEventListener('click', () => {
      open = !open;
      fabMenu.style.display = open ? 'flex' : 'none';
      fab.textContent = open ? '✕' : '⚡';
    });
  }

  function init() {
    initTheme();
    initFarmerMode();
    initNavHighlight();
    initNavScroll();
    initCropUpload();
    initEmergency();
    initWhatsApp();
    initAdvisor();
    initFAB();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', AgriApp.init);
window.AgriApp = AgriApp;
