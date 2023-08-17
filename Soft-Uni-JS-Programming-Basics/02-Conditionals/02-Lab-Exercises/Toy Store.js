/*8. Магазин за детски играчки

Петя има магазин за детски играчки. 
Тя получава голяма поръчка, която трябва да изпълни. 
С парите, които ще спечели иска да отиде на екскурзия. 
Да се напише програма, която пресмята печалбата от поръчката.

Цени на играчките:

· Пъзел - 2.60 лв.

· Говореща кукла - 3 лв.

· Плюшено мече - 4.10 лв.

· Миньон - 8.20 лв.

· Камионче - 2 лв.

Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. 
От спечелените пари Петя трябва да даде 10% за наема на магазина. 
Да се пресметне, дали парите ще ѝ стигнат да отиде на екскурзия.*/

function toyStore(input) {
  let tripPrice = Number(input.shift());

  let jigsawCount = Number(input.shift());
  let dollCount = Number(input.shift());
  let teddyBearCount = Number(input.shift());
  let minionCount = Number(input.shift());
  let truckCount = Number(input.shift());

  let toysCount =
    jigsawCount + dollCount + teddyBearCount + minionCount + truckCount;

  let jigsawPrice = jigsawCount * 2.6;
  let dollPrice = dollCount * 3;
  let teddyBearPrice = teddyBearCount * 4.1;
  let minionPrice = minionCount * 8.2;
  let truckPrice = truckCount * 2;

  let toysSum =
    jigsawPrice + dollPrice + teddyBearPrice + minionPrice + truckPrice;

  if (toysCount >= 50) {
    toysSum = toysSum - toysSum * 0.25;
  }

  toysSum = toysSum * 0.9;

  let totalPrice = toysSum - tripPrice;

  if (toysSum >= tripPrice) {
    console.log(`Yes! You have ${Math.abs(totalPrice).toFixed(2)} lv. left.`);
  } else if (toysSum < tripPrice) {
    console.log(
      `No. You need an additional ${Math.abs(totalPrice).toFixed(2)} lv.`
    );
  } else {
    console.log(`Error.`);
  }
}

//toyStore([40.8, 20, 25, 30, 50, 10]);
toyStore([320, 8, 2, 5, 5, 1]);

/*function toyStore(input) {

  let tripPrice = Number(input.shift());

  let jigsawCount = Number(input.shift());
  let dollCount = Number(input.shift());
  let teddyBearCount = Number(input.shift());
  let minionCount = Number(input.shift());
  let truckCount = Number(input.shift());

  let toyOrder = jigsawCount + dollCount + teddyBearCount + minionCount + truckCount;

  let jigsawPrice = jigsawCount * 2.60;
  let dollPrice = dollCount * 3;
  let teddyBearPrice = teddyBearCount * 4.10;
  let minionPrice = minionCount * 8.20;
  let truckPrice = truckCount * 2;
 
  let totalMoney = jigsawPrice + dollPrice + teddyBearPrice + minionPrice + truckPrice;

  let discount = totalMoney / 25;
  let rentFee = totalMoney / 10;
  let finalMoney = totalMoney - rentFee;

 switch (totalMoney) {
    case 1 (toyOrder >= 50):
        let discount = totalMoney / 25;
        let finalMoney = totalMoney - (discount + rentFee);
        console.log(`Your profit is ${finalMoney}`);
        break;

    case 2 (toyOrder < 50):
        finalMoney = totalMoney - rentFee;
        console.log(`Your profit is ${finalMoney}`);
        break;

    default:
        console.log("Error.")
        break;
 }

 if (finalMoney >= tripPrice) {
    console.log(`Yes! ${finalMoney - tripPrice} lv. left.`);
  } else if (finalMoneyMoney <= tripPrice) {
    console.log(`Not enough money! ${tripPrice - finalMoney} lv. needed.`);
  } else {
    console.log("Unknown.");
  }
}


  if (toyOrder >= 50) {
    let discount = totalMoney / 25;
    console.log(`You have received a 25% discount. The discount will be ${discount} lv.`)
  } else {
    console.log(`Unable to receive discount.`)
  }

  let finalMoney = totalMoney - rentFee; 

  if (finalMoney >= tripPrice) {
    console.log(`Yes! ${finalMoney.toFixed(2)} lv. left.`);
  } else if (finalMoneyMoney <= tripPrice) {
    console.log(`Not enough money! ${tripPrice.toFixed(2)} lv. needed.`);
  } else {
    console.log("Unknown.");
  }
}
let toysSum = jigsawCount * 2.60 + dollCount * 3 + teddyBearCount * 4.10 + minionCount * 8.20 + truckCount * 2;


toyStore([40.8, 20, 25, 30, 50, 10]);*/
