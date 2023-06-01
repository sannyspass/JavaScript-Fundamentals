/* 8. Foreign Languages

Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: 
English is spoken in England and USA; Spanish is spoken in Spain, Argentina and Mexico; for the others, we should print "unknown".

Input

You will receive a single country name.

Output

Print the language, which the country speaks, or if it is unknown for your program, print "unknown".*/


function solve(country) {
    switch (country) {
        case "USA", "UK", "AUS", "SA", "NZ":
            console.log("The spoken language is English.");
            break;

        case "Spain":
        case "Argentina":
            console.log("The spoken language is Spanish.");
            break;

        default:
            console.log("Unknown.");
            break;

    }
}

solve("Argentina");