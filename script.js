document.addEventListener('DOMContentLoaded', () => {
    const waterLevelCircle = document.getElementById('water-level-circle');
    const waterPercentage = document.getElementById('water-percentage');
    const increaseWaterButton = document.getElementById('increase-water');
    const decreaseWaterButton = document.getElementById('decrease-water');
    const startWateringButton = document.getElementById('start-watering');
    const stopWateringButton = document.getElementById('stop-watering');

    let waterLevel = 60; // Initial water level percentage

    function updateWaterLevel() {
        waterPercentage.textContent = `${waterLevel}%`;
        const offset = (100 - waterLevel) / 100 * 282.6; // Calculate stroke-dashoffset
        waterLevelCircle.style.strokeDasharray = '282.6';
        waterLevelCircle.style.strokeDashoffset = offset;
    }

    increaseWaterButton.addEventListener('click', () => {
        if (waterLevel < 100) {
            waterLevel += 10;
            updateWaterLevel();
        }
    });

    decreaseWaterButton.addEventListener('click', () => {
        if (waterLevel > 0) {
            waterLevel -= 10;
            updateWaterLevel();
        }
    });

    startWateringButton.addEventListener('click', () => {
        alert('Watering started!');
        // Add functionality to start watering
    });

    stopWateringButton.addEventListener('click', () => {
        alert('Watering stopped!');
        // Add functionality to stop watering
    });

    updateWaterLevel(); // Initial call to set the water level
});