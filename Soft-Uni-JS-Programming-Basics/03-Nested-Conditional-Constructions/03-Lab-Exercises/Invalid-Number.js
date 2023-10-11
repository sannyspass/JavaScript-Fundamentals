/*7. Невалидно число

Дадено число е валидно, ако е в диапазона [100…200] или е 0. 
Да се напише програма, която приема аргумента input и изважда от него цяло число, и печата "invalid" ако въведеното число не е валидно.*/

function numberCheck(input) {
  let numberInput = Number(input.shift());

  if ((numberInput >= 100 && numberInput <= 200) || numberInput === 0) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
}

numberCheck([50]);
