/*8. Магазин за плодове

Магазин за плодове през работните дни работи на следните цени:
плод banana apple orange grapefruit kiwi pineapple grapes
цена 2.50 1.20 0.85 1.45 2.70 5.50 3.85

Събота и неделя магазинът работи на по-високи цени:
плод banana apple orange grapefruit kiwi pineapple grapes
цена 2.70 1.25 0.90 1.60 3.00 5.60 4.20

Напишете програма, която приема като вход аргумента input и изважда от него плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число, и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. 
При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".*/

function fruitStore(input) {
  let fruit = input.shift();
  let day = input.shift();
  let quantity = input.shift();

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        fruit = 2.5;
        break;
      case "apple":
        fruit = 1.2;
        break;
      case "orange":
        fruit = 0.85;
        break;
      case "grapefruit":
        fruit = 1.45;
        break;
      case "kiwi":
        fruit = 2.7;
        break;
      case "pineapple":
        fruit = 5.5;
        break;
      case "grapes":
        fruit = 3.85;
        break;
      default:
        console.log("unknown");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        fruit = 2.7;
        break;
      case "apple":
        fruit = 1.25;
        break;
      case "orange":
        fruit = 0.9;
        break;
      case "grapefruit":
        fruit = 1.6;
        break;
      case "kiwi":
        fruit = 3.0;
        break;
      case "pineapple":
        fruit = 5.6;
        break;
      case "grapes":
        fruit = 4.2;
        break;
      default:
        console.log("unknown");
        break;
    }
  } else {
    console.log("error");
  }

  let price = fruit * quantity;
  console.log(price.toFixed(2));
}

fruitStore(["kiwi", "Monday", 2.5]);
