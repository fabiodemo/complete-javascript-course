'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received ${this.starterMenu[mainIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/** Summary: Which Data Structure to Use?
 * Array and sets should be used when we do not need to describe the values, for simple lists of values;
 * Use arrays when we need to manipulate data;
 * Use sets to remove duplicates from arrays (when we need to work with unique values);
 * Objects are more traditional and are easir to write and access values with . and [];
 *  * Used when we need to include functions (methods)
 *  * Use when working with JSON (we can convert to map)
 * Maps can have any data type, better performance, easier to iterate and easy to compute size;
 *  * Used when we simply need to map key to values
 *  * Use when you need keys that are not strings
 */

/** Maps: Iteration 
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! '],
  [false, 'Try again!'],
]);

console.log(question);

// Convert objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// Convert Map back to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/** Maps: Fundamentals 
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
// We cannot use as string like console.log(rest.get('1'));
console.log(rest.get(1));

// Don't use this, just to show how to use it
const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

// console.log(rest.get([1, 2])); // Will not work, because it is not the same object in the key
console.log(rest.get(arr)); // This will work because the object is the same space in memory
*/

/** Sets
 * Collection of Unique values
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);
console.log(ordersSet);
console.log(new Set('Fabio'));

// Sets uses size instead of length
console.log(ordersSet.size);
// Sets uses has instead of includes
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
console.log(ordersSet);

// In sets we cannot use indexes like ordersSet[0]
// We cannot retrieve values of a set, but we can verify if it alredy exists in a set

// We can iterate over a set
for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUniqueSet = new Set(staff);
console.log(staffUniqueSet);
// Convert set to an array
const staffUniqueArray = [...staffUniqueSet];
console.log(staffUniqueArray);

// If we just need to count the unique values, this is the way to go
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('fabiodemo').size);
*/

/** Looping Objects: Object Keys, Values, and Entries 
const properties = Object.keys(openingHours);
console.log(Object.keys(openingHours));

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) openStr += `${day},`;
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open, close }] of entries)
  console.log(`On ${day} we open at ${open} and close at ${close}`);

// for (const day of Object.keys(openingHours)) console.log(day);
*/

/** Optional Chaining (?,) 
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.functiontest?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// On Methods
console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method doesn't exist`);

// On arrays
const users = [{ name: 'Fabio', email: 'hello@fabio.com.br' }];
const emptyUsers = [];
console.log(users[0]?.name ?? 'User array empty');
console.log(emptyUsers[0]?.name ?? 'User array empty');
// We should use the above exmaple, instead of
if ((users.length = 0)) console.log(user[0].name);
else console.log('User array empty');
*/

/** Enhanced Object Literals
 * Restaurant is a object literal
 * console.log(restaurant.openingHours);
 */

/** The for-of loop
 * with it, we can still use break or continue.

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//" For-of"
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);
 */

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
