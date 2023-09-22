/* 8. Четна / нечетна сума

Да се напише програма, която получава n-на брой цели числа и проверява, дали сумата от числата на четни позиции е равна на сумата на числата на нечетни позиции. 
При равенство да се отпечатат "Yes" и на нов ред "Sum = " + сумата; иначе да се отпечата "No" и на нов ред "Diff = " + разликата. 
Разликата се изчислява по абсолютна стойност. */

function evenOddNumbers(input) {
  let n = Number(input.shift());
  let oddNumbers = 0;
  let evenNumbers = 0;

  for (let i = 0; i < n; i++) {
    let currentNumber = Number(input.shift());

    if (i % 2 == 0) {
      evenNumbers += currentNumber;
    } else {
      oddNumbers += currentNumber;
    }
  }
  if (evenNumbers === oddNumbers) {
    console.log(`Yes.`);
    console.log(`Sum = ${evenNumbers}`);
  } else {
    console.log(`No.`);
    console.log(`Diff = ${Math.abs(evenNumbers - oddNumbers)}.`);
  }
}

evenOddNumbers([4, 3, 5, 1, -2]);
