// Vd1: -----------------------------------------
const message1: string = "Hello, world!";
console.log(message1);

// Vd2: ----------------------------------------- (number)
const sum1 = (x: number, y: number) => {
  return x + y;
}
console.log(sum1(5, 10)); // ok
// console.log(sum(5, '15')); // err

// Vd3: -----------------------------------------
const name1 = 'Hoang Vu';
console.log("length = ", name1.length)
console.log('upPerCasse = ', name1.toUpperCase())

// Vd4: -----------------------------------------
let count1: number = 1; // ok
// count1 = 'name'; // err
console.log(">>> check count 1: ", count1)

let names1: string[] = ['Vu', 'Vincent', 'Typescript']
names1.push("25") // ok
// names1.push(25) // err
console.log(">>> check name 1: ", names1)

// Vd5: ----------------------------------------- (string)
let name3: string = `and "TypeScript"`;
let name4 = `Me ${name3}`; //template strings js
console.log(">>> check name 4 = ", name4) // Me và TypeScript

// Vd6: ----------------------------------------- (boolean)
let status1: boolean = false;
let check1: boolean = true;

let check: boolean = Boolean(""); // false
// let check: boolean = Boolean("Vũ"); // true
console.log(">>> check: ", check)

// Vd7: ----------------------------------------- (object)
let person: object;
person = { name: 'Vũ' };

let info: {
  name: string,
  age: number
} = {
  name: "Vũ",
  age: 23
}
console.log(">>> check info: ", info)

// Vd8: ----------------------------------------- (array)
let arr: (number | string)[] = ['Vũ', 23];
arr.push('Hoàng');
arr.push(2001);
console.log(">>> check array: ", arr)

// Vd9: ----------------------------------------- (tuple)
//tuple: quan tâm đến dataType/size/order(thứ tự phần tử)
let info1: [string, number] = ['Vũ', 23];
console.log(">>> check info1: ", info1)
let info2: [boolean, string, number?];
info2 = [true, 'Hoàng']; // ok
// info2 = [23, 'false']; // err
console.log(">>> check info2: ", info2)

// Vd10: ----------------------------------------- (enum)
enum API_STATUS {
  PENDDING,
  FULFILLED,
  REJECTED = "REJECTED"
}
let a1 = API_STATUS.PENDDING;
let a2 = API_STATUS.FULFILLED;
let a3 = API_STATUS.REJECTED;
console.log(">>> a1 = ", a1, " a2 = ", a2, " a3 = ", a3) // a1 = 0, a2 = 1, a3 = REJECTED (Nếu k có giá trị nó sẽ trả về index của mảng)


