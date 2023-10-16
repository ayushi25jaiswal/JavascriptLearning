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

  if (passenger.passport === 737382990118) {
    alert('CheckedIn');
  } else {
    alert('Wrong Password');
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// checkIn(flight, ayushi);
newPassport(ayushi);
checkIn(flight, ayushi);
console.log(flight, ayushi);
