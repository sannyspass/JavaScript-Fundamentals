/*3. Редица числа 2k+1

Напишете програма, която чете число n, въведено от потребителя и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. 
Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.*/

function rowNumbers(input) {
  let num = Number(input.shift());
  let output = 1;

  while (output <= num) {
    console.log(output);
    output = output * 2;
    output++;
  }
}

rowNumbers([31]);
