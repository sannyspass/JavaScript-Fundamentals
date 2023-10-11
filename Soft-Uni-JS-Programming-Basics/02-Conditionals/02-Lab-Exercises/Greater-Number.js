/*2. Намиране на по-голямото число

Да се напише програма, която получава две цели числа въведени от потребителя и отпечатва по-голямото от двете.*/

function greaterNumber(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());

  if (num1 > num2) {
    console.log(num1);
  } else if (num1 < num2) {
    console.log(num2);
  } else if ((num1 = num2)) {
    console.log("Same number.");
  } else {
    console.log("No number.");
  }
}

greaterNumber([10, 10]);
