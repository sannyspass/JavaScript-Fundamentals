/*1. Sum First Last

Write a function that calculates and prints the sum of the first and the last elements in an array.

The input comes as array of string elements holding numbers.

The output is the return value of your function.*/

let arrayStrings = ["20", "30", "40"];
let arrayNumbers = arrayStrings.map(Number);

let firstArray = arrayNumbers.shift();
let lastArray = arrayNumbers.pop();

let sum = firstArray + lastArray;
console.log(
  `First Array = ${firstArray}, Last Array = ${lastArray}, Sum = ${sum}`
);
