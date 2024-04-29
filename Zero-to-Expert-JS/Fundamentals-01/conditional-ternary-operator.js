// Ternary Operator
// Similar to if/else and switch, but shorter.

const age = 23;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water.'); 

// ? means execute if true
// : is a mandatory "else" part


// This is an expression. An expression produces a value:

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


// "If" version:

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);


// Using a ternary expression in a template literal:

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}.`);


// It's better to use if/else for bigger blocks of code. Use the ternary operator for quick decisions.