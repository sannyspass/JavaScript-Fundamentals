const sanny = {
    firstName: 'Sanny',
    lastName: 'Spasova',
    birthYear: 1998,
    friends: ['Kamen', 'Mihaela', 'Sasho'],
    hasDriversLicense: true,
    job: 'teacher',

    /*calcAge: function(birthYear) { // function expression
        return 2024 - birthYear;
    }*/

    /*calcAge: function () {
//"this" keyword/variable is equal to the object on which the method is called
        return 2024 - this.birthYear;
    }*/

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`; 
    }
};

console.log(sanny.calcAge()); 
console.log(sanny.age); 
console.log(sanny.getSummary());


