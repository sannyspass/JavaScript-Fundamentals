/*7. Triangle of Numbers

Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

Constraints

· n will be in the interval [1...20].*/

function triangle(input) {
  let number = Number(input.shift());

  for (let row = 1; row <= number; row++) {
    console.log(`${row} `.repeat(row)); // .repeat() repeats the row.
  }
}

triangle([3]);

/*function triangle(input) {
  let number = Number(input.shift());
  let output = "";

  for (let row = 1; row <= number; row++) {
    for (let column = 1; column <= row; column++) {
      output += row + " ";
    }
    output += "\n";
  }
  console.log(output); 
}

triangle([3]);*/
