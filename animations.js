// ============================================================
// AgriSense AI — Animations Engine
// Scroll reveal, animated counters, ripple, parallax
// ============================================================

const AgriAnimations = (() => {

  // ── Intersection Observer for Scroll Reveal ──
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stagger children
          const children = entry.target.querySelectorAll('.reveal-child');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100);
          });
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => observer.observe(el));
  }

  // ── Animated Counters ──
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ''));
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = parseInt(el.dataset.duration || 2000);
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = '1';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
  }

  // ── Progress Bar Reveal ──
  function initProgressBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.progress-fill');
          if (fill && fill.dataset.width) {
            setTimeout(() => { fill.style.width = fill.dataset.width; }, 200);
          }
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.progress-wrap').forEach(el => observer.observe(el));
  }

  // ── SVG Gauge Animation ──
  function initGauges() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const circles = entry.target.querySelectorAll('.gauge-arc');
          circles.forEach(c => {
            const target = parseFloat(c.dataset.offset || c.style.strokeDashoffset || 0);
            c.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1)';
            setTimeout(() => { c.style.strokeDashoffset = target; }, 200);
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.gauge-container').forEach(el => observer.observe(el));
  }

  // ── Bar Chart Grow on Scroll ──
  function initBarCharts() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar-fill').forEach((bar, i) => {
            const h = bar.dataset.height || '80%';
            setTimeout(() => {
              bar.style.transition = 'height 1s cubic-bezier(0.4,0,0.2,1)';
              bar.style.height = h;
            }, i * 120);
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.bar-chart').forEach(el => observer.observe(el));
  }

  // ── Ripple Effect on Buttons ──
  function initRipple() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const rect = btn.getBoundingClientRect();
        const rx = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        const ry = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
        btn.style.setProperty('--rx', rx + '%');
        btn.style.setProperty('--ry', ry + '%');

        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position:absolute;
          border-radius:50%;
          background:rgba(255,255,255,0.45);
          transform:scale(0);
          animation:rippleOut 0.55s linear;
          left:${e.clientX - rect.left - 10}px;
          top:${e.clientY - rect.top - 10}px;
          width:20px; height:20px;
          pointer-events:none;
        `;
        btn.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      });
    });

    // Add keyframe if not present
    if (!document.querySelector('#ripple-style')) {
      const s = document.createElement('style');
      s.id = 'ripple-style';
      s.textContent = `@keyframes rippleOut { to { transform:scale(18); opacity:0; } }`;
      document.head.appendChild(s);
    }
  }

  // ── Parallax Hero ──
  function initParallax() {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const fg = heroEl.querySelector('.hero-fg');
      const bg = heroEl.querySelector('.hero-bg-layer');
      if (fg) fg.style.transform = `translateY(${y * 0.15}px)`;
      if (bg) bg.style.transform = `translateY(${y * 0.06}px)`;
    }, { passive: true });
  }

  // ── Agent Card Pulse ──
  function initAgentCards() {
    document.querySelectorAll('.agent-card').forEach((card, i) => {
      setInterval(() => {
        card.style.borderColor = 'rgba(34,197,94,0.8)';
        card.style.boxShadow   = '0 0 24px rgba(34,197,94,0.3)';
        setTimeout(() => {
          card.style.borderColor = '';
          card.style.boxShadow   = '';
        }, 600);
      }, 3000 + i * 700);
    });
  }

  // ── Flow Line Animation (SVG paths in agent section) ──
  function initFlowLines() {
    document.querySelectorAll('.flow-path').forEach(path => {
      const len = path.getTotalLength ? path.getTotalLength() : 200;
      path.style.strokeDasharray  = len;
      path.style.strokeDashoffset = len;
      path.style.transition = 'stroke-dashoffset 1.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.flow-path').forEach((path, i) => {
            setTimeout(() => { path.style.strokeDashoffset = '0'; }, i * 300);
          });
        }
      });
    }, { threshold: 0.3 });

    const flowSection = document.getElementById('agents');
    if (flowSection) observer.observe(flowSection);
  }

  // ── Typing Effect ──
  function typeText(el, text, speed = 32, onDone) {
    el.textContent = '';
    let i = 0;
    function tick() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(tick, speed);
      } else if (onDone) onDone();
    }
    tick();
  }

  // ── Number shimmer on hero stats ──
  function initHeroStats() {
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-counter]').forEach(el => {
            if (!el.dataset.counted) {
              el.dataset.counted = '1';
              animateCounter(el);
            }
          });
        }
      });
    }, { threshold: 0.5 });

    const hero = document.getElementById('hero');
    if (hero) statsObs.observe(hero);
  }

  // ── Init All ──
  function init() {
    initScrollReveal();
    initCounters();
    initProgressBars();
    initGauges();
    initBarCharts();
    initRipple();
    initParallax();
    initFlowLines();
    initHeroStats();
    setTimeout(initAgentCards, 1200);
  }

  return { init, typeText, animateCounter };
})();

document.addEventListener('DOMContentLoaded', AgriAnimations.init);
window.AgriAnimations = AgriAnimations;
