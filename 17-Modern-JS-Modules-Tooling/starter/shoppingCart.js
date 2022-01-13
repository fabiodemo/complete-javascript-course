// Exporting module
console.log('Exporting module');

// //Blocking Code
// console.log('Start fetching users');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

// using export we can call this function from outside
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} was added to cart`);
};

// Export multiple things at the same time
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} was added to cart`);
}
