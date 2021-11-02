'use strict';

/** Scoping in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = false;
      //Creatin NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer socpe's variable
      output = 'NEW OUTPUT!';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Fabio';
calcAge(1992);
*/

/** Hoisting

// With variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Fabio';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

// With functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/

/** This Keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1988);

const fabio = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
fabio.calcAge();

const matilda = {
  year: 2017,
};
// Object borrowing function
matilda.calcAge = fabio.calcAge;
console.log(matilda);
matilda.calcAge();

const f = fabio.calcAge;
console.log(f);
//there is no owner of this object.
f();
 */

/** Regular functions vs arrow functions

// var firstName = 'Matilda';

const fabio = {
  firstName: 'Fábio',
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const self = this;

    // Solution 1
    // const isMillenial = function () {
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      // console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // In the arrow function, this is from global window, so there is no "firstName" in global escope
  // If we used a regular function, like in calcAge, everything would work normally
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
fabio.greet();
fabio.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 4, 6);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3);
 */

/** Primite vs Objects 
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Fábio',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log(`Friend: `, friend);
console.log(`Me:`, me);
*/

// Primitive types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstname: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
//marriedJessica is not a new object in the HEP, just a reference
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstname: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// Object.assign is a shallow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

// Deep clone of a nested attribute (like an array) is difficult to achieve, needing an external library
