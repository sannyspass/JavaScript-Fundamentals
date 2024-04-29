// Arrow Functions

const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

// Multiple-line Arrow Function

const yearsUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1998));

// Multiple-parameters Arrow Function

const yearsRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsRetirement(1990, "Jaehoon"));
