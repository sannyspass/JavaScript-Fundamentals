/*1. Ден от седмицата

Напишете програма, която получава цяло число и отпечатва ден от седмицата (на английски език), в граници [1...7] или отпечатва "Error" в случай, че въведеното число е невалидно.*/

function daysWeek(input) {
  let dayNumber = Number(input.shift());

  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;

    case 2:
      console.log("Tuesday");
      break;

    case 3:
      console.log("Wednesday");
      break;

    case 4:
      console.log("Thursday");
      break;

    case 5:
      console.log("Friday");
      break;

    case 6:
      console.log("Saturday");
      break;

    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("Error.");
      break;
  }
}

daysWeek([5]);
