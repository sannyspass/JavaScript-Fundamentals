/*4. Reverse an Array of Strings

Write a program which receives an array of strings (space separated values). 
Your task is to reverse it and print its elements. Swap elements.*/

function reverseStrings(inputArray) {
  console.log(inputArray.reverse().join(" "));
}

reverseStrings(["a", "b", "c", "d", "e"]);
