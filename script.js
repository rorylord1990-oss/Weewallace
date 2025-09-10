// script.js — WeeWallace countdown
document.addEventListener("DOMContentLoaded", () => {
  // UTC launch moment (13:00 GMT) – change here only if needed
  const LAUNCH_ISO = "2025-09-17T13:00:00Z"; // Wed, 17 Sept 2025 · 13:00 GMT

  const launch = new Date(LAUNCH_ISO).getTime();

  const getEl = sel => document.getElementById(sel) || document.querySelector(`[data-count="${sel}"]`);
  const els = {
    days:    getEl("days"),
    hours:   getEl("hours"),
    minutes: getEl("minutes"),
    seconds: getEl("seconds"),
    status:  document.getElementById("countdown-status")
  };

  const set = (k, v) => { if (els[k]) els[k].textContent = String(v).padStart(2, "0"); };
  const setAll = v => ["days","hours","minutes","seconds"].forEach(k => set(k, v));

  function tick() {
    const now = Date.now();
    let diff = launch - now;

    if (diff <= 0) {
      setAll(0);
      if (els.status) els.status.textContent = "🚀 Launch is Live!";
      clearInterval(timer);
      return;
    }

    const d = Math.floor(diff / 86400000); diff %= 86400000;
    const h = Math.floor(diff / 3600000);  diff %= 3600000;
    const m = Math.floor(diff / 60000);    diff %= 60000;
    const s = Math.floor(diff / 1000);

    set("days", d);
    set("hours", h);
    set("minutes", m);
    set("seconds", s);
  }

  tick(); // render immediately
  const timer = setInterval(tick, 1000);
});/* Countdown layout */
.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(70px, 1fr));
  gap: 14px;
  align-items: stretch;
}

.count-box {
  text-align: center;
  padding: 18px 12px;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(2px);
}

.count-value {
  font-weight: 800;
  font-size: clamp(28px, 7vw, 44px);
  line-height: 1;
  letter-spacing: 0.5px;
}

.count-label {
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: 2px;
  opacity: 0.85;
}

/* Small screens: 2 columns */
@media (max-width: 480px) {
  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
