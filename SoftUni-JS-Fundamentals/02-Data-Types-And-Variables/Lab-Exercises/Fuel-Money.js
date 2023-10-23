/*6. Fuel Money

Write a function which calculates how much money for fuel will be needed to drive а bus from one place to another.Consider the following:

· Calculate the fuel by knowing that an empty bus can pass 100 km with 7L diesel.

· One person in that bus excluding the driver increases fuel consumption by 100 milliliters.

· The money is calculated by multiplying the fuel price with the needed fuel for the trip.

As input you will receive 3 parameters (the distance the bus must travel, the passengers in it and the price for 1 liter of diesel)

As output you should print this message: "Needed money for that trip is {neededMoney} lv*/

function fuelMoney(input) {
  let distance = input.shift();
  let passengers = input.shift() * 0.1;
  let pricePerLtr = input.shift();

  let fuelNeeded = (distance / 100) * 7;
  fuelNeeded += passengers;
  let result = pricePerLtr * fuelNeeded;

  console.log(`Needed money for that trip is ${result} lv.`);
}

fuelMoney([260, 9, 2.49]);
