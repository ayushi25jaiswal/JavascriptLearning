//Exporting module

console.log('Exporting');

//Scope to module
const shoppingCart = 10;
export let cart = [];

//Can be imported -------named export
// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} are added to cart.`);
// };

const totalPrice = 456;
const totalquantity = 2;

//multiple export
export { totalPrice, totalquantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} are added to cart.`);
}
