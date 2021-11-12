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
 */
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
