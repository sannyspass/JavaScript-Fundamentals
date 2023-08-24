/*6. Плод или зеленчук?

Да се напише програма, която приема входен аргумент input и от него изважда име на продукт, и проверява дали е плод или зеленчук.

· Плодовете "fruit" имат следните възможни стойности: banana, apple, kiwi, cherry, lemon и grapes

· Зеленчуците "vegetable" имат следните възможни стойности: tomato, cucumber, pepper и carrot

· Всички останали са "unknown"

Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт.*/

function produceCheck(input) {
  let produce = input.shift();

  if (
    produce === "banana" ||
    produce === "apple" ||
    produce === "kiwi" ||
    produce === "cherry" ||
    produce === "lemon" ||
    produce === "grapes"
  ) {
    console.log("It's a FRUIT!");
  } else if (
    produce === "tomato" ||
    produce === "cucumber" ||
    produce === "pepper" ||
    produce === "carrot"
  ) {
    console.log("It's a VEGGIE!");
  } else {
    console.log("Unknown.");
  }
}

produceCheck(["cake"]);
