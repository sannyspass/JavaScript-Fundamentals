// Version 1

function calcTip(bill) {
  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return tip;
  /*console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);*/
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

// Version 2

const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills2 = [125, 555, 44];
const tips2 = [calcTip(bills2[0]), calcTip(bills2[1]), calcTip(bills2[2])];
const totals2 = [
  bills2[0] + tips2[0],
  bills2[1] + tips2[1],
  bills2[2] + tips2[2],
];

console.log(bills2, tips2, totals2);

/* Arrow Function Version:

const calcTip2 = bill => 
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;*/
