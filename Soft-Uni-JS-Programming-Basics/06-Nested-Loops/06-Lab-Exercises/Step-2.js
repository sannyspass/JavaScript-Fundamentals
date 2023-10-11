function stepTwo(input) {
    let userNumber = Number(input[0]);

    for (let i = 0; i <= userNumber; i += 2) {
        let result = Math.pow(2,i);
        console.log(result) 
    }
}

stepTwo([7]);