function sameNumbers(input) {
  let inputNum = input.toString();
  let isSame = true;
  let sum = 0;
  let compare = inputNum[0];
  let numberLength = inputNum.length;

  for (let index = 0; index < numberLength; index++) {
    sum += Number(inputNum[index]);

    if (inputNum[index] !== compare) {
        isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
