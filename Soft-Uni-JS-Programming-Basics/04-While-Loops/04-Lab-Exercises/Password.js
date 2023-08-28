/*2. Парола

Напишете програма, която първоначално прочита име и парола на потребителски профил. 
След това чете парола за вход, при въвеждане на грешна парола, потребителя да се подкани да въведе нова парола.*/

function login(input) {
  let userName = input.shift();
  let userPassword = input.shift();
  let data = input.shift();

  while (data !== userPassword) {
    data = input.shift();
  }

  console.log(`Welcome ${userName}!`);
}

login(["Nakov", 1234, 1234]);
