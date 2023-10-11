/*5. Leap Year

Write a JS function to check whether a year is leap. 
Leap years are either divisible by 4 but not by 100 or are divisible by 400.*/

function leapYear(input) {
  let year = Number(input.shift());

  if (year % 4 === 0 && year % 100 !== 100) {
    console.log(`${year} is a leap year!`);
  } else if (year % 400 === 0) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`Not a leap year.`);
  }
}

leapYear([1984]);
