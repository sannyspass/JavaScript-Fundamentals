/*6. Най-малко число

Напишете програма, която получава n-на брой числа (n > 0) и намира най-малкото измежду тях. 
Първо се въвежда броят числа n, а след това самите n числа, по едно на ред.*/

function smallestNumber(input) {
  let num = Number(input.shift());
  let counter = 0;
  let smallNum = Number.MAX_SAFE_INTEGER;

  while (num > counter) {
    let currentNum = Number(input.shift());
    if (currentNum < smallNum) {
      smallNum = currentNum;
    }
    counter++;
  }
  console.log(smallNum);
}

smallestNumber([2, -1, -2]);
