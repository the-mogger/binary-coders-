document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById('start-watering');
    const stopButton = document.getElementById('stop-watering');
    const waterLevelBar = document.getElementById('water-level');
    const waterPercentage = document.getElementById('water-percentage');
    const plantHealth = document.getElementById('plant-health');

    let watering = false;
    let currentLevel = 60; // Initial water level

    const updateWaterLevel = (change) => {
        currentLevel = Math.min(100, Math.max(0, currentLevel + change));
        waterLevelBar.style.width = currentLevel + '%';
        waterPercentage.textContent = currentLevel + '%';
    };

    startButton.addEventListener('click', () => {
        if (!watering) {
            watering = true;
            plantHealth.textContent = "Watering in progress...";
            const interval = setInterval(() => {
                if (currentLevel < 100) {
                    updateWaterLevel(5); // Simulate filling the tank
                } else {
                    clearInterval(interval);
                    plantHealth.textContent = "Watering complete!";
                }
            }, 1000);
        }
    });

    stopButton.addEventListener('click', () => {
        watering = false;
        plantHealth.textContent = "Watering stopped.";
    });

    // Simulate AI insights updates
    setInterval(() => {
        const moistureLevels = ['Good', 'Low', 'High'];
        const sunlightLevels = ['Adequate', 'Low', 'High'];
        const temperatureStatuses = ['Optimal', 'Too Hot', 'Too Cold'];

        document.getElementById('moisture-level').textContent = moistureLevels[Math.floor(Math.random() * moistureLevels.length)];
        document.getElementById('sunlight-level').textContent = sunlightLevels[Math.floor(Math.random() * sunlightLevels.length)];
        document.getElementById('temperature-status').textContent = temperatureStatuses[Math.floor(Math.random() * temperatureStatuses.length)];
    }, 5000); // Update every 5 seconds
});
