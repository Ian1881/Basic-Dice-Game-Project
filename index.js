let dice1N;
let dice2N;
let player1 = document.querySelector('#player1-input');
let player2 = document.querySelector('#player2-input');
let name1;
let name2;
const button1 = document.querySelector('#myButton1');
const button2 = document.querySelector('#myButton2');
let diceImg1 = document.querySelector('.img1');
let diceImg2 = document.querySelector('.img2');
let score1 = 0;
let score2 = 0;
let playHeader = document.querySelector('.play-text');

const game = function () {
  if (!name1 || !name2) {
    playHeader.textContent = 'Please enter both names first to play! 🎲';
    return;
  }
  dice1N = Math.floor(Math.random() * 6 + 1);
  dice2N = Math.floor(Math.random() * 6 + 1);
  diceImg1.setAttribute('src', `images/dice${dice1N}.png`);
  diceImg2.setAttribute('src', `images/dice${dice2N}.png`);
  if (dice1N > dice2N) {
    score1++;
    document.querySelector('.player1-score').textContent = score1;
    playHeader.textContent = `${name1} Wins!`;
  } else if (dice1N < dice2N) {
    score2++;
    document.querySelector('.player2-score').textContent = score2;
    playHeader.textContent = `${name2} Wins!`;
  } else playHeader.textContent = `It's a Draw`;
};

const gameRound = document.querySelector('.btn');
gameRound.addEventListener('click', game);

button1.addEventListener('click', function () {
  name1 = player1.value;
  document.querySelector('.player1-name').textContent = player1.value;
  document.querySelector('.score1').textContent = name1;
  player1.value = '';
});
button2.addEventListener('click', function () {
  name2 = player2.value;
  document.querySelector('.player2-name').textContent = player2.value;
  document.querySelector('.score2').textContent = name2;
  player2.value = '';
});
