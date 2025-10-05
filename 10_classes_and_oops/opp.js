// ========================================
// Object Creation in JavaScript
// ========================================
// This example demonstrates two common ways to create objects in JavaScript:
// 1. Using object literals.
// 2. Using constructor functions (with the 'new' keyword).
// It also highlights how 'this' behaves differently in each context.
// ========================================

// ---------- Object Literal Example ----------
const user = {
  username: "jay",
  loginCount: 8,
  signedIn: true,

  // Method that logs the current object context (the object itself)
  getUserDetails: function () {
    console.log(this); // 'this' refers to the 'user' object here
  },
};

// Example usage (commented out for clarity):
// user.getUserDetails(); // would log the 'user' object itself
// console.log(this);     // In Node.js, 'this' refers to an empty object ({}),
//                        // while in a browser, it refers to the global window object.

// ---------- Constructor Function Example ----------
// Constructor functions are used to create multiple objects with similar structure.
// By convention, constructor function names start with a capital letter.
function User(username, loginCount, signedIn) {
  // Assign properties to the new object being created
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  // Define a method for each instance
  this.greeting = function () {
    console.log(`Hello ${this.username}`);
  };

  // Implicit behavior:
  // When using 'new', JS automatically returns 'this' (the new object),
  // so an explicit 'return this' is optional.
  // Without 'new', 'this' would refer to the global object (or undefined in strict mode).
}

// ---------- Incorrect Usage (Without 'new') ----------
// If you call the constructor without 'new', it does not create a new object.
// Instead, 'this' refers to the global object, which causes overwriting issues.
// Example:
// const userOne = User("jay", 8, true);
// const userTwo = User("yash", 12, false);
// console.log(userOne); // undefined
// console.log(userTwo); // undefined
// Both calls modify the same (global) context, leading to unexpected behavior.

// ---------- Correct Usage (With 'new') ----------
const userOne = new User("jay", 8, true); // Creates a new, independent object
const userTwo = new User("yash", 12, false); // Creates another new object

// Displaying the created user objects
console.log(userOne); // Output: User { username: 'jay', loginCount: 8, signedIn: true, greeting: [Function] }
console.log(userTwo); // Output: User { username: 'yash', loginCount: 12, signedIn: false, greeting: [Function] }

// Checking the constructor reference
console.log(userTwo.constructor); // Points to the User function (constructor definition)

// ---------- Summary ----------
// 1. Object literals are great for single, static objects.
// 2. Constructor functions (used with 'new') are ideal for creating multiple instances.
// 3. The 'this' keyword behaves differently depending on how a function is called:
//    - In object methods → refers to that object.
//    - In constructor functions (with 'new') → refers to the new instance.
//    - In normal functions (without 'new') → refers to the global object (or undefined in strict mode).