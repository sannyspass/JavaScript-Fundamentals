/* 4. Convert to JSON

Write a function that receives name, lastName, hairColor and sets them to an object.

Convert the object to JSON string and print it.

Input is provided as 3 single strings in the order stated above. */

function convert(name, lastName, hairColor) {
  let person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  let personJSON = JSON.stringify(person);
  console.log(personJSON);
}

convert("George", "Jones", "Brown");
