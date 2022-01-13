// Importing module
// import { addToCart, tq, totalPrice as price } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(tq, ' ', price);

console.log('Importing module');
import shoppingCart from './shoppingCart.js';
// console.log(shippingCost); // not defined, we can only use in the shoppingCart. If we want to use outside, we need to use export

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Avoid the right below code to reduce complexity of th ecode
// import add, { addToCart, tq, totalPrice as price } from './shoppingCart.js';
// console.log(price);

import add, { cart, totalPrice } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// import is not a copy of the variable, it is more like a live connection
// console.log(cart);

/** Top Level Await 
// This blocks all the execution while doing the request
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const rest = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await rest.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean, so lets change to top level await
// lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/** The Module Pattern 
// Main goal is to encapsulate functionality to have private data and to expose a public API
// Only used once
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 238;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product} was added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // Return only the stuff we want to make public
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 3);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
*/

/** CommonJS Modules 
// Would work in Node.JS, but not in the browser (commom JS)
export.addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(
    `${quantity} ${product} was added to cart (shipping cost is ${shippingCost})`
  );
};
// Import
const {addToCart} = require('./shoppingCart.js')
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// Page do not reload
if (module.hot) {
  module.hot.accept();
}

/** Parcel and NPM Scripts */

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Pollifilling async functions
import 'regenerator-runtime/runtime';
