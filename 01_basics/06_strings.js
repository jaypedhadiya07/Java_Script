let Name = "jay";
let Repo = 1;

// String concatenation (old way - not recommended)
// console.log("My Name Is " + Name + " And My Repo Is " + Repo);

// Template literals (modern & cleaner)
console.log(`My name is ${Name} and my repo is ${Repo}`);

// ------------------ String Methods ------------------

let GameName = new String("jaypatel");
console.log(GameName.__proto__); // Shows string prototype methods

console.log(GameName.toUpperCase()); // Convert to UPPERCASE
console.log(GameName.charAt(2)); // Character at index 2 -> "y"
console.log(GameName.indexOf("y")); // Index of "y" -> 2

// substring(start, end) → end index not included
const NewString = GameName.substring(0, 3); // "jay"
console.log(NewString);

// slice(start, end) → works like substring, but supports negative indexes
let AnotherString = GameName.slice(0, 3); // "jay"
console.log(AnotherString);

let AnotherSecondString = GameName.slice(-7, 3); // from -7 to index 2
console.log(AnotherSecondString); // "ay"

// trim() → removes extra spaces
let newStringOne = "    jay   ";
console.log(newStringOne); // "    jay   "
console.log(newStringOne.trim()); // "jay"

// replace() → replaces first match
let url = "jay_youtube.com//video//%20//.com";
console.log(url.replace("%20", "-")); // replace "%20" with "-"

// includes() → checks substring presence
console.log(url.includes("jay")); // true

// split(separator) → splits string into array
let split = "jay_patel_07";
console.log(split.split("_")); // ["jay", "patel", "07"]