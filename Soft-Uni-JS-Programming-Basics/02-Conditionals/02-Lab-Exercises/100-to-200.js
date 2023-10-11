/*5. Число от 100 до 200

Да се напише програма, която получава цяло число, получено като аргумент и проверява, дали е под 100, между 100 и 200 или над 200. 
Да се отпечатат съответно съобщения, като в примерите по-долу.*/

function solveProblem(input) {
  let chosenNumber = Number(input.shift());

  if (chosenNumber > 200) {
    console.log("Greater than 200.");
  } else if (chosenNumber >= 100 && chosenNumber <= 200) {
    console.log("Between 100 and 200.");
  } else if (chosenNumber < 100) {
    console.log("Less than 100.");
  } else {
    console.log("Invalid number.");
  }
}

solveProblem(["120"]);
