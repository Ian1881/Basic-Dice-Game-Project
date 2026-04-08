document.getElementById("myButton1").addEventListener("click", function () {
    const player1Name = document.getElementById("player1-input").value;
    document.querySelector(".player1-name").textContent = player1Name;
})
document.getElementById("myButton2").addEventListener("click", function () {
    const player2Name = document.getElementById("player2-input").value;
    document.querySelector(".player2-name").textContent = player2Name;
})

let diceRoll = document.querySelector(".btn");

diceRoll.addEventListener("click", () => {
    const player1Name = document.getElementById("player1-input").value || "Player 1";
    const player2Name = document.getElementById("player2-input").value || "Player 2";
    let diceImage1 = Math.floor(Math.random() * 6) + 1;
    let diceImage2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", 'images/dice' + diceImage1 + '.png');
    document.querySelector(".img2").setAttribute("src", 'images/dice' + diceImage2 + '.png');

    if (diceImage1 > diceImage2) {
        document.querySelector("h1").textContent = player1Name + ' Wins!';
    } else if (diceImage1 < diceImage2) {
        document.querySelector("h1").textContent = player2Name + ' Wins!';
    } else {
        document.querySelector("h1").textContent = 'It\'s a Draw!';
    }
})
