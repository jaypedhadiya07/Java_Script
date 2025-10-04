const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock(); // call once immediately so it doesn't start blank