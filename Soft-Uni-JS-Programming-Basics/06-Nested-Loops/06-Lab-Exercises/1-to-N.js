/*1. Get number from user.
2. Check the value of the number.
3. If the number is higher than 1 - increment from 1 to number by 3.*/

function countUp(input) {
  let userNumber = Number(input.shift());

  for (let i = 1; i <= userNumber; i += 3) {
    console.log(i);
  }
}

countUp([10]);
