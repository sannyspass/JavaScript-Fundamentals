/*8. Special Numbers

Write a program to receive a number n and for all numbers in the range 1…n print the number and if it is special or not (True / False).

A number is special when its sum of digits is 5, 7 or 11.*/

function solve(input) {
  let n = Number(input.shift());

  for (let i = 1; i <= n; i++) {
    let result = 0;
    result += i;
    if (result.includes("5" || "7" || "11")) {
      console.log(`${i} True.`);
    } else {
      console.log(`${i} False.`);
    }
  }
}

solve([15]);
