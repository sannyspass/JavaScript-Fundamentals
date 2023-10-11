/*2. Rounding

Write a JS function that rounds numbers to specific precision.

The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). 
If a precision is passed, that is more than 15 it should automatically be reduced to 15.

Remove trailing zeroes, if any (you can use parseFloat())

The output should be printed to the console. Do not print insignificant decimals.*/


function rounding (num1, num2) {
    let number = num1;
    let precision = num2;

    if (precision > 15) {
        precision = 15
    }

    let output = parseFloat(number.toFixed(precision));

    console.log(output);
}

rounding(3.1415926535897932384626433832795, 2);