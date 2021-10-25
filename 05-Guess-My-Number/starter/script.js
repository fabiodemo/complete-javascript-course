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
const secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //   console.log('🎉');

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 The number is correct';

    //instead of background-color, we use cammelCase on JavaScript
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = guess;
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

  if (score > 0) document.querySelector('.score').textContent = score;
  else document.querySelector('.message').textContent = '💥 You lost the game';
});
