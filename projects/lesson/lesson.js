// Vd1: -----------------------------------------
var message = "Hello, world!";
console.log(message);

// Vd2: -----------------------------------------
const sum = (x, y) => {
  return x + y;
}
console.log(sum(5, 10)); // ok

// Vd3: -----------------------------------------
const name = 'Hoang Vu';
console.log("length = ", name.length)
console.log('upPerCasse = ', name.toUpperCase())

// Vd4: -----------------------------------------
let count = 1; // ok
count = 'name'; // ok
console.log(">>> check count: ", count)

let names = ['Vu', 'Vincent', 'Typescript']
names.push(25) // ok
console.log(">>> check names: ", names)

// Vd5: -----------------------------------------
let name0 = "Vu";
let name2 = 'Vu';

// Vd6: -----------------------------------------
let status = false;

// Vd7: -----------------------------------------
let me = {};
me = { name: "Vũ" };
me.address = "Đà Nẵng City";
console.log(">>> check me: ", me)

// Vd8: -----------------------------------------
let myarr = ["Vũ", "Nguyễn", 23]

