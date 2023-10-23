/*1. Concatenate Names

Write a function which receives two names as string parameters and a delimiter. 
Print the names joined by the delimiter.*/

function names(input) {
  let firstName = input.shift();
  let secondName = input.shift();
  let delimiter = input.shift();

  console.log(`${firstName} ${delimiter} ${secondName}`);
}

names(["John", "Smith", "->"]);
