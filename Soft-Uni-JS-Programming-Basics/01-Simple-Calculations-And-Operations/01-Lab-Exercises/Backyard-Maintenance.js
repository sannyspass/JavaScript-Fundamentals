/*7. Озеленяване на дворове
Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, като по този начин създаде уютна обстановка и комфорт на гостите си, като за целта е наела фирма.
Напишете програма, която изчислява необходимите средства, които Божидара ще трябва да заплати на фирмата изпълнител на проекта. 
Цената на един кв. м. е 7.61лв със ДДС. Тъй като нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.*/

function backyardMaintenance(sqM) {
  let basePrice = sqM * 7.61;
  let discount = basePrice * 0.18;
  let finalPrice = basePrice - discount;

  console.log(`The final price is: ${finalPrice.toFixed(2)}lv.`);
  console.log(`The discount is: ${discount.toFixed(2)}lv.`);
}

backyardMaintenance(540);
