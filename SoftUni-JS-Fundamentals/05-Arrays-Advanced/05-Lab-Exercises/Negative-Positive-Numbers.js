/*2. Negative / Positive Numbers

Write a function that processes the elements in an array one by one and produces a new array. 
Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.

The input comes as array of number elements.

The output is printed on the console, each element on a new line.*/

function solve(inputArray) {

    const result = [];

    /*for (i = 0; i <= inputArray.length(); i++) {

    }*/

    inputArray.forEach(function(el){
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    });

    console.log(result.join("\n"));
}

solve([7, -2, 8, 9]);