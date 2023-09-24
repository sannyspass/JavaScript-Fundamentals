/* 4. Сумиране на гласните букви

Да се напише програма, която получава текст (стринг) и изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:

буква a e i o u

стойност 1 2 3 4 5 */

function vowelSum(input) {
  let text = String(input.shift()).split("-");

  let wholeSum = 0;

  /*for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      wholeSum += 1;
    } else if (text[i] === "e") {
      wholeSum += 2;
    } else if (text[i] === "i") {
      wholeSum += 3;
    } else if (text[i] === "o") {
      wholeSum += 4;
    } else if (text[i] === "u") {
      wholeSum += 5;
    }
  }*/
  console.log(text);
  text.forEach(letter => {
    if (letter === "a") {
      wholeSum += 1;
    } else if (letter === "e") {
      wholeSum += 2;
    } else if (letter === "i") {
      wholeSum += 3;
    } else if (letter === "o") {
      wholeSum += 4;
    } else if (letter === "u") {
      wholeSum += 5;
    }
  });


  console.log(wholeSum);
}

vowelSum(["h-e-l-l-o"]);

