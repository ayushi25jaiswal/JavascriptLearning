'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const weekdays = ['mon', 'tue', 'thrus', 'fri', 'sat'];
//ES6 can use computation in objects
const openingHours = {
  [weekdays[0]]: {
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
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanched object literals
  openingHours,
  //In ES6 object methods can no need function keyword
  orderDelivery({ startIndex, mainIndex, time, address }) {
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

///////////////////////////////////Looping Objects key values & entries////////////////////////
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = 'We open on ';
for (const day of properties) {
  openStr += `${day} ,`;
}
console.log(openStr);
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`We on day ${key}, open at ${open} and close at ${close}`);
}
////////////////////////////////////OPTIONAL CHAINING//////////////////////////////////////
// console.log(restaurant.openingHours.tue.open); //error
console.log(restaurant.openingHours?.tue?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Choose dumbo');
console.log(restaurant.orderDelivery?.(0, 1, 11, 'dwsndn') ?? 'Choose dumbo');

// // const ingridents = [prompt('Ing 1'), prompt('Ing 2'), prompt('Ing3')];
// restaurant.oredrPasta(...ingridents); //SPREAD OPERATOR

// restaurant.orderPizza('Paneer', 'olive', 'onion', 'cheese');

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

//////////////////////////////////////////SHORT CIRCUITING/////////////////////////

//OR OPERATOR ||
// s;

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna 
work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern 
Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with 
all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 

containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints
 each of them to the console, along with the number of goals that were scored in total (number of player names 
passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
 WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again
 with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;
// // console.log(player1);
// // console.log(player2);

// const [gk1, ...fieldPlayers1] = player1;
// // console.log(gk1, fieldPlayers1);

// const [gk2, ...fieldPlayers2] = player2;
// // console.log(gk2, fieldPlayers2);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const player1Final1 = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final1);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} scored goals`);
// };
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 will Win');
// team1 > team2 && console.log('Team 2 will Win');

//////////////////////////////////////FOR OF LOOP//////////////////////////////////////////

for (const item of restaurant.starterMenu) {
  console.log(item);
}

for (const [i, el] of restaurant.starterMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
