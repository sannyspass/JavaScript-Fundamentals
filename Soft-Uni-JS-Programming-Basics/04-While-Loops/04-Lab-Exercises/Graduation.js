/*7. Завършване

Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. 
Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. Ако оценката му е под 4.00, той ще повтори класа.
При успешно завършване на 12-ти клас да се отпечата:

"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"

Стойността трябва да бъде форматирана до втория знак след десетичната запетая.*/

function graduationGrades(input) {
  let studentName = String(input.shift());
  let totalGrades = 0;
  let counter = 0;

  while (counter < 12) {
    let yearlyGrades = Number(input.shift());

    if (yearlyGrades > 2.0) {
      totalGrades += yearlyGrades;
      counter++;
    } else if (yearlyGrades <= 2.0) {
      console.log(`${studentName} has been excluded at ${counter}th grade.`);
      break;
    } else {
      console.log(`Fail.`);
    }
  }
  totalGrades = totalGrades / 12;

  if (totalGrades > 4.0) {
    console.log(
      `${studentName} graduated. Average grade: ${totalGrades.toFixed(2)}`
    );
  } else {
    console.log(
      `${studentName} failed. Average grade throughout the years: ${totalGrades.toFixed(
        2
      )}`
    );
  }
}

graduationGrades(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3]);

//graduationGrades(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);

//can stop while loops with break;
