/**LECTURE: Functions
1.2.Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// const describeFinland = describeCountry("Finland", 6, "Helsinki");
// const describeBrasil = describeCountry("Brasil", 212.6, "Brasília");
// const describeUruguay = describeCountry("Uruguay", 3.474, "Montevideo");

// console.log(describeFinland, describeBrasil, describeUruguay);

/**LECTURE: Function Declarations vs. Expressions
1.2.3.4.The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
function percentageOfWorld1(population) {
  // return (population / 79);
  return (population / 7900) * 100;
}

// const percentageOfWorld2 = function (population) {
//   return population / 79;
//   //   return (population / 7900) * 100;
// };

// console.log(
//   percentageOfWorld1(6),
//   percentageOfWorld1(212.6),
//   percentageOfWorld1(3.474)
// );

// const percentageFinland = percentageOfWorld2(6);
// const percentageBrasil = percentageOfWorld2(212.6);
// const percentageUruguay = percentageOfWorld2(3.474);

// console.log(percentageFinland, percentageBrasil, percentageUruguay);

/**LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/
// const percentageOfWorld3 = (population) => population / 79;

// console.log(
//   percentageOfWorld3(6),
//   percentageOfWorld3(212.6),
//   percentageOfWorld3(3.474)
// );

/**LECTURE: Functions Calling Other Functions
1.2.3.Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
Call 'describePopulation' with data for 3 countries of your choice
*/

// const describePopulation = (country, population) =>
//   `${country} has ${population} million people which is about ${percentageOfWorld3(
//     population
//   )}% of the world.`;

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("USA", 332));
/**LECTURE: Introduction to Arrays
1.2.3.Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
Log to the console whether the array has 4 elements or not (true or false)
Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

// const populations = [45.38, 7.133, 10.31, 25.69];
// console.log(
//   `The array has 4 elements? ${populations.length === 4 ? true : false}`
// );

// percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

/**LECTURE: Basic Array Operations (Methods)
1.2.3.4.5.Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

// const neighbours = ["Peru", "Argentina", "Uruguay"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes === "Germany")
//   console.log("Probably not a central European country :D");
// neighbours[neighbours.indexOf("Argentina")] = "Republic of Argentina";
// console.log(neighbours);

/**LECTURE: Introduction to Objects
1.Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/
// const myCountry = {
//   country: "Brasil",
//   capital: "Brasília",
//   language: "portuguese",
//   population: 212.6,
//   neighbours: ["Peru", "Argentina", "Uruguay"],
// };

// console.log(myCountry);

/**LECTURE: Dot vs. Bracket Notation
1.2.Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
// myCountry["population"] -= 2;
// console.log(
//   `${myCountry["country"]} has ${myCountry["population"]} million ${myCountry["language"]}-speaking people, ${myCountry["neighbours"].length} neighbouring countries and a capital called ${myCountry["capital"]}`
// );

/**LECTURE: Object Methods
1.2.3.Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
Call the 'describe' method
Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/

// const myCountry = {
//   country: "Brasil",
//   capital: "Brasília",
//   language: "portuguese",
//   population: 212.6,
//   neighbours: ["Peru", "Argentina", "Uruguay"],

//   describe: function () {
//     console.log(
//       `In Describe method: ${this["country"]} has ${this["population"]} million ${this["language"]}-speaking people, ${this["neighbours"].length} neighbouring countries and a capital called ${this["capital"]}`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = this["neighbours"].length === 0 ? true : false;
//     return this.isIsland;
//   },
// };

// console.log(myCountry);
// myCountry.describe();
// console.log(`${myCountry["country"]} is an island? ${myCountry.checkIsland()}`);

/**LECTURE: Iteration: The for Loop
1.There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/
// for (let i = 1; i <= 50; i++) console.log(`Voter number ${i} is currently voting...`);

/**LECTURE: Looping Arrays, Breaking and Continuing
1.2.3.Let's bring back the 'populations' array from a previous assignment
Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/
const populations = [45.38, 7.133, 10.31, 25.69];
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

/**LECTURE: Looping Backwards and Loops in Loops
1.2.3.Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/
listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

/**LECTURE: The while Loop
1.2.Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
Reflect on what solution you like better for this task: the for loop or the while
loop?
 */

const percentages3 = [];
let i = 0;

while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
