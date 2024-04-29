const friends = ['Sanny', 'Mishe', 'Kamen', 'Sasho'];

// Add elements.

const newLength = friends.push('Jae');

console.log(friends);
console.log(newLength);

friends.unshift('Spiderman');
console.log(friends);


// Remove elements.

friends.pop(); // remove last element
console.log(friends);

friends.shift();
console.log(friends);


console.log(friends.indexOf('Kamen')); // 2

console.log(friends.includes('Samurai')); //false