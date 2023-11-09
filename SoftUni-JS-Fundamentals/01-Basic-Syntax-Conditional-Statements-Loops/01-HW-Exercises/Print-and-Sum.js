/*6. Print and Sum

Write a function to display numbers from given start to given end and their sum. 
The input comes as two number parameters.*/

function solve(input) {
  let startNum = Number(input.shift());
  let finishNum = Number(input.shift());
  let totalSum = 0;

  for (let i = startNum; i <= finishNum; i++) {
    console.log(i);
    totalSum += i;
  }
  console.log(totalSum);
}

solve([0, 26]);
