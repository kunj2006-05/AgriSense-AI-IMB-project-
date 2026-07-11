// ============================================================
// AgriSense AI — Weather Module
// Animated weather cards and forecasts
// ============================================================

const AgriWeather = (() => {

  // Animated weather icon components (inline SVG/emoji with CSS)
  const weatherData = {
    current: { temp:29, rain:82, humidity:71, wind:11, uv:'High', feelsLike:31 },
    forecast: [
      { day:'Mon', icon:'sunny',    temp:31, low:24 },
      { day:'Tue', icon:'rainy',    temp:26, low:21 },
      { day:'Wed', icon:'cloudy',   temp:28, low:22 },
      { day:'Thu', icon:'sunny',    temp:33, low:26 },
      { day:'Fri', icon:'stormy',   temp:24, low:19 },
      { day:'Sat', icon:'sunny',    temp:30, low:23 },
      { day:'Sun', icon:'rainy',    temp:25, low:20 }
    ]
  };

  // Animated SVG icons
  function getSVGIcon(type, size = 48) {
    const s = size;
    const icons = {
      sunny: `<svg width="${s}" height="${s}" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="10" fill="#fbbf24" class="animate-sunSpin" style="transform-origin:24px 24px"/>
        <g class="animate-sunSpin" style="transform-origin:24px 24px">
          ${[0,45,90,135,180,225,270,315].map(a =>
            `<line x1="${24+15*Math.cos(a*Math.PI/180)}" y1="${24+15*Math.sin(a*Math.PI/180)}"
                   x2="${24+20*Math.cos(a*Math.PI/180)}" y2="${24+20*Math.sin(a*Math.PI/180)}"
                   stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>`
          ).join('')}
        </g>
      </svg>`,

      rainy: `<svg width="${s}" height="${s}" viewBox="0 0 48 48">
        <ellipse cx="24" cy="18" rx="14" ry="9" fill="#94a3b8" class="animate-cloudMove"/>
        <ellipse cx="17" cy="22" rx="8"  ry="6" fill="#cbd5e1" class="animate-cloudMove"/>
        <line x1="18" y1="32" x2="15" y2="42" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" class="animate-rainDrop" style="animation-delay:0s"/>
        <line x1="24" y1="30" x2="21" y2="40" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" class="animate-rainDrop" style="animation-delay:0.3s"/>
        <line x1="30" y1="32" x2="27" y2="42" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" class="animate-rainDrop" style="animation-delay:0.6s"/>
      </svg>`,

      cloudy: `<svg width="${s}" height="${s}" viewBox="0 0 48 48">
        <ellipse cx="26" cy="20" rx="14" ry="9" fill="#94a3b8" class="animate-cloudMove"/>
        <ellipse cx="18" cy="25" rx="10" ry="7" fill="#cbd5e1" class="animate-cloudMove" style="animation-delay:0.5s"/>
        <ellipse cx="30" cy="26" rx="8"  ry="6" fill="#e2e8f0" class="animate-cloudMove" style="animation-delay:1s"/>
      </svg>`,

      stormy: `<svg width="${s}" height="${s}" viewBox="0 0 48 48">
        <ellipse cx="24" cy="15" rx="16" ry="9" fill="#475569"/>
        <polyline points="26,26 20,36 25,36 19,46" stroke="#fbbf24" stroke-width="3" fill="none" stroke-linecap="round" class="animate-lightning"/>
        <line x1="14" y1="34" x2="11" y2="44" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" class="animate-rainDrop"/>
        <line x1="34" y1="32" x2="31" y2="42" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" class="animate-rainDrop" style="animation-delay:0.4s"/>
      </svg>`
    };
    return icons[type] || icons.sunny;
  }

  // Render weather cards
  function renderCurrentWeather() {
    const grid = document.getElementById('weather-cards');
    if (!grid) return;

    const cards = [
      { icon:'🌡', val: weatherData.current.temp + '°C', label:'temperature', color:'#f97316' },
      { icon:'🌧', val: weatherData.current.rain + '%',  label:'rain',        color:'#38bdf8' },
      { icon:'💧', val: weatherData.current.humidity + '%', label:'humidity', color:'#3b82f6' },
      { icon:'🌬', val: weatherData.current.wind + ' km/h', label:'wind',     color:'#6b7280' },
      { icon:'☀',  val: weatherData.current.uv,          label:'uv',          color:'#f59e0b' },
      { icon:'🌡', val: weatherData.current.feelsLike + '°C', label:'feels',  color:'#ec4899' }
    ];

    grid.innerHTML = cards.map(c => `
      <div class="weather-card card reveal reveal-child">
        <div class="weather-icon" style="font-size:2.2rem;">${c.icon}</div>
        <div class="weather-val" style="font-size:1.8rem;font-weight:800;color:${c.color};" data-counter data-target="${parseFloat(c.val)}" data-suffix="${c.val.replace(/[0-9.]/g,'')}">
          ${c.val}
        </div>
        <div class="weather-label text-muted text-sm" id="wl-${c.label}">—</div>
      </div>
    `).join('');

    // Apply language labels
    const labels = { temperature:'temp', rain:'rain', humidity:'humidity', wind:'wind', uv:'uv', feels:'feels' };
    Object.entries(labels).forEach(([id, key]) => {
      const el = document.getElementById(`wl-${id}`);
      if (el && window.AgriLang) el.textContent = window.AgriLang.t('weather', key);
    });
  }

  function renderForecast() {
    const strip = document.getElementById('forecast-strip');
    if (!strip) return;
    strip.innerHTML = weatherData.forecast.map(d => `
      <div class="forecast-day">
        <div class="day-name text-xs fw-700 text-muted">${d.day}</div>
        <div class="day-icon" style="width:36px;height:36px;margin:8px auto;">
          ${getSVGIcon(d.icon, 36)}
        </div>
        <div class="day-temp fw-700 text-sm">${d.temp}°</div>
        <div class="day-low text-xs text-muted">${d.low}°</div>
      </div>
    `).join('');
  }

  // AI weather alert voice
  function speakWeatherAlert() {
    if (!window.Voice) return;
    const msg = `Weather Alert: ${weatherData.current.rain}% rain probability tomorrow. Current temperature ${weatherData.current.temp} degrees Celsius. Humidity ${weatherData.current.humidity}%. Do not irrigate today.`;
    window.Voice.speak(msg);
  }

  function init() {
    renderCurrentWeather();
    renderForecast();

    const alertBtn = document.getElementById('weather-voice-alert');
    if (alertBtn) alertBtn.addEventListener('click', speakWeatherAlert);
  }

  return { init, speakWeatherAlert };
})();

document.addEventListener('DOMContentLoaded', AgriWeather.init);
window.AgriWeather = AgriWeather;
