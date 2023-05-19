// Number functions

let myNumber = 42.3698273649812764982648;

// toFixed
const fixed = myNumber.toFixed(2);
// console.log("Fixed number: ", myNumber, fixed);

const numberString = myNumber.toString();
// console.log("String number", myNumber, numberString);

/////////////////////

// String functions

// trim()
let myString = "Hola c:";
let trimString = myString.trim();
console.log(myString);
// console.log("Length: ", myString.length);
// console.log("Trim length: ", trimString.length);

// replace()
let replacedString = myString.replace("c:", "c':").replace("Hola", "Hi!");


// concat()
let concatString = myString.concat(", Como estas?");
let addedString = myString + ", Como estas?";

// charAt()
let otherString = "Hola";
let selectedChar = otherString.charAt(otherString.length - 1);
console.log(selectedChar);

// Inicio y fin de strings 'endsWith' 'startWith'
const resultEnds = myString.endsWith("c:!");
const resultStarts = myString.startsWith("Hola");

console.log("Result ends: ", resultEnds);
console.log("Result Starts: ", resultStarts);
