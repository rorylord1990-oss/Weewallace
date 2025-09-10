// ===== Countdown (locked to GMT) =====
const target = new Date("Sep 10, 2025 22:00:00 GMT").getTime();
const els = {
  d: document.getElementById("days"),
  h: document.getElementById("hours"),
  m: document.getElementById("minutes"),
  s: document.getElementById("seconds"),
};
const tick = () => {
  const now = Date.now();
  const dist = target - now;

  if (dist <= 0) {
    clearInterval(timer);
    const c = document.querySelector("#countdown");
    c.innerHTML = "<div class='live'>🚀 Launch is Live!</div>";
    return;
  }

  const d = Math.floor(dist / (1000 * 60 * 60 * 24));
  const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((dist % (1000 * 60)) / 1000);

  els.d.textContent = d;
  els.h.textContent = h.toString().padStart(2,"0");
  els.m.textContent = m.toString().padStart(2,"0");
  els.s.textContent = s.toString().padStart(2,"0");
};
const timer = setInterval(tick, 1000);
tick();

// ===== Reveal on scroll (countdown + buttons) =====
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold: 0.15});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));