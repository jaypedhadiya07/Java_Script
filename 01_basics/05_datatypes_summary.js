// JavaScript is a dynamically typed language.
// Variable types are checked at runtime, so you don't need to declare types explicitly.

/*
 Example:
 let myVariable = 10;     // Number
 myVariable = "hello";    // Now it's a string (allowed in JS)
*/

// ------------------ Primitive Types ------------------
// 7 Primitive types: Boolean, undefined, null, Number, Symbol, BigInt, String

const Bool = true;          // Boolean
let undefinedVar;           // Undefined (declared but no value)
const Temp = null;          // Null (typeof returns object due to JS quirk)
const NumberVal = 123;      // Number
const Ex1 = Symbol(123);    // Symbol (unique and immutable)
const Ex2 = Symbol(123);    // Symbol
// console.log(Ex1 == Ex2); // false, symbols are unique
const BigNumber = 1238465n; // BigInt (for very large integers)
const name = "jay";         // String

// ------------------ Reference (Non-Primitive) Types ------------------
// Array, Object, Function

let Heroes = ["saktiman", "nagraj", "doga"];  // Array (object)
let obj = {
    name: "jay",
    age: 19,
};  // Object

function printName(name) {                     // Function
    console.log("Hello, " + name + "! Nice to meet you.");
}

// console.log(typeof Heroes);   // object
// console.log(typeof obj);      // object
// console.log(typeof printName);// function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Primitive types => stored in Stack (copied by value)
// Non-primitive types (objects, arrays, functions) => stored in Heap (copied by reference)

// ------------------ Primitive Example (Stack) ------------------
/*
let Name = "jay";
let SecondName = Name;  // Copy by value
SecondName = "patel";   // Only SecondName changes, Name remains the same

console.log(SecondName); // "patel"
console.log(Name);       // "jay"
*/

// ------------------ Reference Example (Heap) ------------------
/*
let UserOne = {
    Email: "jay@gmail.com",
    Upi: "51@boi.in"
};

let UserTwo = UserOne;   // Copy by reference
UserTwo.Email = "patel's.com";  // Modifies both UserTwo and UserOne

console.log(UserOne.Email); // "patel's.com"
console.log(UserTwo.Email); // "patel's.com"
*/
