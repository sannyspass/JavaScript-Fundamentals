const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

function compare(mark, john) {
  if (mark.bmi > john.bmi) {
    console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    );
  } else if (mark.bmi < john.bmi) {
    console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
    );
  }
}

compare(mark, john);

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);   
        return this.bmi.toFixed(1);       
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
       this.bmi = this.mass / (this.height * this.height);
       return this.bmi.toFixed(1);       
    }
}

function compare (person1, person2) {
    if (person1.calcBMI() > person2.calcBMI()) {
        console.log(`${person1.fullName}'s BMI (${person1.calcBMI()}) is higher than ${person2.fullName}'s (${person2.calcBMI()})!`);
    } else {
        console.log(`${person2.fullName}'s BMI (${person2.calcBMI()}) is higher than ${person1.fullName}'s (${person1.calcBMI()})!`);
    }
};

compare(mark, john);*/
