var name = prompt("What's your name?");
var first = name.slice(0,1);
var upperFirst = first.toUpperCase();
var rest = name.slice(1,name.length);
rest = rest.toLowerCase();
var capitalizedName = upperFirst + rest;


alert("Hello, " + capitalizedName);