/* 11. Sum of Odd Numbers

Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

Input

You will receive a number – n. This number shows how many odd numbers you should print.

Output

Print the next n odd numbers, starting from 1, separated by new lines. On the last line, print the sum of these numbers.

Constraints

· n will be in the interval [1…100] */


function solve(num) {
    let oddCounter = 0;
    let counter = 1;
    let sum = 0;

    while (oddCounter >= 0) {
        if (counter % 2 == 1) {
            console.log(counter);
            sum += counter;

            oddCounter--;
        }
        counter++;
        
   }
   console.log("Sum: " + sum); 
}

solve(5);