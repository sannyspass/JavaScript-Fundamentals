/* divisible by 3 = fizz
divisible by 5 = buzz
divisible by 3 & 5 = fizzbuzz*/

let output = [];
let count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz");
  } else if (count % 3 === 0) {
console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else {
    output.push(count);
  }


count++;
console.log(output);
} 

fizzBuzz();






/*function fizzBuzz () {
  if (output <= 100) {
   output.push(output ++);
   console.log(output);
  } else {
   console.log("The end.")
  }
 }*/































/*let output = [];
let count = 1;

function fizzBuz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }

  count = count++;
  console.log(output);
}*/
