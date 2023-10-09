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
  orderDelivery: function ({ startIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[startIndex]}& ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },

  oredrPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2} & ${ing3}`);
  },
  //REST operator
  orderPizza: function (mainIngr, ...otherIng) {
    console.log(mainIngr);
    console.log(otherIng);
  },
};

// const ingridents = [prompt('Ing 1'), prompt('Ing 2'), prompt('Ing3')];
// restaurant.oredrPasta(...ingridents); //SPREAD OPERATOR

restaurant.orderPizza('Paneer', 'olive', 'onion', 'cheese');

// const arr = [2, 3, 4];
// const newArr = [0, 1, ...arr];
// console.log(newArr);
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// restaurant.orderDelivery({
//   time: 11,
//   startIndex: 2,
//   mainIndex: 2,
//   address: '23 bahnjjw',
// });
// const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu);

// const { name: restaurantName, openingHours: hours } = restaurant;
// console.log(restaurantName, hours);
