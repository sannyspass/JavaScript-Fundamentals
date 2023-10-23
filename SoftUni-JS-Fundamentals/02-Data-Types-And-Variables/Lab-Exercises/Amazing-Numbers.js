/*4. Amazing Numbers

Write a function which as input will receive a number.

Check and print if it is amazing or not into the following format:

"{number} Amazing? {result}"

An amazing number is one that includes the digit 9 the sum of its digits.

Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)*/

function amazingNumbers(num) {
  let str = String(num);
  let sum = 0;

  for (let index = 0; index < str.length; index++) {
    sum += Number(str[index]);
  }

  let result = String(sum).includes("9");
  console.log(`${num} Amazing? ${result ? "True" : "False"}`);
}

amazingNumbers(1233);
