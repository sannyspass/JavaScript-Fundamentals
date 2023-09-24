/*2. Всички латински букви

Напишете програма, която отпечатва всички букви от латинската азбука: a, b, c, …, z.*/

function alphabet() {
  for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
  }
}

alphabet();
