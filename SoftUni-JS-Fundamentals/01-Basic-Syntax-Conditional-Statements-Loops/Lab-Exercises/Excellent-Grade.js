/* 2. Excellent Grade

Write a function that receives a single number and checks if the grade is excellent or not. 
If it is, print "Excellent", otherwise print "Not excellent". */

function solve(grade) {
    if (grade >= 5) {
        console.log("Excellent!");
    } else if (grade >= 2) {
        console.log("Bad.");
    } else {
        console.log("Fail.")
    }
}

solve(1);