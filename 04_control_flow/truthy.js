// ------------------ Truthy & Falsy Values in JavaScript ------------------

// Example: Checking if an object exists
const userEmail = {};

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user Email");
}

// Falsy values in JavaScript:
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// Truthy values in JavaScript:
// true, "0", "false", {}, [], function(){}, " "

// ------------------ Checking Empty Arrays and Objects ------------------

const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ------------------ Nullish Coalescing Operator (??) ------------------
// Returns the right-hand value only if the left-hand value is null or undefined

// Examples:
// let a;
// a = 10 ?? 12      // 10
// a = null ?? 10     // 10
// a = undefined ?? 10 // 10
// a = null ?? 10 ?? 12 // 10
// console.log(a);

// ------------------ Ternary Operator ------------------
// Shorthand for if-else: condition ? true : false

// Example:
// const tern = 20;
// tern > 10 ? console.log("true") : console.log("false");
