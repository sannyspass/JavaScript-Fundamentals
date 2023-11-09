/*3. Reverse an Array of Numbers

Write a program which receives a number n and an array of elements. 
Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.*/

function reverse(n, inputArray) {
  inputArray.length = n;
  console.log(inputArray.reverse().join(" "));
}

reverse(3, [10, 20, 30, 40, 50]);
