/*1. Конзолен конвертор: USD към BGN

Напишете програма за конвертиране на щатски долари (USD) в български лева (BGN). 
Закръглете резултата до 2 цифри след десетичната запетая. Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.*/

function moneyConvertor(input) {
  let usd = Number(input.shift());
  let bgn = usd * 1.79549;
  console.log(`You have ${bgn.toFixed(2)}lv.`);
}

moneyConvertor([5]);
