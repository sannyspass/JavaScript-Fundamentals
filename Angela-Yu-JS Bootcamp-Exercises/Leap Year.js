  //divide by 4 - leap
  //divide by 100 - not leap + divide by 400 - leap
  //divide by 400 - leap

  function isLeap(year) {
           
    if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
      console.log("Leap year.");
    } else if (year % 100 === 0) {
      console.log("Leap year.");
    } else if (year % 4 !== 0 && year % 400 !== 0) {
      console.log("Not leap year.");
    }
  
  }
  
  isLeap(2013);




