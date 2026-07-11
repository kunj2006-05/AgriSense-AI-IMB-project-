// ============================================================
// AgriSense AI — Dashboard Charts Module
// SVG bar charts, donut charts, health bars
// ============================================================

const AgriDashboard = (() => {

  // ── SVG Bar Chart ──
  function renderBarChart(canvasId, labels, values, colors) {
    const container = document.getElementById(canvasId);
    if (!container) return;
    const w = container.clientWidth || 360;
    const h = 140;
    const max = Math.max(...values);
    const barW = Math.max(24, (w - 60) / labels.length - 10);

    const svgBars = labels.map((label, i) => {
      const val = values[i];
      const barH = (val / max) * (h - 40);
      const x = 30 + i * ((w - 60) / labels.length) + ((w - 60) / labels.length - barW) / 2;
      const y = h - 28 - barH;
      const col = Array.isArray(colors) ? colors[i % colors.length] : colors;
      return `
        <g>
          <rect x="${x}" y="${h-28}" width="${barW}" height="0" rx="4" fill="${col}" opacity="0.15">
            <animate attributeName="height" from="0" to="${barH}" dur="1.2s" delay="${i*0.1}s" fill="freeze" begin="0.${i}s"/>
            <animate attributeName="y" from="${h-28}" to="${y}" dur="1.2s" fill="freeze" begin="0.${i}s"/>
            <animate attributeName="opacity" to="1" dur="0.3s" fill="freeze" begin="0.${i}s"/>
          </rect>
          <rect x="${x}" y="${h-28}" width="${barW}" height="0" rx="4" fill="${col}">
            <animate attributeName="height" from="0" to="${barH}" dur="1.2s" fill="freeze" begin="0.${i}s"/>
            <animate attributeName="y" from="${h-28}" to="${y}" dur="1.2s" fill="freeze" begin="0.${i}s"/>
          </rect>
          <text x="${x + barW/2}" y="${h - 10}" text-anchor="middle" font-size="10" fill="var(--text-muted)">${label}</text>
          <text x="${x + barW/2}" y="${y - 4}" text-anchor="middle" font-size="10" font-weight="700" fill="${col}">${val}</text>
        </g>
      `;
    }).join('');

    // Horizontal grid lines
    const gridLines = [25, 50, 75, 100].map(pct => {
      const gy = h - 28 - (pct / 100) * (h - 40);
      return `<line x1="20" y1="${gy}" x2="${w - 10}" y2="${gy}" stroke="var(--border)" stroke-width="1" stroke-dasharray="4,4"/>
              <text x="14" y="${gy + 3}" text-anchor="end" font-size="9" fill="var(--text-muted)">${Math.round(max * pct / 100)}</text>`;
    }).join('');

    container.innerHTML = `<svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}">${gridLines}${svgBars}</svg>`;
  }

  // ── Donut Chart ──
  function renderDonut(containerId, segments, size = 120) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const cx = size / 2, cy = size / 2, r = size * 0.38;
    const circ = 2 * Math.PI * r;
    let cumulative = 0;
    const total = segments.reduce((s, seg) => s + seg.value, 0);

    const arcs = segments.map((seg, i) => {
      const fraction = seg.value / total;
      const offset = circ * (1 - cumulative);
      const dash = circ * fraction;
      cumulative += fraction;
      return `<circle cx="${cx}" cy="${cy}" r="${r}"
        fill="none" stroke="${seg.color}" stroke-width="${size * 0.12}"
        stroke-dasharray="${dash.toFixed(2)} ${(circ - dash).toFixed(2)}"
        stroke-dashoffset="${offset.toFixed(2)}"
        transform="rotate(-90 ${cx} ${cy})"
        style="transition:stroke-dashoffset 1.5s ease ${i * 0.2}s">
        <title>${seg.label}: ${seg.value}</title>
      </circle>`;
    }).join('');

    container.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border)" stroke-width="${size * 0.12}"/>
        ${arcs}
        <text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="${size * 0.14}" font-weight="800" fill="var(--text)">
          ${segments[0]?.label?.substring(0,4) || ''}
        </text>
      </svg>
    `;
  }

  // ── Soil Nutrient Circular Gauges ──
  function renderSoilGauges() {
    const nutrients = [
      { id:'gauge-n', label:'N', value:55, color:'#22c55e', description:'Nitrogen' },
      { id:'gauge-p', label:'P', value:28, color:'#f97316', description:'Phosphorus' },
      { id:'gauge-k', label:'K', value:80, color:'#3b82f6', description:'Potassium' },
      { id:'gauge-oc',label:'OC',value:70, color:'#8b5cf6', description:'Organic Carbon' },
      { id:'gauge-ph',label:'pH',value:68, color:'#06b6d4', description:'pH (6.8)' },
      { id:'gauge-m', label:'M', value:61, color:'#14b8a6', description:'Moisture' }
    ];

    nutrients.forEach(n => {
      const container = document.getElementById(n.id);
      if (!container) return;
      const size = 100;
      const r = 38;
      const circ = 2 * Math.PI * r;
      const filled = (n.value / 100) * circ;

      container.innerHTML = `
        <div class="gauge-container" style="text-align:center;">
          <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="gauge-container">
            <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--border)" stroke-width="10"/>
            <circle cx="50" cy="50" r="${r}" fill="none" stroke="${n.color}" stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="${circ}"
              stroke-dashoffset="${circ}"
              transform="rotate(-90 50 50)"
              class="gauge-arc" data-offset="${(circ - filled).toFixed(2)}"
              style="stroke-dashoffset:${circ};"/>
            <text x="50" y="47" text-anchor="middle" font-size="16" font-weight="800" fill="var(--text)">${n.label}</text>
            <text x="50" y="60" text-anchor="middle" font-size="11" fill="${n.color}">${n.value}%</text>
          </svg>
          <div style="font-size:0.72rem;color:var(--text-muted);margin-top:4px;font-weight:600;">${n.description}</div>
        </div>
      `;
    });
  }

  // ── Yield Trend SVG Line Chart ──
  function renderYieldTrend() {
    const container = document.getElementById('yield-trend');
    if (!container) return;
    const w = 320, h = 80;
    const points = [[10,60],[60,50],[110,42],[160,30],[210,22],[270,14]];
    const coords = points.map(p => p.join(',')).join(' ');
    const fill = `${coords} 270,${h} 10,${h}`;

    container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}">
        <defs>
          <linearGradient id="yieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#22c55e" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <polygon points="${fill}" fill="url(#yieldGrad)"/>
        <polyline points="${coords}" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        ${points.map(([x,y],i) =>
          `<circle cx="${x}" cy="${y}" r="${i===5?5:3}" fill="${i===5?'#22c55e':'#fff'}" stroke="#22c55e" stroke-width="2"/>
           ${i===5 ? `<text x="${x+8}" y="${y+4}" font-size="10" font-weight="700" fill="#16a34a">Now</text>` : ''}`
        ).join('')}
      </svg>
    `;
  }

  // ── Expense Donut ──
  function renderExpenseDonut() {
    renderDonut('expense-donut', [
      { label:'Labour', value:25000, color:'#22c55e' },
      { label:'Seeds',  value:18000, color:'#3b82f6' },
      { label:'Fert',   value:12000, color:'#f59e0b' },
      { label:'Irrig',  value:8000,  color:'#38bdf8' },
      { label:'Equip',  value:6000,  color:'#8b5cf6' }
    ], 130);
  }

  function init() {
    renderSoilGauges();
    renderYieldTrend();
    renderExpenseDonut();

    // Render bar chart when section scrolls into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          renderBarChart('crop-health-chart',
            ['Crop Health','Soil Quality','Pest Resist','Water Eff'],
            [92, 80, 78, 91],
            ['#22c55e','#3b82f6','#f97316','#38bdf8']
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const dash = document.getElementById('dashboard');
    if (dash) observer.observe(dash);
  }

  return { init, renderBarChart };
})();

document.addEventListener('DOMContentLoaded', AgriDashboard.init);
window.AgriDashboard = AgriDashboard;
