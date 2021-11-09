'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/** Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your1.2.3.4.5.6.7.tasks:
Create one player array for each team (variables 'players1' and
'players2')
The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
Create an array 'allPlayers' containing all players of both teams (22
players)
During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
 * 

const [players1, players2] = game.players;
console.log(players1, players2);

const [[gk], ...fieldPlayers] = players1;
console.log('Goalkeeper: ', gk);
console.log('Other players: ', fieldPlayers);
// console.log(game.players[0], game.players[1]);

const allPlayers = [...players1, ...players2];
console.log('All players: ', allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored!`);
  for (let i = 0; i < players.length; i++)
    console.log(`Goal from: ${players[i]} `);
};
printGoals(...game.scored);

//team1 < team2
team1 < team2 && console.log('Team 1 is most likely to win');

//team2 < team1
team1 > team2 && console.log('Team 2 is most likely to win');

 */

/** Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your1.2.3.4.tasks:
Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀 

// In array we can use entries(), but in objects we should use object.
for (const [i, goal] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${goal}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(`${(average /= odds.length)}`);

// for (const [key, value] of Object.entries(game.odds)) {
//   // console.log(key + ' ' + value);
//   game[key] && console.log(`Odd of victory ${game[key]}: ${value}`);
//   game[key] ?? console.log(`Odd of draw: ${game.odds.x}`);
// }

Object.entries(game.odds).forEach(([team, odd]) => {
  // console.log(key + ' ' + value);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
});

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

for (const [player, goals] of Object.entries(scorers)) {
  console.log(`${player} scored ${goals} goals!`);
}
*/

/** Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
⚽
[FIRST HALF] 17:
 GOAL
GOOD LUCK 😀
 * 


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//console.log([...gameEvents]);
// console.log(gameEvents.entries());
//console.log([...gameEvents.keys()]);
// console.log([...gameEvents.values()]);
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on average, every ${(90/gameEvents.size)} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${(time/gameEvents.size)} minutes`);

//const test = [...gameEvents.keys()];
//console.log(test);
//console.log(test.length);

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? `FIRST` : `SECOND`;
  // const eventStr = key <= 45 ? `[FIRST HALF] ${key}: ${value}` : `[SECOND HALF] ${key}: ${value}`;
  //console.log(eventStr);
  console.log(`[${half} HALF] ${key}: ${value}` )
}
 */

/** Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
  underscore_case
    first_name
  Some_Variable
    calculate_AGE
  delayed_departure
Should produce this output (5 separate console.logunderscoreCase outputs):
    firstName
    someVariable
    calculateAge
    delayedDeparture
    ✅
    ✅✅
    ✅✅✅
    ✅✅✅✅
    ✅✅✅✅✅

Hints:
* Remember which character defines a new line in the textarea 😉
The solution only needs to work for a variable made out of 2 words, like a_b
* Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
* This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
 * 
 */
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value.toLowerCase();
  const splittedtext = text.split(`\n`);
  // console.log(splittedtext);

  for (const [i, t] of splittedtext.entries()) {
    let splittedT = t.trim().split('_');
    // console.log(splittedT[1][0].toUpperCase() + splittedT[1].slice(1));
    // console.log(splittedT[0] + splittedT[1]);
    console.log(
      `${
        splittedT[0] + (splittedT[1][0].toUpperCase() + splittedT[1].slice(1))
      } ${'✅'.repeat(i + 1)}`
    );
  }
});
