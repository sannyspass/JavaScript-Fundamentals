/*6. Зоомагазин
Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета. 
Храната се пазарува основно за кучета, от зоомагазин, но понякога стопанинът им купува и за животните на съседа му. 
Една опаковка храна за кучета е на цена 2.50лв., а всяка останала, която не е за тях струва 4лв.*/

function petShop(dogs, animals) {
  let dogFood = dogs * 2.5;
  let otherFood = animals * 4;
  totalPrice = dogFood + otherFood;

  console.log(`Total Price: ${totalPrice.toFixed(2)}lv.`);
}

petShop(5, 4);
