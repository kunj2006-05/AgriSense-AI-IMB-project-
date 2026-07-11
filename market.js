// ============================================================
// AgriSense AI — Market Module
// Animated price cards and trend charts
// ============================================================

const AgriMarket = (() => {
  const crops = [
    { name:'Cotton',    price:7420, prev:7252, trend:'up',   conf:91, unit:'Qtl', color:'#16a34a', reco:'hold',  holdDays:6  },
    { name:'Groundnut', price:6120, prev:6231, trend:'down', conf:78, unit:'Qtl', color:'#dc2626', reco:'sell',  holdDays:0  },
    { name:'Wheat',     price:2560, prev:2555, trend:'flat', conf:85, unit:'Qtl', color:'#6b7280', reco:'hold',  holdDays:3  },
    { name:'Tomato',    price:1840, prev:1710, trend:'up',   conf:88, unit:'Qtl', color:'#16a34a', reco:'sell',  holdDays:0  }
  ];

  function trendArrow(trend) {
    if (trend === 'up')   return '<span style="color:#16a34a;font-weight:800;">↑</span>';
    if (trend === 'down') return '<span style="color:#dc2626;font-weight:800;">↓</span>';
    return '<span style="color:#6b7280;font-weight:800;">→</span>';
  }
  function trendLabel(trend, lang) {
    const map = { up: 'rising', down: 'falling', flat: 'stable' };
    return window.AgriLang ? window.AgriLang.t('market', map[trend] || trend) : map[trend];
  }
  function changePct(curr, prev) {
    return (((curr - prev) / prev) * 100).toFixed(1);
  }

  // Mini sparkline SVG
  function sparkline(seed, trend, w=80, h=32) {
    const rng = (n, s) => { let x = Math.sin(s * 9301 + n * 49297 + 233) * 46906;  return x - Math.floor(x); };
    const pts = Array.from({length:8}, (_,i) => rng(i, seed));
    // nudge trend
    const nudged = pts.map((v,i) => {
      const t = i / 7;
      if (trend === 'up')   return v * 0.6 + t * 0.4;
      if (trend === 'down') return v * 0.6 + (1-t) * 0.4;
      return v * 0.6 + 0.2;
    });
    const min = Math.min(...nudged), max = Math.max(...nudged);
    const norm = nudged.map(v => (v - min) / (max - min || 1));
    const coords = norm.map((v, i) => `${(i / 7 * w).toFixed(1)},${((1-v) * (h-4) + 2).toFixed(1)}`).join(' ');
    const fillCoords = `${coords} ${w},${h} 0,${h}`;
    const col = trend === 'up' ? '#16a34a' : trend === 'down' ? '#dc2626' : '#6b7280';
    return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="display:block;">
      <polygon points="${fillCoords}" fill="${col}" opacity="0.12"/>
      <polyline points="${coords}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  }

  function renderMarket() {
    const grid = document.getElementById('market-cards');
    if (!grid) return;

    grid.innerHTML = crops.map((c, i) => {
      const pct = changePct(c.price, c.prev);
      const sign = c.trend === 'up' ? '+' : '';
      const borderColor = c.trend === 'up' ? '#bbf7d0' : c.trend === 'down' ? '#fecaca' : '#e5e7eb';
      return `
        <div class="market-card card card-glow reveal reveal-child" style="border-top:3px solid ${c.color};" data-delay="${i*100}">
          <div class="flex-between mb-8">
            <div class="market-crop text-xs fw-700 text-muted">${c.name.toUpperCase()} · Agmarknet</div>
            <span class="tag ${c.trend==='up'?'tag-green':c.trend==='down'?'tag-red':'tag-blue'}">
              ${trendArrow(c.trend)} ${sign}${pct}%
            </span>
          </div>
          <div class="market-price" style="font-size:1.8rem;font-weight:800;">
            ₹<span data-counter data-target="${c.price}" data-duration="1800">${c.price.toLocaleString()}</span>
            <span style="font-size:0.85rem;font-weight:400;color:var(--text-muted);">/${c.unit}</span>
          </div>
          <div style="margin:10px 0;">${sparkline(i+1, c.trend)}</div>
          <div class="flex-between mt-8">
            <div>
              <div class="text-xs text-muted mb-4">AI Confidence</div>
              <div class="progress-wrap" style="width:100px;">
                <div class="progress-fill" style="width:0;" data-width="${c.conf}%"></div>
              </div>
              <div class="text-xs fw-700" style="margin-top:3px;color:var(--green);">${c.conf}%</div>
            </div>
            <button class="btn btn-sm ${c.reco==='sell'?'btn-sky':c.reco==='hold'?'btn-gold':'btn-primary'}" 
                    onclick="AgriMarket.playPriceAlert('${c.name}','${c.price}','${c.reco}')">
              ${c.reco==='sell'?'💰 Sell Now':c.reco==='hold'?'⏳ Hold':'📈 Buy'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderRecommendation() {
    const card = document.getElementById('market-reco-card');
    if (!card) return;
    card.innerHTML = `
      <div class="flex-between flex-wrap gap-24">
        <div>
          <div style="font-size:0.75rem;color:#86efac;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">🤖 AI Market Recommendation</div>
          <div style="font-size:1.1rem;font-weight:800;">🌾 Cotton — Hold for 6 Days</div>
          <div style="font-size:0.85rem;color:rgba(255,255,255,0.65);margin-top:4px;">Expected price: ₹7,791/Qtl (+5% gain)</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:0.78rem;color:rgba(255,255,255,0.55);">Additional Profit</div>
          <div style="font-size:2rem;font-weight:800;color:#86efac;" data-counter data-target="11130" data-prefix="₹" data-duration="2200">₹11,130</div>
          <div style="font-size:0.76rem;color:rgba(255,255,255,0.5);">for 30 quintals</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:0.78rem;color:rgba(255,255,255,0.55);">Groundnut — Sell Now</div>
          <div style="font-size:1.2rem;font-weight:800;color:#fca5a5;">↓ Falling</div>
          <div style="font-size:0.76rem;color:rgba(255,255,255,0.5);">-1.8% this week</div>
        </div>
      </div>
    `;
  }

  function playPriceAlert(crop, price, action) {
    if (!window.Voice) return;
    const msgs = {
      hold: `${crop} price is ${price} rupees per quintal and rising. Recommendation: Hold. Expected to increase by 5 percent in 6 days.`,
      sell: `${crop} price is ${price} rupees per quintal. Recommendation: Sell now before prices fall further.`,
      buy:  `${crop} price is ${price} rupees per quintal. Good time to buy.`
    };
    window.Voice.speak(msgs[action] || msgs.hold);
  }

  function init() {
    renderMarket();
    renderRecommendation();
  }

  return { init, playPriceAlert };
})();

document.addEventListener('DOMContentLoaded', AgriMarket.init);
window.AgriMarket = AgriMarket;
