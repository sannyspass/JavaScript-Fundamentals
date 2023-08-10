/*1. Проверка за отлична оценка

Първата задача от тази тема е да се напише конзолна програма, която чете оценка, получена като аргумент и отпечатва "Excellent!", ако оценката е 5.50 или по-висока.*/

function gradeCheck(input) {
  let grade = Number(input.shift());
  if (grade >= 5.5) {
    console.log("Excellent!");
  } else {
    console.log("Not excellent.");
  }
}

gradeCheck([5.5]);
