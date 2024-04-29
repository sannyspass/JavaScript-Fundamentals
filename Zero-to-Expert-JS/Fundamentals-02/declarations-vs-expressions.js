// Function Declaration

function calcAge1(birthYear) {
  //const age = 2024 - birthYear;
  return 2024 - birthYear;
}

const age1 = calcAge1(1998);
console.log(age1);

// Function Expression

const calcAge2 = function (birthYear) {
  return 2024 - birthYear; //A variable can hold the function expression, because expressions are just values.
};

const age2 = calcAge2(1990);
console.log(age2);
