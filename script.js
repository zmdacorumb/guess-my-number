'use strict';

let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

//隨機數字
let num = Math.round(Math.random() * 20);

// const button = document.querySelector('.check');
// const disableButton = () => {
//   console.log('va');
//   button.disabled = true;
// };

// button.addEventListener('click', disableButton);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const dqt = document.querySelector('.message').textContent;
  if (!guess) {
    displayMessage('No Number');
    // document.querySelector('.message').textContent = 'No Number';
  } else if (guess === num) {
    displayMessage('🎉 Good job');
    // document.querySelector('.message').textContent = '🎉 Good job';
    displayScore(score - 1);
    //document.querySelector('.score').textContent = score - 1;
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
    if (score > highscore)
      document.querySelector('.highscore').textContent = score - 1;
  } else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? 'Too height' : 'Too low');
      //document.querySelector('.message').textContent =
      //guess > num ? 'Too height' : 'Too low';
      score--;
      displayScore(score);
      //document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game !');
      //document.querySelector('.message').textContent = '💥You lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// 按下again鈕
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayScore(score);
  //   document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  num = Math.round(Math.random() * 20);
});
