/*4. Баланс по сметка

Напишете програма, която пресмята колко общо пари има в сметката, след като направите определен брой вноски. 
На първия ред ще получите колко вноски трябва да се направят. 
На всеки следващ ред ще получавате сумата, която трябва да внесете в сметката, докато не се достигне броя вноски. 
При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката. 
Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!" и програмата да приключи. 
Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката закръглена до втория знак след десетичната запетая.*/

function accountBalance(input) {
  let bankOperations = Number(input.shift());
  let totalBalance = 0;
  let counter = 0;

  while (bankOperations > counter) {
    let inputCash = Number(input.shift());

    if (inputCash <= 0) {
      console.log(`Invalid operation!`);
      break;
    }

    console.log(`Increase: ${inputCash.toFixed(2)}`);
    totalBalance += inputCash;
    bankOperations--;
  }
  console.log(`Account Balance Total: ${totalBalance.toFixed(2)}`);
}

accountBalance([3, 5.51, 69.42, 100]);
