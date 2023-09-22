/*6. Редица цели числа

Напишете програма, която прочита n на брой числа. Принтирайте най-голямото и най-малкото число сред въведените.*/

function solve(input) {
  let n = Number(input.shift());
  let minNum = Number.MAX_SAFE_INTEGER;
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= n; i++) {
    let currentNum = Number(input.shift());

    if (currentNum < minNum) {
      minNum = currentNum;
    }
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  console.log(`Max Number: ${maxNum}`);
  console.log(`Min Number: ${minNum}`);
}

solve([5, 10, 20, 304, 0, 50]);
