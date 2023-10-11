// Read input numbers from N to 1.

/*1. Get a number from the user.
2. Check the value of the number.
3. If the number is higher then 1 = decrement.
4. Stop counting down when the number reaches 1.*/

function countdown(input) {
  let userNumber = Number(input.shift());

  for (let i = userNumber; i >= 1; i--) {
    console.log(i);
  }
}

countdown([5]);

