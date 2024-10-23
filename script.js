document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let timer;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let isRunning = false;

    function updateDisplay() {
        let displayHours = hours < 10 ? `0${hours}` : hours;
        let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
        let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        display.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    }

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }

    document.getElementById("startBtn").addEventListener("click", () => {
        if (!isRunning) {
            isRunning = true;
            startTimer();
            document.getElementById("startBtn").disabled = true;
            document.getElementById("stopBtn").disabled = false;
            document.getElementById("resetBtn").disabled = false;
            document.getElementById("lapBtn").disabled = false;
        }
    });

    document.getElementById("stopBtn").addEventListener("click", () => {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startBtn").disabled = false;
        document.getElementById("stopBtn").disabled = true;
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
        clearInterval(timer);
        isRunning = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateDisplay();
        document.getElementById("laps").innerHTML = "";
        document.getElementById("startBtn").disabled = false;
        document.getElementById("stopBtn").disabled = true;
        document.getElementById("resetBtn").disabled = true;
        document.getElementById("lapBtn").disabled = true;
    });

    document.getElementById("lapBtn").addEventListener("click", () => {
        const lapItem = document.createElement("li");
        lapItem.textContent = display.textContent;
        document.getElementById("laps").appendChild(lapItem);
    });
});
