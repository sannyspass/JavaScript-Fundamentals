/*1. Sum First and Last Array Elements

Write a function that receives an array of numbers and prints the sum of first and last element in that array.*/


function sum(input) {
    console.log(Number(input[0]) + Number(input[input.length - 1]));
}

sum([20, 30, 40]);