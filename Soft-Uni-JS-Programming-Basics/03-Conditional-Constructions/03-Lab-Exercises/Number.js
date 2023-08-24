/*5. Число в интервалa

Да се напише програма, която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е различно от 0 и извежда "Yes", 
ако отговаря на условията, или "No" ако е извън тях.*/

function numberCheck(input) {
  let inputNum = Number(input.shift());

  if (inputNum >= -100 && inputNum <= 100 && inputNum != 0) {
    console.log("Yes.");
  } else {
    console.log("No.");
  }
}

numberCheck([-25]);
