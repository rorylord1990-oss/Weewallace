// Countdown Timer Script for Wee Wallace

// Set the launch date and time (GMT/UTC)
const launchDate = new Date("September 17, 2025 13:00:00 GMT").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    // If launch time is reached or passed
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "🚀 Launch is Live!";
    return;
  }

  // Time calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update countdown display
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
