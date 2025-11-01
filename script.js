
// Countdown to wedding date (30 May 2025). If date is past, show message.
(function(){
  // Set target date (YYYY, M-1, D, H, M, S)
  const target = new Date(2025, 4, 30, 12, 0, 0); // May is month 4 (0-based)
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const cdRoot = document.getElementById('countdown');

  function update(){
    const now = new Date();
    let diff = target - now;
    if (diff <= 0){
      cdRoot.innerHTML = '<p class="lead">Il matrimonio è già passato (30 maggio 2025).</p>';
      return;
    }
    const s = Math.floor(diff / 1000);
    const days = Math.floor(s / 86400);
    const hours = Math.floor((s % 86400) / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;
    daysEl.textContent = String(days).padStart(2,'0');
    hoursEl.textContent = String(hours).padStart(2,'0');
    minutesEl.textContent = String(minutes).padStart(2,'0');
    secondsEl.textContent = String(seconds).padStart(2,'0');
  }

  update();
  setInterval(update, 1000);
})();
