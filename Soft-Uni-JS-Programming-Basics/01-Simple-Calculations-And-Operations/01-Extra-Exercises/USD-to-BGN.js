/*1. Конзолен конвертор: USD към BGN

Напишете програма за конвертиране на щатски долари (USD) в български лева (BGN). 
Закръглете резултата до 2 цифри след десетичната запетая. Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.*/

/*function moneyConvertor(input) {
  let usd = Number(input.shift());
  let bgn = usd * 1.79549;
  console.log(`You have ${bgn.toFixed(2)}lv.`);
}

moneyConvertor([5]);*/

/*function ageLimit (age) {
if (age >=14 && age <= 90) {
  console.log("True.");
} else {
  console.log("False.");
}
}

ageLimit(12);*/

let age = 25;
if (age > 14 && age <= 90) {
  console.log("true");
}