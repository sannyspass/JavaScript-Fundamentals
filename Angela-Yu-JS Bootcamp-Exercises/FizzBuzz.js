/* divisible by 3 = fizz
divisible by 5 = buzz
divisible by 3 & 5 = fizzbuzz*/

let count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log("FizzBuzz");
    } else if (count % 3 === 0) {
      console.log("Fizz");
    } else if (count % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(count);
    }

    count++;
  }
}

fizzBuzz();
