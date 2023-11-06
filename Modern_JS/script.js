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
