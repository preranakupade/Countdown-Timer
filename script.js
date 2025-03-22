let timerInterval;

function startCountdown(startDate, endDate) {
    clearInterval(timerInterval);

    function updateTimer() {
        const now = new Date().getTime();

        if (now < startDate) {
            document.querySelector(".timer").innerHTML = "<h2>Countdown not started yet!</h2>";
            return;
        }

        if (now >= endDate) {
            document.querySelector(".timer").innerHTML = "<h2>Event Ended!</h2>";
            return;
        }

        const remainingTime = endDate - now;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        const milliseconds = Math.floor(remainingTime % 1000);

        document.getElementById("days").innerHTML = `${days}<span>Days</span>`;
        document.getElementById("hours").innerHTML = `${hours}<span>Hours</span>`;
        document.getElementById("minutes").innerHTML = `${minutes}<span>Minutes</span>`;
        document.getElementById("seconds").innerHTML = `${seconds}<span>Seconds</span>`;
        document.getElementById("milliseconds").innerHTML = `${milliseconds}<span>Milliseconds</span>`;
    }

    timerInterval = setInterval(updateTimer, 10);
    updateTimer();
}

document.getElementById("startCountdown").addEventListener("click", function() {
    const eventTitle = document.getElementById("eventTitleInput").value;
    const startDate = new Date(document.getElementById("startDate").value).getTime();
    const endDate = new Date(document.getElementById("endDate").value).getTime();

    if (!eventTitle || isNaN(startDate) || isNaN(endDate) || startDate >= endDate) {
        alert("Please enter a valid event title and dates.");
        return;
    }

    document.getElementById("eventTitle").textContent = `Countdown Timer for ${eventTitle}`;
    startCountdown(startDate, endDate);
});

document.getElementById("bgColorPicker").addEventListener("input", function() {
    document.body.style.background = this.value;
});
document.getElementById("textColorPicker").addEventListener("input", function() {
    document.querySelector(".container").style.color = this.value;
});
document.getElementById("fontSizePicker").addEventListener("input", function() {
    document.querySelectorAll(".time-box").forEach(el => {
        el.style.fontSize = this.value + "px";
    });

});


document.getElementById("resetCountdown").addEventListener("click", function() {
    clearInterval(timerInterval);
    
    document.getElementById("eventTitleInput").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("eventTitle").textContent = "Countdown Timer";
    
    document.getElementById("days").innerHTML = `00<span>Days</span>`;
    document.getElementById("hours").innerHTML = `00<span>Hours</span>`;
    document.getElementById("minutes").innerHTML = `00<span>Minutes</span>`;
    document.getElementById("seconds").innerHTML = `00<span>Seconds</span>`;
    document.getElementById("milliseconds").innerHTML = `000<span>Milliseconds</span>`;
    
    document.body.style.background = "linear-gradient(135deg, #1a1a2e, #16213e)";
    document.querySelector(".container").style.color = "#fff";
    document.querySelectorAll(".time-box").forEach(el => {
        el.style.fontSize = "24px";
    });
});



