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

// *********************** Operations ***********************

let value = 3;
let negValue = -value;           // Unary negation: flips sign
// console.log(negValue);

// Basic arithmetic operations
// console.log(2 + 2);  // Addition
// console.log(2 - 2);  // Subtraction
// console.log(2 * 2);  // Multiplication
// console.log(2 ** 3); // Exponentiation (2^3)
// console.log(2 / 3);  // Division
// console.log(2 % 3);  // Modulus (remainder)

// String concatenation
let str1 = "hello";
let str2 = " jay";

let str3 = str1 + str2;  // Concatenate strings
console.log(str3);        // "hello jay"

// Type coercion with strings and numbers
// "1" + 2       => "12"  (number converted to string)
// 1 + "2"       => "12"
// "1" + 2 + 2   => "122"
// 1 + 2 + "2"   => "32"

// Increment operator
let gameCounter = 100;
++gameCounter;          // Pre-increment: increases by 1
console.log(gameCounter); // 101

// Official JS abstract operations reference
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion