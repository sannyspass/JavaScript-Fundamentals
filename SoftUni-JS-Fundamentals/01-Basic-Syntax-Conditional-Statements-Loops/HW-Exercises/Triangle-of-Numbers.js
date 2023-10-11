/*7. Triangle of Numbers

Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

Constraints

· n will be in the interval [1...20].*/

function triangle(input) {
  let number = Number(input.shift());

  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}

triangle([3]);
