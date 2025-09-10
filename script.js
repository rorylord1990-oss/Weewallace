/* ===== £WALLACE Countdown =====
   Launch: Wed 17 Sept 2025 — 13:00 GMT (9 AM EST / 6 AM PST)
   Edit just the LAUNCH_UTC if you ever change the time.
================================= */

const LAUNCH_UTC = "2025-09-17T13:00:00Z"; // <-- UTC ISO format
const launchMs = Date.parse(LAUNCH_UTC);

const dEl = document.getElementById("dd");
const hEl = document.getElementById("hh");
const mEl = document.getElementById("mm");
const sEl = document.getElementById("ss");

function pad(n){ return n < 10 ? "0" + n : "" + n; }

function tick() {
  const now = Date.now();
  let diff = launchMs - now;

  if (diff <= 0) {
    // If launch time passed
    dEl.textContent = "00";
    hEl.textContent = "00";
    mEl.textContent = "00";
    sEl.textContent = "00";
    const status = document.getElementById("countdown-status");
    if (status) status.textContent = "We’re live.";
    clearInterval(timer);
    return;
  }

  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;

  dEl.textContent = pad(days);
  hEl.textContent = pad(hours);
  mEl.textContent = pad(mins);
  sEl.textContent = pad(secs);
}

const timer = setInterval(tick, 1000);
tick(); // initial paint
