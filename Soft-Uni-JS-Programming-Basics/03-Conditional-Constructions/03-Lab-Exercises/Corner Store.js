/*4. Квартално магазинче

Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:

град / продукт coffee water beer sweets peanuts

Напишете програма, която приема входен аргумент и изважда от него продукт (низ), град (низ) и количество (число),
 и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град.*/

function cornerStore(input) {
  let product = input.shift();
  let city = input.shift();
  let quantity = Number(input.shift());

  if (city == "Sofia") {
    switch (product) {
      case "coffee":
        product = 0.5;
        break;

      case "water":
        product = 0.8;
        break;

      case "beer":
        product = 1.2;
        break;

      case "sweets":
        product = 1.45;
        break;

      case "peanuts":
        product = 1.6;
        break;

      default:
        console.log("Unknown.");
    }
  } else if (city == "Plovdiv") {
    switch (product) {
      case "coffee":
        product = 0.4;
        break;

      case "water":
        product = 0.7;
        break;

      case "beer":
        product = 1.15;
        break;

      case "sweets":
        product = 1.3;
        break;

      case "peanuts":
        product = 1.5;
        break;

      default:
        console.log("Unknown.");
    }
  } else if (city == "Varna") {
    switch (product) {
      case "coffee":
        product = 0.45;
        break;

      case "water":
        product = 0.7;
        break;

      case "beer":
        product = 1.1;
        break;

      case "sweets":
        product = 1.35;
        break;

      case "peanuts":
        product = 1.55;
        break;

      default:
        console.log("Unknown.");
    }
  } else {
    console.log("Uknown data.");
  }

  let price = product * quantity;
  console.log(price.toFixed(2));
}

cornerStore(["peanuts", "Plovdiv", 1]);
