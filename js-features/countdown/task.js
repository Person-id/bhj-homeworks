const countdownTimer = function() {
    const getElement = document.getElementById('timer');
    
    if (getElement.textContent > 0) {
         getElement.textContent -= 1;
    } else if (getElement.textContent === '0') {
         alert('Вы победили в конкурсе!');
         clearInterval(timerData);
    }
}

const timerData = setInterval(countdownTimer, 1000);