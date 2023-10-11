/*4. Vacation

You are given a group of people, type of the group, and day of the week they are going to stay. 
Based on that information calculate how much they have to pay and print that price on the console. 
Use the table below. In each cell is the price for a single person. 
The output should look like that: "Total price: {price}". 
The price should be formatted to the second decimal point.*/

function vacation(group, type, day) {
  let studentsPrice = 0;
  let businessPrice = 0;
  let regularPrice = 0;
  let totalPrice = 0;
  let discount = 0;

  if (type === "students") {
    switch (day) {
      case "Friday":
        studentsPrice = 8.45;
        break;

      case "Saturday":
        studentsPrice = 9.8;
        break;

      case "Sunday":
        studentsPrice = 10.46;
    }
    totalPrice = studentsPrice * group;
    if (group >= 30) {
      discount = totalPrice * 0.15;
      totalPrice = totalPrice - discount;
    }
  } else if (type === "business") {
    switch (day) {
      case "Friday":
        businessPrice = 10.9;
        break;

      case "Saturday":
        businessPrice = 15.6;
        break;

      case "Sunday":
        businessPrice = 16;
        break;
    }
    totalPrice = businessPrice * group;
    if (group >= 100) {
      discount = businessPrice * 10;
      totalPrice = totalPrice - discount;
    }
  } else if (type === "regular") {
    switch (day) {
      case "Friday":
        regularPrice = 15;
        break;

      case "Saturday":
        regularPrice = 20;
        break;

      case "Sunday":
        regularPrice = 22.5;
        break;
    }
    totalPrice = regularPrice * group;
    if (group >= 10 && group <= 20) {
      discount = totalPrice * 0.05;
      totalPrice = totalPrice - discount;
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40, "regular", "Saturday");
