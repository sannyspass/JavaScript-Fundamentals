/*3. Integer and Float

You will receive 3 numbers. 
Your task is to find their sum and print it to the console with the addition " - {type of the number (Integer or Float)}":*/

function numbers(input) {
  let num1 = input.shift();
  let num2 = input.shift();
  let num3 = input.shift();

  let sum = num1 + num2 + num3;

  if (sum % 1 === 0) {
    console.log(`${sum} - Integer.`);
  } else {
    console.log(`${sum} - Float.`);
  }
}

numbers([100, 200, 303]);
