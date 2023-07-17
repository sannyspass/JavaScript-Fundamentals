function getMilk(money) {
  return money % 1.5;
  let bottle = money / 1.5;
  bottle = Math.floor(bottle);
  console.log("You can buy " + bottle + " bottles of milk.");
}
getMilk(10);

//Calculate the number of bottles the robot is able to buy with the money.
// 1 bottle is 1.5 dollars

function getMilk(money) {
  let bottle = money / 1.5;
  bottle = Math.floor(bottle);
  console.log("You can buy " + bottle + " bottles of milk.");

  return money % 1.5; // Remainer of money
}
let change = getMilk(12);
console.log(change);
