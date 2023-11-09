/*4. Orders

Write a function that calculates the total price of an order and prints it on the console. 
The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. 
The prices for a single piece of each product are:

· coffee - 1.50

· water - 1.00

· coke - 1.40

· snacks - 2.00

Print the result formatted to the second decimal place.*/

function orderSum(input) {
  let productInput = input.shift();
  let quantityInput = input.shift();
  let productPrice = 0;

  switch (productInput) {
    case "coffee":
      productPrice = 1.5;
      break;
    case "water":
      productPrice = 1.0;
      break;
    case "coke":
      productPrice = 1.4;
      break;
    case "snacks":
      productPrice = 2.0;
      break;
  }

  let finalPrice = quantityInput * productPrice;
  console.log(finalPrice.toFixed(2));
}

orderSum(["coffee", 2]);
