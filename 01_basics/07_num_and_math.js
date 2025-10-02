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
