// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('countdownForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Get the user input date and time
        const eventDateInput = document.getElementById('eventDate').value;
        if (eventDateInput) {
            const countDownDate = new Date(eventDateInput).getTime();
            startCountdown(countDownDate);
        }
    });

    function startCountdown(countDownDate) {
        // Clear any existing countdown intervals
        clearInterval(window.countdownInterval);

        // Update the countdown every 1 second
        window.countdownInterval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            
            // Check if the countdown has expired
            if (distance <= 0) {
                clearInterval(window.countdownInterval);
                document.getElementById("timer").innerHTML = "EXPIRED";
                return;
            }
            
            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result in the elements with id="days", "hours", "minutes", "seconds"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }, 1000);
    }
});
