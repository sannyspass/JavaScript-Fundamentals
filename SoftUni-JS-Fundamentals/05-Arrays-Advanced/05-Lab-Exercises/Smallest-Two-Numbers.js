/*6. Smallest Two Numbers

Write a function that prints the two smallest elements from an array of numbers.

The input comes as array of number elements.

The output is printed on the console on a single line, separated by space.*/

function numbers(input) {
  let compareNums = input
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");

  console.log(compareNums);
}

numbers([30, 15, 50, 5]);
