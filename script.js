let waterLevel = 60;

document.getElementById('startBtn').addEventListener('click', () => {
  updateWaterLevel(5); // Simulate increase in water level
  updateAIInsights("Watering started!");
});

document.getElementById('stopBtn').addEventListener('click', () => {
  updateAIInsights("Watering stopped!");
});

document.getElementById('gestureBtn').addEventListener('click', () => {
  alert("Gesture control activated!");
});

document.getElementById('voiceBtn').addEventListener('click', () => {
  alert("Voice control activated!");
});

function updateWaterLevel(amount) {
  waterLevel = Math.min(100, waterLevel + amount);
  const progressBar = document.getElementById('progress');
  const waterLevelText = document.getElementById('water-level');
  progressBar.style.width = `${waterLevel}%`;
  waterLevelText.textContent = `${waterLevel}%`;
}

function updateAIInsights(message) {
  document.getElementById('ai-status').textContent = message;
}
