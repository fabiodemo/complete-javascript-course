'use strict';

// Selecting Elements:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//dot is only for selecting classes, when selecting by id, we can do it using #
const score0El = document.querySelector('#score--0');
//getElementById is supposed to be a little faster than querySelector
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0 , 0];
let currentScore = 0;
let ActivePlayer = 0;
let playing = true;

const switchPlayer = function(){
  document.getElementById(`current--${ActivePlayer}`).textContent = 0;
  currentScore = 0;
  // Switch to Next player
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  //toggle will add the class if isn't there, OR remove it if alredy is there
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if(playing){
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to currenct score
      currentScore += dice;
      document.getElementById(`current--${ActivePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function(){
  if(playing){
    // Add current score to active player's score
    score[ActivePlayer] += currentScore;
    document.getElementById(`score--${ActivePlayer}`).textContent = score[ActivePlayer];

    // Check if player's score is >=100, 
    // If yes - finishes the game
    if(score[ActivePlayer] >= 10){
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${ActivePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${ActivePlayer}`).classList.remove('player--active');
    } else{
      // Else - Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){

});