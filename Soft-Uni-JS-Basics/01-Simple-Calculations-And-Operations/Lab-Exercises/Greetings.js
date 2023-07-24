/*1. Поздрав по име
Напишете програма, която изважда от аргумента input име на човек и отпечатва "Hello, <name>!", където <name> е въведеното име от конзолата.
*/

function greeting(input) {
  let name = input.shift();
  console.log(`Hello, ${name}!`);
}

greeting(["Sanny"]);
