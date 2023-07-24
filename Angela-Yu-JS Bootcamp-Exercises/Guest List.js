let guestList = ["Josh", "Lia", "Becky", "Angela", "Jupiter"];
let guest = prompt("What's your name?");
if (guestList.includes(guest)) {
  console.log("Welcome, " + guest + "!");
} else {
  console.log("Sorry, you are not invited.");
}
