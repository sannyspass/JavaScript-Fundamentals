/*3. Convert to Object

Write a function that receives a string in JSON format and converts it to object.

Loop through all the keys and print them with their values in format: "{key}: {value}"

JSON.parse(text) - Convert JSON string into an object.*/

function convert(stringJSON) {
  let person = JSON.parse(stringJSON); //string -> object

  for (let key in person) {
    console.log(`${key} : ${person[key]}`);
  }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
