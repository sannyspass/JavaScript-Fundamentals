/* 7. Лява и дясна сума

Да се напише програма, която чете 2*n-на брой цели числа и проверява, дали сумата на първите n числа (лява сума) е равна на сумата на вторите n числа (дясна сума). 
При равенство печата " Yes, sum = " + сумата; иначе печата " No, diff = " + разликата. Разликата се изчислява, като положително число (по абсолютна стойност).*/

function doubleSum(input) {
  let n = Number(input.shift());
  let leftSide = 0;
  let rightSide = 0;
  let wholeSum = 0;
  let differenceSum = 0;

  for (let i = 0; i < n * 2; i++) {
    let num = Number(input.shift());

    if (i < n) {
      leftSide += num;
    } else /*if (i >= n)*/ { // =, vinagi hvashtai vsichki case-ove
      rightSide += num; //ne mi hvashta ednoto 50, trqbva da se napishe =
    }
  }

  if (leftSide === rightSide) {
    wholeSum = leftSide;
    console.log(`Yes, sum = ${wholeSum}.`);
  } else /*if (leftSide !== rightSide)*/ {
    if (leftSide < rightSide) {
      differenceSum = rightSide - leftSide;
      console.log(`No, diff = ${differenceSum}.`);
    } else if (leftSide > rightSide) {
      differenceSum = leftSide - rightSide;
      console.log(`No, diff = ${differenceSum}.`);
    } else {
      console.log(`error`);
    }
  }
}
doubleSum([2, 90, 9, 50, 50]);
