/*1. Repeat String

Write a function that receives a string and a repeat count n. 
The function should return a new string (the old one repeated n times).*/

function repeatString(string, repeat) {
  let result = " ";

  for (let count = 0; count < repeat; count++) {
    result += string;
  }
  console.log(result);
}

repeatString("abc", 3);
