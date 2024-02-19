function solve(input) {
  let stringOne = input.shift();
  let stringTwo = input.shift();
  let stringThree = input.shift();
  let lengthTotal = stringOne.length + stringTwo.length + stringThree.length;

  console.log(lengthTotal);
  console.log(Math.floor(lengthTotal / 3));
}

solve(["chocolate", "ice cream", "cake"]);
