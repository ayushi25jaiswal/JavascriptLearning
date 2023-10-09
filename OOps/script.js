'use strict';

// const Car = function (company, speed) {
//   this.company = company;
//   this.speed = speed;
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.company} is going at a speed of ${this.speed}`);
// };
// console.dir(Car.prototype);
// const tesla = new Car('Tesla', 130);
// tesla.brake();
// console.log(tesla.__proto__ === Car.prototype);

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeTo = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };

// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.charge -= 2;
//   console.log(this.speed, this.charge);
// };

// const Tesla = new EV('Tesla', 120, 30);
// Tesla.accelerate();
// Tesla.brake();
// Tesla.chargeTo(70);

// console.log(Tesla);

// const EV = function (make, speed, charge) {
//   //   Car.call(this, make, speed);
//   //   this.charge = charge;
// //   // };

// function Student(name) {
//   this.name = name;
//   console.log(this);
// }

// Student.prototype.printName = function () {
//   console.log(this.name);
// };

// let ayushi = new Student('Ayushi');

// class Student {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     console.log(this);
//   }

//   printDetails() {
//     console.log(this.name, this.id);
//   }
// }

// const ayushi = new Student('Ayushi', 550);

// const Student = {
//   setdetails(name, id) {
//     this.name = name;
//     this.id = id;
//   },
// };

// let print = function printDetails() {
//   console.log(this.name, this.id);
// };

// let ayushi = Object.create(Student);
// // ayushi.setdetails('Ayushi', 550);
// const aastha = Object.create(Student, print);
// aastha.setdetails('Aastha', 545);
// aastha.print();

//////////////////////////// Functions ////////////////////////////////////

const bookings = [];
const createBooking = function (
  flightName,
  numberPassanger = 1,
  price = 199 * numberPassanger
) {
  //ES5
  // numberPassanger = numberPassanger || 1;
  // price = price || 199;
  const booking = {
    flightName,
    numberPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 700);
