function lifeInWeeks(age) {
    let maxYears = 90 - age;
        let days =  maxYears * 365;
        let weeks = maxYears * 52;
        let months = maxYears * 12;
        age = age / 90
        console.log("You have " + days + " days " + weeks + " weeks " + months + " months left.");
    }   
    lifeInWeeks(25);