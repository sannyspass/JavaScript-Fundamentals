

const sannyObject = {
    firstName: 'Sanny',
    lastName: 'Spasova',
    age: 2024 - 1998,
    job: 'teacher',
    friends: ['Kamen', 'Mihaela', 'Sasho']
};

// Accessing Properties

// Dot Notation 

console.log(sannyObject.firstName);

// Brackets Notation
// In bracket notations we can put any expressions that we would like.

console.log(sannyObject['lastName']);


const nameKey = 'Name';
console.log(sannyObject['first' + nameKey]);


/*const interestedIn = prompt('What do you want to know about Sanny? Choose between firstName, lastName, age, job, and friends.');

if (sannyObject[interestedIn]) {
    console.log(sannyObject[interestedIn]);
} else {
    console.log('Wrong request! Choose something else.');
}*/


// Adding new properties to objects.

sannyObject.location = 'Korea'; //Dot Notation
sannyObject['city'] = 'Dongtan'; // Bracket Notation


console.log(`${sannyObject.firstName} has ${sannyObject.friends.length} friends, and her best friend is called ${sannyObject.friends[0]}.`);