//*SECTION 2---Data Types Operators---

//*---Exercise 1: Numbers---

let numberOne = 7;
let numberTwo = 2.5;

let sumNumbers = numberOne + numberTwo;
let subtNumbers = numberOne - numberTwo;
let multNumbers = numberOne * numberTwo;
let divNumbers = numberOne / numberTwo;
let moduNumbers = numberOne % numberTwo;
let expoNumbers = numberOne ** numberTwo;

console.log(sumNumbers);
console.log(subtNumbers);
console.log(multNumbers);
console.log(divNumbers);
console.log(moduNumbers);
console.log(expoNumbers)

//*---Exercise 2: Boolean and Operators---
  
//*(1)-Comparison Operators---

let numbOne = 5;
let numbTwo = 3;

let isLessThan = numbOne < numbTwo;
let isGreaterThan = numbOne > numbTwo;
let isGreaterThanOrEqual = numbOne >= numbTwo;
let isLessThanOrEqual = numbOne <= numbTwo;
let isEqual = numbOne === numbTwo;
let isNotEqual = numbOne !== numbTwo;

console.log("numbOne is less than numbTwo:",isLessThan);
console.log("numbOne is greater than numbTwo:",isGreaterThan);
console.log("numbOne is greater than or equal to numbTwo:",isGreaterThanOrEqual);
console.log("numbOne is less than or equal to numbTwo:",isLessThanOrEqual);
console.log("numbOne is equal to numbTwo :",isEqual);
console.log("numbOne is not equal to numbTwo :",isNotEqual);

//*(2)-Declare Two Variables x and y---

let x = 8;
let y = 12;

if (x > y) {
    console.log("x is greater than y")
};
if (x <= y) {
    console.log("x is less than or equal to y")
};
if (x === y) {
    console.log("x is equal to y")
};
if (x !== y) {
    console.log("x is not equal to y")
};

//*(3)-Declare the variables a and b---

let a = true;
let b = false;

let resultOfAND = a && b;
let resultOfOR = a || b;
let resultOfNOTa = !a;

console.log(resultOfAND);
console.log(resultOfOR);
console.log(resultOfNOTa);

//*(4)-Declare variable p and assign it a value of 10---

let p = 10;

console.log(p += 3);
console.log(p -= 2);
console.log(p *= 5);
console.log(p /= 2);
console.log(p %= 6);