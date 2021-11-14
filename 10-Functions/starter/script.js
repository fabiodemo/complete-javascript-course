'use strict';

/** Default Parameters 

const bookings = [];

// Default parameters can contain any expression
// Be careful with the order, if numPassengers is specified before price it will cause a bug
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
// Skip empty parameter
createBooking('LH123', undefined, 1000);
*/

/** How passing arguments works: Value vs Reference
const flight = 'LH234';
const fabio = {
  name: 'Fabio Demo',
  passport: 2382734874,
};

const checkIn = function (flightNum, passenger) {
  //do not change of parameters inside function, it will not be changed outside
  flightNum = 'LH999';
  // When changing objects inside a function, it will change the main object
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2382734874) alert('Check in');
  else alert('Wrong passport!');
};
// checkIn(flight, fabio);
// console.log(flight);
// console.log(fabio);

// // It is like creating a copy, same as:
// const flightNum = flight;
// const passenger = fabio;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random(+1000000000));
};

newPassport(fabio);
checkIn(flight, fabio);
*/

/** First-Class and Higher-Order Functions
 * There is no first-class functions in practice, is just a concept;
 * There are Higher-Order functions in practice
 
// First-Class
const dd = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};
const greet = () => console.log('Hey Fabio');
BtnClose.addEventListener('click', greet);
counter.inc.bind(someObject);

// High-order
// Function that receives another funciton or function that returns a new function. Like addEventListener
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
*/

/** Functions Accepting Callback Functions
 * Callback functions are easier to use/read and are really helpful
 * Callback functions allow to call abstraction



const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  //function haves properties
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🖐️');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/** Functions Returning Functions 

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet('Hey');
// greeterHey('Fabio');
// greeterHey('Steven');

greet('Hello')('Fabio');

// My version
// const greetArrow = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi, Arrow')('Fabio');
*/

/** The Call and Apply Methods 

// Call Method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // Or book: function(){}
  book(flightNum, name) {
    console.log(
      `${name}, booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Fábio Demo');
lufthansa.book(666, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'Ew',
  bookings: [],
};

// It is not a method anymore, it is just a function. It will pass undefined to this keywords
const book = lufthansa.book;

//Just not work
// book(23, 'Sarah Williams')

//Manipulating the "this" keyword using the "call" method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 23, 'Connor Williams');
console.log(lufthansa);

//All objects using the call, must have the same structure and properties names than the original/initial object
const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method -- apply doesn't receive a list of arguments after the "this" keyword, and it will take an array of arguments

const flightData = [583, 'Sheldon Cooper'];
// Both are the same
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
*/

/** The Bind Method 

// We used book.call(eurowings, 23, 'Sarah Williams');
//Now we use
const bookLU = book.bind(lufthansa);
const bookLH = book.bind(eurowings);
const bookLX = book.bind(swiss);

bookLH(23, 'Steven Williams');
console.log(lufthansa.bookings);
// Te code above entered on the array of bookings inside lufthansa.

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jonas Kahnwald');
bookEw23('Martha Nielsen');

// Using objects together with event listeners
lufthansa.planes = 300;

// This keyword is setted dynamically
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application - parts of the applicaiton of the original function are alredy applied/set. Below the 23 is alredy specified.
// The order of the arguments is VERY IMPORTANT
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Preset the rate for every value we pass to it
const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value *0.23; // Equals to using this

console.log(addVAT(100));
console.log(addVAT(23));

// This is the same as the function above using the bind method
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const addTaxRateArrow = rate => value => value + value * rate;
const addVATArrow = addTaxRate(0.23);
console.log(addVATArrow(100));
console.log(addVATArrow(23));
*/

/** IIFE - Imeddiatly Invoked Function Expressions 

const runOnce = function () {
  console.log('this will never run again');
}
runOnce();

(function() {
  console.log('this will never run again');
})();

(() => console.log('this will never run again'))();

// avoid using var
{
  const isPrivate = 23;
  var notPrivate = 43;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/** Closures 
 * Is the closed-over variable environment of theexecution context in which a function was created, even after that execution context is gone OR LESS FORMAL -> gives a function access to all variables of its parente function, even after that parent function has returned.
 * not a feature that we explicity use
 * happens automatically in certain situations

const secureBooking = function() {
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
*/

/** More closure exples */
let f;

const g = function(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function(){
    console.log(b * 2);
  }
}

g();
f();

// Re-assignin f function
h();
f();
// console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n/3;

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

// Timer of one second 
// setTimeout(function () {
//   console.log(`TIMER`);
// }, 1000);

// Closure have priority over scope chain
// const perGroup = 1000;
boardPassengers(100, 3);