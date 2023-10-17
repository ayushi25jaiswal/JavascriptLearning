'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 1990
) {
  //ES5 way of setting default parameters i.e. SHORT CIRCUITING
  //   numPassengers = numPassengers || 1;
  //   price = price || 1990;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('KAH2562');
createBooking('LAH2562', 3, 3456);
createBooking('KAH2562', 5);
createBooking('KAH2562', undefined, 5000);

const flight = 'JU890';
const ayushi = {
  name: 'Ayushi Jaiswal',
  passport: 737382990118,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'TI892';
  passenger.name = 'Ms.' + passenger.name;

  // if (passenger.passport === 737382990118) {
  //   alert('CheckedIn');
  // } else {
  //   alert('Wrong Password');
  // }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// checkIn(flight, ayushi);
newPassport(ayushi);
checkIn(flight, ayushi);
console.log(flight, ayushi);

/////////////////////////////////Functions acceptings callback function.///////////////////
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const capticalString = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original Output ${str}`);
  console.log(`Trasformed Output ${fn(str)}`);
};

transformer('Javascript is best !!!!', capticalString);
transformer('Javascript is best !!!!', oneWord);

//////////////////////////////functions returning functions/////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('helllooo');

greeter('Ayushi');
greeter('Mamta');
greet('Chal chal')('chomu');

const great = greeting => name => console.log(`${greeting} ${name}`);

great('Chal na')('chomu');

////////////////////////////////////////CALL AND APPLY METHODS//////////////////////////

const IndiaAirliner = {
  airline: 'India Airlines',
  iataCode: 'IA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

IndiaAirliner.book('234', 'Ayushi');
console.log(IndiaAirliner.bookings);

const Emigrants = {
  airline: 'Emigrant',
  iataCode: 'EM',
  bookings: [],
};

const book = IndiaAirliner.book;

//this does not work
// book('167', 'SHANU');

//CaLL method
book.call(Emigrants, '123', 'Luchii');
console.log(Emigrants);
book.call(IndiaAirliner, '122', 'Lomdi');
console.log(IndiaAirliner);

//Apply Method
const flightData = ['345', 'Yusuf'];
book.apply(IndiaAirliner, flightData); //dont use in modern JS
book.call(IndiaAirliner, ...flightData);
const bookEM = book.bind(Emigrants);
bookEM(234, 'DANIEL');
bookEM(234, 'Rume');

const bookEM23 = book.bind(Emigrants, 23);
bookEM23('DAIEL');
bookEM23('Romei');

//With Event Listeners
IndiaAirliner.planes = 300;
IndiaAirliner.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', IndiaAirliner.buyPlane.bind(IndiaAirliner));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.2);
console.log(addVat(200));

const addTAX = rate => value => console.log(value + value * rate);
addTAX(0.2, 200);

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of 
replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt
   should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the 
  
  value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes 
  sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input
 (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results 
 array as it is, using console.log(). This should be the default option. If type is 'string', display a string 
 like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 
'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this 
situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question} \n ${this.options.join('\n')}`)
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [3, 4, 5, 0] }, 'string');

//Immediately Invoked Functions

(function () {
  console.log('this will run once');
})();

(() => console.log('This will also run Once'))();
