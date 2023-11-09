/*2. Day of Week

Write a program which receives a number and prints the corresponding name of the day of week.

If the number is NOT a valid day, print 'Invalid day!'.*/

function dayOfWeek(input) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (input >= 1 && input <= 7) {
    console.log(days[input - 1]);
  } else {
    console.log("Invalid!");
  }
}

/*function dayOfWeek(input) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (input >= 1 && input <= 7) {
    switch (input) {
      case 1:
        console.log(days[0]);
        break;
      case 2:
        console.log(days[1]);
        break;
      case 3:
        console.log(days[2]);
        break;
      case 4:
        console.log(days[3]);
        break;
      case 5:
        console.log(days[4]);
        break;
      case 6:
        console.log(days[5]);
        break;
      case 7:
        console.log(days[6]);
        break;
    }
  } else {
    console.log("Invalid day!");
  }
}*/

dayOfWeek(1);

/*function dayOfWeek(input) {
    let number = Number(input.shift());

    switch (number) {
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
    }

    if (number >= 8) {
        console.log("Invalid day!");
    }
}

dayOfWeek([1]);*/
