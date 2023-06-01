
let shoppingList = ["meat", "dairy", "veggies", "fruits"];
let productBuy = prompt("What would you like to buy?");

if (shoppingList.includes(productBuy)) {
    alert("You can buy this item.")
} else {
    alert("This is not in stock.")
}

//if (productBuy = shoppingList.includes()) {
  //  alert("You can buy this.")
//} else if (productBuy !== shoppingList.includes()){
  //  alert("You can't buy this.")
//}

//console.log(shoppingList[0]);