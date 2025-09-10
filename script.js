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
});
