// Initial value as a string
let score = "jay";

// typeof can be used with or without parentheses
console.log(typeof score);   // string
console.log(typeof(score));  // string

// Convert string to number
let valueInNumber = Number(score);  // Invalid number will produce NaN
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);         // NaN

/*
 Type conversion rules for Number():
 "33"     => 33
 "33abc"  => NaN
 true     => 1
 false    => 0
 null     => 0
 undefined => NaN
*/

// Convert value to boolean
let isLoggedIn = "jay";
let booleanIsLoggedIn = Boolean(isLoggedIn);  
console.log(booleanIsLoggedIn);  // true

/*
 Boolean conversion rules:
 1       => true
 0       => false
 ""      => false
 non-empty string => true
*/

// Convert number to string
let someNumber = 33;
let stringNumber = String(someNumber);  // "33"
console.log(stringNumber);              // "33"
console.log(typeof stringNumber);       // string
