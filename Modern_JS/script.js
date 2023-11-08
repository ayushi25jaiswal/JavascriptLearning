<<<<<<< HEAD
// // //Importing Module
// // import { totalPrice as price, tq, addToCart } from './shoppingCart.js';

// import shoppingCart from './shoppingCart';

// // console.log('Importing');

// // addToCart('bread', 4);
// // console.log(price, tq);

// // import * as ShoppingCart from './shoppingCart.js';

// // ShoppingCart.addToCart('sugar', 3);

// import add, { cart } from './shoppingCart.js';

// add('pizza', 2);
// add('bread', 2);
// add('corns', 2);

// console.log(cart);

// //Top evel await  -------------can use await outside async function--

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, body: data.at(-1).body }; //async function return Promise
// };

// // const lastPost =  getLastPost();
// // lastPost.then(last => console.log(last));  // not clean

// const lastPost = await getLastPost();
// console.log(lastPost);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 345;
  const totalQuantity = 11;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} are added to cart.`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} are ordered from supplier.`);
  };

  return { addToCart, cart, totalPrice, totalQuantity, shippingCost };
})();

ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.addToCart('bread', 4);
console.log(ShoppingCart2.shippingCost);
console.log(ShoppingCart2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';
const state = {
  cart: [
    { product: 'pizza', quantity: 4 },
    { product: 'bread', quantity: 4 },
  ],
  user: { loggedIn: true },
};
const stateCloneData = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateCloneData);

if (module.hot) {
  module.hot.accept();
}
=======
// //Importing Module
// import { totalPrice as price, tq, addToCart } from './shoppingCart.js';

// console.log('Importing');

// addToCart('bread', 4);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('sugar', 3);

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 2);
add('corns', 2);

console.log(cart);

//Top evel await  -------------can use await outside async function--

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, body: data.at(-1).body }; //async function return Promise
};

// const lastPost =  getLastPost();
// lastPost.then(last => console.log(last));  // not clean

const lastPost = await getLastPost();
console.log(lastPost);
>>>>>>> origin/master
