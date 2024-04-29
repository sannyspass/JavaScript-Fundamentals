// Creating an array (commonly used).

const friends = ['Sanny', 'Mishe', 'Kamen', 'Sasho'];
console.log(friends);


// Using the Array function to create an array.

const years = new Array(1991, 1984, 2008, 2020);


console.log(friends[2]);

console.log(friends.length /*property*/); // uses a property to give us the number of elements in the array

console.log(friends[friends.length - 1]); // uses an expression to get the last element of the array


// How to change an array element.
// You can mutate arrays declared with const, but you cannot replace them.

friends[2] = 'Jay';
console.log(friends[2]);


const sanny = ['Sanny', 'Spasova', 26, 'teacher', friends];
console.log(sanny);


// Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const yrs = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(yrs[0]);
const age2 = calcAge(yrs[1]);
const age3 = calcAge(yrs[yrs.length - 1]);

console.log(age1, age2, age3);


// Calling functions in an array.

const ages = [calcAge(yrs[0]), calcAge(yrs[1]), calcAge(yrs[yrs.length - 1])];
console.log(ages);

