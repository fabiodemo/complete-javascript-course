'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//to get field value, we need to use ".value";
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20);
// console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //   console.log('🎉');
  if (score >= 0) {
    //when there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number';
    }

    //when player wins
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent =
        '🎉 The number is correct';

      //instead of background-color, we use cammelCase on JavaScript
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').textContent = guess;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    //when number is too high
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
    }

    //when number is too low
    else {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
    }

    document.querySelector('.score').textContent = score;
  } else document.querySelector('.message').textContent = '💥 You lost the game';
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20);
  // console.log(secretNumber);
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing....';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
