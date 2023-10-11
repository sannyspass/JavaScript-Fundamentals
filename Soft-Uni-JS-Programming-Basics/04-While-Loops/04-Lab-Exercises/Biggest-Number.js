/*5. Най-голямо число

Напишете програма, която получава n-на брой числа (n > 0) и намира най-голямото измежду тях. 
Първо се получава броят числа n, а след това самите n числа, по едно на ред.*/

function biggestNumber(input) {
  let num = Number(input.shift());
  let counter = 0;
  let bigNum = Number.MIN_SAFE_INTEGER;

  while (num > counter) {
    let currentNum = Number(input.shift());
    if (currentNum > bigNum) {
      bigNum = currentNum;
    }
    counter++;
  }
  console.log(bigNum);
}

biggestNumber([2, 56, 99]);
