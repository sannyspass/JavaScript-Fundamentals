/*3. Четно или нечетно

Да се напише програма, която получава цяло число получено, като аргумент и отпечатва на конзолата, дали е четно или нечетно.*/

function evenNumbers(input) {
  let chosenNumber = Number(input.shift());
  if (chosenNumber % 2 == 0) {
    console.log("Even number.");
  } else {
    console.log("Odd number.");
  }
}

evenNumbers(["31"]);
