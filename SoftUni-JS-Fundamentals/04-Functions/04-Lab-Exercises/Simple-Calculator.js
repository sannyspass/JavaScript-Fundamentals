/*5. Simple Calculator

Write a function that receives three parameters and write an arrow function that calculate result depending of operator. 
Operator can be 'multiply', 'divide', 'add', 'subtract'.

Input

The input comes as parameters named numOne, numTwo, operator*/

function simpleCalculator(numOne, numTwo, operator) {
  let result = 0;

  switch (operator) {
    case "multiply":
        let multiply = (numOne, numTwo) => numOne * numTwo;
      console.log(multiply(numOne, numTwo));
      break;
    case "divide":
      result = numOne / numTwo;
      break;
    case "add":
      result = numOne + numTwo;
      break;
    case "subtract":
      result = numOne - numTwo;
      break;
  }
    console.log(result);
}

simpleCalculator(5, 5, "multiply");
