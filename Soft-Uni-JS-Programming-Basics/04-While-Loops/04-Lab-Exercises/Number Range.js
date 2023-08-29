/*1. Число в диапазона [1…100]

Напишете програма, която въвежда цяло положително число n в диапазона [1…100]. 
При въвеждане на число извън посочения диапазон, да се отпечата съобщение за грешка и да се въведе ново число.*/

function numberRange(input) {
  let n = Number(input.shift());

  while (n < 1 || n > 100) {
    console.log("Invalid number.");

    n = Number(input.shift());
  }

  console.log(`The number is ${n}.`);
}

numberRange([-5]);
