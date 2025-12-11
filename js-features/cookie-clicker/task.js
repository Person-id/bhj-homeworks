
    const startCounterValue = document.getElementById('clicker__counter');
    const initialWidthImage = document.getElementById('cookie');

    initialWidthImage.onclick = function() {
        let counterValueMagnifier = parseInt(startCounterValue.textContent);
        startCounterValue.textContent = counterValueMagnifier + 1;
       
        if(counterValueMagnifier % 2 === 0) {
            initialWidthImage.width = 250;
        } else initialWidthImage.width = 200;
    }
    


