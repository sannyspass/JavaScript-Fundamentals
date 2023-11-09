/*2. Grades

Write a function that receives a grade between 2.00 and 6.00 and prints the corresponding grade in words

· 2.00 - 2.99 - "Fail"

· 3.00 - 3.49 - "Poor"

· 3.50 - 4.49 - "Good"

· 4.50 - 5.49 - "Very good"

· 5.50 - 6.00 - "Excellent"*/

function solveGrades(grade) {
  if (grade >= 2.0 && grade <= 2.99) {
    return "Fail.";
  } else if (grade >= 3.0 && grade <= 3.49) {
    return "Poor.";
  } else if (grade >= 3.5 && grade <= 4.49) {
    return "Good.";
  } else if (grade >= 4.5 && grade <= 5.49) {
    return "Very good.";
  } else {
    return "Excellent.";
  }
}

solveGrades(3.33);
