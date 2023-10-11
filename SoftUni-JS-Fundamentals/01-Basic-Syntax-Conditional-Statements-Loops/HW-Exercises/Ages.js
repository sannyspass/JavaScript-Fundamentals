/*1. Ages

Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The input comes as single number parameter. The bounders are:

· 0-2 – baby;

· 3-13 – child;

· 14-19 – teenager;

· 20-65 – adult;

· >=66 – elder;

· All the values are inclusive.*/

function ageCalculator(ageNum) {
  let personAge = Number(ageNum.shift());

  /* switch (personAge) {
    case (personAge <= 2):
      console.log("baby");
      break;

    case (personAge >= 3 && personAge <= 13):
      console.log("child");
      break;

    case (personAge >= 14 && personAge <= 19):
      console.log("teenager");
      break;

    case (personAge >= 20 && personAge <= 65):
      console.log("adult");
      break;

    case (personAge >= 66):
      console.log("elder");
      break;
  }*/

  if (personAge <= 2) {
    console.log("baby");
  } else if (personAge >= 3 && personAge <= 13) {
    console.log("child");
  } else if (personAge >= 14 && personAge <= 19) {
    console.log("teenager");
  } else if (personAge >= 20 && personAge <= 65) {
    console.log("adult");
  } else if (personAge >= 66) {
    console.log("elder");
  } else {
    console.log("error");
  }
}

ageCalculator([20]);
