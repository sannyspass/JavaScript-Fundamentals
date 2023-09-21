/*3. Поток от символи

Напишете програма, която чете текст(стринг), въведен от потребителя и печата всеки символ от текста на отделен ред.*/

function flow(input) {
  let text = input.shift();

  for (i = 0; i < text.length; i++) {
    let letter = text[i]; //zashto i e v array?
    console.log(letter);
  }
}

flow(["softuni"]);
