// ------------------ Conditional Statements in JavaScript ------------------

// Example 1: Simple if-else
const temp = 39;

if (temp >= 40) {
  console.log("Temperature is High");
} else {
  console.log("Temperature is Low");
}
// Comparison operators: ==, ===, <, >, <=, >=, !=, !==

// Example 2: if-else if-else for multiple conditions
const balance = 1000;

// Avoid single-line if statements for readability
// if (balance < 1200) console.log("Balance is less than 1200");

if (balance <= 500) {
  console.log("Balance is less than 500");
} else if (balance <= 750) {
  console.log("Balance is less than 750");
} else if (balance <= 900) {
  console.log("Balance is less than 900");
} else {
  console.log("Balance is less than 1200");
}
// Checks multiple ranges in order for clear logic

// Example 3: Using logical AND (&&)
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("Continue your shopping");
}
// Executes only if both conditions are true

// Example 4: Using logical OR (||)
const googleEmail = true;
const appleEmail = true;

if (appleEmail || googleEmail) {
  console.log("Continue your shopping");
}
// Executes if at least one condition is true