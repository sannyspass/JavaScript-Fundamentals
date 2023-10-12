/*8. Multiplication Table

You will receive a number as an input from the console. 
Print the 10 times table for this number. See the examples below for more information.

Output

Print every row of the table in the following format:

{number} X {times} = {product}

Constraints

· The number will be an integer will be in the interval [1…100]*/

function multiTable(input) {
  let number = Number(input.shift());
  let result = 0;

  for (let counter = 1; counter <= 10; counter++) {
    result = number * counter;
    console.log(`${number} X ${counter} = ${result}`);
  }
}

multiTable([5]);
