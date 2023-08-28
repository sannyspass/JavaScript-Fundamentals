/*9. Търговски комисионни

Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:

Град 0 ≤ s ≤ 500 500 < s ≤ 1 000 1 000 < s ≤ 10 000 s > 10 000

Sofia 5% 7% 8% 12%

Varna 4.5% 7.5% 10% 13%

Plovdiv 5.5% 8% 12% 14.5%

Напишете конзолна програма, която приема входен аргумент input и извадете от него име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. 
Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".*/

function comissions(input) {
  let city = String(input.shift());
  let sales = Number(input.shift());
  let comission = 0;

  if (city === "Sofia") {
    if (sales > 0 && sales <= 500) {
      comission = 0.05;
    } else if (sales > 500 && sales <= 1000) {
      comission = 0.07;
    } else if (sales > 1000 && sales <= 10000) {
      comission = 0.08;
    } else if (sales > 10000) {
      comission = 0.12;
    } else {
      console.log("invalid");
    }
  }

  if (city === "Varna") {
    if (sales > 0 && sales <= 500) {
      comission = 0.045;
    } else if (sales > 500 && sales <= 1000) {
      comission = 0.075;
    } else if (sales > 1000 && sales <= 10000) {
      comission = 0.1;
    } else if (sales > 10000) {
      comission = 0.13;
    } else {
      console.log("invalid");
    }
  }

  if (city === "Plovdiv") {
    if (sales > 0 && sales <= 500) {
      comission = 0.055;
    } else if (sales > 500 && sales <= 1000) {
      comission = 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      comission = 0.12;
    } else if (sales > 10000) {
      comission = 0.145;
    } else {
      console.log("invalid");
    }
  }

  console.log((sales * comission).toFixed(2));
}

comissions(["Plovdiv", 499.99]);
