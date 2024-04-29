const bill = 275;

// Version 1

let tip = 0;

const calcTip =
  bill >= 50 && bill <= 300
    ? console.log(
        `The bill was ${bill}, the tip was ${(tip =
          bill * 0.15)}, and the total value was ${bill + tip}`
      )
    : console.log(
        `The bill was ${bill}, the tip was ${(tip =
          bill * 0.2)}, and the total value was ${bill + tip}`
      );


// Version 2

const tip2 = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip2}, and the total value was ${
    bill + tip2
  }`
);
