'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[mainIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/** The Nuliish Coalescing Operator (??) 
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null or undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/** Short circuiting  - Use ANY data type, return any data type
console.log('-------- OR --------');
console.log(3 || 'Fabio');
console.log('' || 'Fabio');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is the first truthy value in the comparison

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------- AND --------');
console.log(0 && 'Fabio');
console.log(7 && 'Fabio');
console.log('Hello' && 23 && null && 'Fabio');
console.log('Hello' && 23 && 1 && 'Fabio');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// Same as the if above
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/** Rest pattern and parameters
 * Rest pattern -> to collect object and pack it into an array

// 1. Destructuring
// SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2. Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(numbers, '- sum =', sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 5, 4, 3, 2, 1);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

/** The spread operator 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

// Expand/log the elements individually
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...newMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = 'Fabio';
const letters = [...str, ' ', 'D.'];
console.log(letters);
console.log(...str);
// Multiple values separated per comma are not used in formatter, because it expects only one value per mask
// console.log(`${..str}`);

// Real-world examples
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt('Ingredient 2'),
//   prompt('!Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/** Destructuring Objects 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  StartIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  StartIndex: 1,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 6, c: 16 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);
*/

/** Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

// Declaring 3 variables for an array (destructuring) at the same time
const [x, y, z] = arr;
console.log(x, y, z);
// Original array not affected
console.log(arr);

// We don't need to take all the elements of the array
// If we want to skip one position, we just keep it blank separated with a comma
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch variables normally
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// Destructuring nested array to get all elements individually
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Destructuring not knowing the length of the array
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
