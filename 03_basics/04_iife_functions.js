// ------------------ Immediately Invoked Function Expressions (IIFE) ------------------

// 1. IIFE with a function name
(function iifeUses() {
    console.log(`DATABASE CONNECTED`);
})(); 
// Explanation: Function is declared and immediately executed. 
// The semicolon is necessary if this code follows other statements to avoid errors.

// 2. IIFE with an arrow function (no function name)
(() => {
    console.log(`DATABASE CONNECTED`);
})(); 
// Explanation: Arrow function wrapped in parentheses and immediately invoked.
// Useful for code that needs to run immediately without polluting global scope.

// 3. IIFE with parameters
((name) => {
    console.log(`${name} YOUR DATABASE IS CONNECTED`);
})("jay"); 
// Explanation: You can pass arguments directly into an IIFE.
// Output: jay YOUR DATABASE IS CONNECTED
