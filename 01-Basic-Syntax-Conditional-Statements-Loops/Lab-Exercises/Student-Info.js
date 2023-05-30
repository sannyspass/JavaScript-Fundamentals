/*6. Student Information

You will be given 3 parameters – student name (string), age (number) and average grade (number). 
Your task is to print all the info about the student in the following format. 
The grade should be formatted to the second decimal point:

"Name: {student name}, Age: {student age}, Grade: {student grade}".

Examples

Input Output

'John', 15, 5.54678 Name: John, Age: 15, Grade: 5.55*/

function studentInfo(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

studentInfo("Sanny", 16, 5);