/*6. Познай паролата

Да се напише програма, която получава парола (един ред с произволен текст), получено като аргумент и проверява, дали съвпада с фразата "s3cr3t!P@ssw0rd". 
При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!".*/


function guessPassword (input) {
    let realPassword = "s3cr3t!P@ssw0rd";
    let receivedPassword = input.shift();

    if (receivedPassword === realPassword) {
        console.log("Welcome!");
    } else if (receivedPassword !== realPassword) {
        console.log("Invalid password!")
    } else {
        console.log("Unknown.")
    }
}

guessPassword(["s3cr3t!P@ssw0rd"]);