/*1. Person Info

Write a function that receives 3 parameters, sets them to an object and prints the object's properties by key and value in the format: "{key}: {value}"

The input comes as 3 separate strings in the following order: firstName, lastName, age.*/

function personObject(firstName, lastName, age) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

personObject("Sanny", "Spasova", 26);
