/*2. Right Place

You will receive 3 parameters (string, char, string). First string will be a word with a missing char replaced with a underscore '_' 
You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.

If they are equals you should print "Matched", otherwise print "Not Matched".*/

function place(wrongString, char, rightString) {
  let result = wrongString.replace("_", char);

  if (result === rightString) {
    console.log("Matched.");
  } else {
    console.log("Not matched.");
  }
}

place("Str_ng", "i", "String");
