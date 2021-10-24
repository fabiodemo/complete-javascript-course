/**
 *
 'use strict';
//Activating Strict Mode above

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive :D');

//reserved word
//const interface = 'Audio';
// const private = 643;
// const if = 23;
 */

/** FUNCTIONS
 *

function logger()
{
    console.log('My name is Fábio');
}

// calling/ running / invoking function
logger();
logger();
logger();

function fruitProcessor (apples, oranges)
{
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const juice = fruitProcessor(3,4);
console.log(juice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice)

// console.log(fruitProcessor(5,4));
 */

/** Function Declarations vs. Expressions
 *  Functions declaractions can be called before initialization
 * Expressions cannot be called before the declaration.

const age1 = calAge1(2010);

function calAge1(birthYear)
{
    return (2037 - birthYear);
}


console.log(age1);

//we will need the expression declaration in the future.
const calcAge2 = function (birthYear)
{
    return (2037 - birthYear);
}
const age2 = calcAge2(1991);

console.log(age1, age2);
//functions are just value, and then we can store in a variable;
 */

/** Arrow Functions
* One line function = Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991));
console.log(yearsUntilRetirement(1991, 'Bob'));
console.log(yearsUntilRetirement(2000, 'Fábio'));
*/

/** Functions calling other functions
 *

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} apples pieces and ${orangesPieces} oranges pieces`
}

console.log(fruitProcessor(2,3));
 */

/** Reviewing Functions
 *

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

 const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return (retirement > 0) ? retirement : `${firstName} is alredy retired!`;
    //return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1998, 'Fábio'));
console.log(yearsUntilRetirement(1950, 'Mark'));
 */

/** Introduction to Arrays
 *


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1])

//contradiction - we changed a "const" variable value. Only primitive values are immutable. Array isn't a primitive.
friends[2] = 'Jay';
console.log(friends);
//we cannot replace the entire array;
//friends = ['Bob', 'Alice'];

const firstname = 'Fabio';
const fabio = [firstname, 'Demo', 2038 - 1998, 'developer', friends];
console.log(fabio);
console.log(fabio.length);

//Exercise
const calcAge = function (birthYear)
{
    return (2037 - birthYear);
}
const years = [1990, 1968, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);  */

/**  Basic Array Operations (Methods)
 *

//Push is method that attach a new data to the array
const friends = ['Michael', 'Steven', 'Peter'];
//Store the lenght of the function
const newLenght = friends.push('Jay');

console.log(friends);
console.log(newLenght);

//Add a new item to the array right at the beginning
friends.unshift('John');
console.log(friends);

//Remove last element of array
friends.pop(); // remove Jay
//save the popped item in a variable
const popped = friends.pop(); // Remove Peter
console.log(friends);
console.log(popped);

//Remove first element of the array
friends.shift();
console.log(friends); // Remove John friends[0]

console.log(friends.indexOf('Steven'));
//When we don't have the element in the array, the index returned is -1
console.log(friends.indexOf('Bob'));

//Strict equality to check if element exist in the array, return a boolean
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
//it would not work in this case, because of strict equality and don't do type coercion
friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter!');
}


const fabioArray = [
    "Fabio",
    "Demo",
    2037 - 1991,
    "Developer",
    ["Michael", "Peter", "Steven"],
];

//this object (fabio) has 5 properties (firstname,lastname, etc..)
//object literal syntax
const fabio = {
    firstName: "Fábio",
    lastName: "Demo",
    age: 2037 - 1991,
    job: "Developer",
    friends: ["Michael", "Peter", "Steven"],
};

//get object property
console.log(fabio.lastName);
//in this case we can compute from an operation/expression
console.log(fabio["lastName"]);

const nameKey = "Name";
console.log(fabio["first" + nameKey]);
console.log(fabio["last" + nameKey]);

//same thing will not work with dot operation
//console.log(fabio.'last' + nameKey);

//if we get information we would show form user interface, we can use this:
const interestedIn = prompt(
    "What do you want to know about Fabio? Choose between firstname, lastname, age, job and friends"
);
console.log(interestedIn);
//console.log(fabio.interestedIn); //we don't have a interstedIn property

if (fabio[interestedIn]) {
    console.log(fabio[interestedIn]);
} else {
    console.log(
        "Wrong request! Choose between firstname, lastname, age, job and friends"
    );
}

fabio.location = "Brasil";
fabio["github"] = "fabiodemo";
console.log(fabio);

//challenge:
//Write string in the format: "Jonas has 3 friends and his best friend is caleld Michael (first friend in array"

console.log(
    `${fabio.firstName} has ${fabio.friends.length} friends and his best friend is called ${fabio.friends[0]}`
);

 */

/** Object Methods
 *

const fabio = {
    firstName: "Fábio",
    lastName: "Demo",
    birthYear: 1998,
    job: "Developer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    //this is equal to the object calling the method
    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    //     // return 2037 - this.birthYear; // this would violate the don't repeat yoursellf principle
    //

    //Store as a new property
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license!`;
    }
};


console.log(fabio.calcAge());
// console.log(fabio.calcAge(1982));
// console.log(fabio['calcAge'](1998));
console.log(fabio.age);
console.log(fabio.age);
console.log(fabio.age);
console.log(fabio.age);

// "Jonas is a 47-year old teacher, and he has a driver's license"
console.log(fabio.getSummary());
 */

/** Iteration: the foor loop
 *
 */
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5'); // and so on...

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting wieghts repetition ${i}`);
// }

/** Looping Arrays, Breaking and Continuing
 *

const fabioArray = [
    "Fabio",
    "Demo",
    2037 - 1991,
    "Developer",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

//Fabio[5] doesnt exist

for (let i = 0; i < fabioArray.length; i++) {
    //reading fabio array
    console.log(fabioArray[i], typeof (fabioArray[i]));

    //filling types array
    // types[i] = typeof (fabioArray[i]);
    types.push(typeof (fabioArray[i]));
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2037 - years[i]);
}
console.log(age);

for (let i = 0; i < fabioArray.length; i++) {
    if (typeof (fabioArray[i]) !== 'string') continue;
    console.log(fabioArray[i], typeof (fabioArray[i]));
}

for (let i = 0; i < fabioArray.length; i++) {
    if (typeof (fabioArray[i]) === 'number') break;
    console.log(fabioArray[i], typeof (fabioArray[i]));
}
*/

/** Looping backwards in loops
const fabio = [
    "Fabio",
    "Demo",
    2037 - 1991,
    "Developer",
    ["Michael", "Peter", "Steven"],
    true
];

for (let i = fabio.length - 1; i >= 0; i--) {
    console.log(i, fabio[i], typeof (fabio[i]));
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

/** While loop
 *
 */

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting wieghts repetition ${i}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting wieghts repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end");
}