/* ===== Countdown (GMT-locked) =====
   Launch: Wed, 17 Sept 2025 13:00:00 GMT
   Change only the numbers below if you move the launch date/time.
*/
const launchUTC = Date.UTC(2025, 8, 17, 13, 0, 0); // Note: month is 0-based (8 = September)

const elDays    = document.getElementById('days');
const elHours   = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');

function pad(n) { return String(n).padStart(2, '0'); }

function updateCountdown() {
  const nowUTC = Date.now();              // milliseconds since epoch (UTC)
  let diff = Math.max(0, launchUTC - nowUTC);

  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  elDays.textContent    = pad(days);
  elHours.textContent   = pad(hours);
  elMinutes.textContent = pad(mins);
  elSeconds.textContent = pad(secs);
}

updateCountdown();
const timer = setInterval(() => {
  updateCountdown();
  if (Date.now() >= launchUTC) clearInterval(timer);
}, 1000);
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
