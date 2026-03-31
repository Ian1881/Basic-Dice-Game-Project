
let playNowButton = document.querySelector("button");

const player1 = prompt("Player 1, please enter your name:");
const player2 = prompt("Player 2, please enter your name:");

document.querySelector(".player1-name").textContent = player1;
document.querySelector(".player2-name").textContent = player2;

playNowButton.addEventListener("click", gameRound);
function gameRound() {
let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

let diceImage1 = document.querySelectorAll("img")[0]; 
let diceImage2 = document.querySelectorAll("img")[1];

diceImage1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
diceImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) { 
    document.querySelector("h1").innerHTML = player1 + "  Wins!"; 
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + "  Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}

}






