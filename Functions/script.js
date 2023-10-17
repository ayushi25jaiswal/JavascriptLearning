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
