/*7. List of Products

You will receive an array of products. Print a numbered array of all the products ordered by name.

Example

Input Output

["Potatoes",

"Tomatoes",

"Onions",

"Apples"] 1.Apples 2.Onions 3.Potatoes 4.Tomatoes

Hints

· The sort function rearranges the array in ascending order

· Finally, we have to print our sorted array. To do that we loop through the array

· We use i + 1, because we want to start counting from 1*/

function shoppingList(input) {
  let products = input.sort();

  for (i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`); // i = the current count of the loop
  }
}

shoppingList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
