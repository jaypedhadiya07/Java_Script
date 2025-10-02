// ------------------ Numbers ------------------

let value = 123; // Primitive number
// console.log(value);

let valueTwo = new Number(123); // Number object (rarely used)
// console.log(valueTwo);        // [Number: 123]

let balance = new Number(123.8925);

// Convert to string and get length
console.log(balance.toString().length); // 8 (includes digits + decimal point)

// toFixed() → format number to fixed decimal places
console.log(balance.toFixed(2)); // 123.89

// toPrecision() → format number to specified total digits
console.log(balance.toPrecision(3)); // 123

// toLocaleString() → format number for locale (Indian numbering)
let hundreds = 10000000000;
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,00,000

// ------------------ Math Object ------------------

console.log(Math); // All Math methods and constants

console.log(Math.abs(-4)); // Absolute value: 4
console.log(Math.round(45.83)); // Round to nearest integer: 46
console.log(Math.ceil(45.19)); // Round up: 46
console.log(Math.floor(45.89)); // Round down: 45

console.log(Math.min(2, 7, 9, 10, 78)); // Minimum: 2
console.log(Math.max(2, 7, 9, 10, 78)); // Maximum: 78

// Random numbers
console.log(Math.random()); // 0 <= x < 1
console.log(Math.random() * 10 + 1); // 1 <= x < 11
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10 integer

// Random number between min and max (inclusive)
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20