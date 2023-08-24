/*3. Обръщение според възраст и пол

Да се напише конзолна програма, която прочита възраст (реално число) и пол ('m' или 'f'), въведени от потребителя, и отпечатва обръщение измежду следните:

· "Mr." – мъж (пол 'm') на 16 или повече години

· "Master" – момче (пол 'm') под 16 години

· "Ms." – жена (пол 'f') на 16 или повече години

· "Miss" – момиче (пол 'f') под 16 години*/

function greeting(input) {
  let age = Number(input.shift());
  let gender = input.shift();

  if (gender == "f") {
    if (age >= 16) {
      console.log("Mrs.");
    } else {
      console.log("Miss");
    }
  }

  if (gender == "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  }
}

greeting([23, "m"]);
