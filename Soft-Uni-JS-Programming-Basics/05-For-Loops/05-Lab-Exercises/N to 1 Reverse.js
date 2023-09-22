/*9. Числата от N до 1 в обратен ред

Напишете програма, която чете цяло положително число n, въведено от потребителя, и печата числата от n до 1 в обратен ред (от най-голямото към най-малкото).*/

function numbersReverse (input) {
    let n = Number(input.shift());

    for (let i = n; i >= n; i--) {
        console.log(i);        
    }
}

numbersReverse([3]);