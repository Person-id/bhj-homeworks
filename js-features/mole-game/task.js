let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let missedMole = document.getElementById('lost');
let wings = parseInt(deadMole.textContent);
let losts = parseInt(missedMole.textContent);

function checkGame(deadMole, missedMole) {
    console.log(deadMole, missedMole);
    if (deadMole === 10) {
        alert("Победа!");
        location.reload();
    } else if (missedMole === 5) {
        alert("Вы проиграли!");
        location.reload();
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wings += 1;
            deadMole.textContent = wings;
        } else {
            losts += 1;
            missedMole.textContent = losts;
        }
        checkGame(wings, losts);
    }
}