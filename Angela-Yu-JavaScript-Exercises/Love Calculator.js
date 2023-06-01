let user1 = prompt("What's your name?");
let user2 = prompt("What's your partner's name?")

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore < 50) {
    alert(user1 + " and " + user2 + "! Your love is " + loveScore + "%. You need to work on your relationship.")
} else if (loveScore > 50) {
    alert(user1 + " and " + user2 + "! Your love is " + loveScore + "%. You are in a strong, loving relationship.")
}