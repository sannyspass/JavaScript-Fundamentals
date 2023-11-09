/*5. Sum Even Numbers

Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.*/


function sumEven (inputArray) {
    let arrayNumbers = inputArray.parseInt();
    console.log(arrayNumbers);
    let counter = 0;

    /*for (let i = 0; i <= arrayNumbers.length, i++) {
        if (arrayNumbers.shift() % 2 === 0) {
            counter = arrayNumbers + counter;
        }

    }
    console.log(counter);*/
}

sumEven(['1','2','3','4','5','6']);