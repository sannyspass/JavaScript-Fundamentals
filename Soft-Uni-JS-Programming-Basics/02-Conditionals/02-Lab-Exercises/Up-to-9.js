/*4. Изписване на число до 9 с думи

Да се напише програма, която получава цяло число в диапазона [1…9], получено като аргумент и го изписва с думи на английски език. Ако числото е извън диапазона, изписва "number too big".*/


function numbersByWords (input) {
    let inputNumber = Number(input.shift());

    if (inputNumber <= 0) {
        console.log("The number is too small.")
    } else if (inputNumber == 1) {
        console.log("One.");
    } else if (inputNumber == 2) {
        console.log("Two.");
    } else if (inputNumber == 3) {
        console.log("Three.");
    } else if (inputNumber == 4) {
        console.log("Four."); 
    } else if (inputNumber == 5) {
        console.log("Five.");
    } else if (inputNumber == 6) {
        console.log("Six.");
    } else if (inputNumber == 7) {
        console.log("Seven.");
    } else if (inputNumber == 8) {
        console.log("Eight.");
    } else if (inputNumber == 9) {
        console.log("Nine.");
    } else {
        console.log("The number is too big.");
    }
}

numbersByWords([-1]);