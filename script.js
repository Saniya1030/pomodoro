let timer;
let time = 25 * 60;
let isRunning = false;
let isBreak = false;
let pomoCount = 0;

const ding = document.getElementById('dingSound');

function updateTimerDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function updatePomoCount() {
  document.getElementById('pomo-count').textContent = pomoCount;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      isBreak = !isBreak;
      ding.play();
      if (isBreak) {
        pomoCount++;
        updatePomoCount();
        alert("Work session complete! Time for a 5 min break 🌿");
        time = 5 * 60;
      } else {
        alert("Break over! Let's get back to focus mode 📚");
        time = 25 * 60;
      }
      updateTimerDisplay();
      startTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  isBreak = false;
  time = 25 * 60;
  updateTimerDisplay();
}

updateTimerDisplay();
updatePomoCount();
