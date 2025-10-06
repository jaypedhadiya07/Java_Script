// ================================
// Example 1: Functions as Objects
// ================================

// Define a simple function that multiplies a number by 2
function multiPlyBy2(number) {
    return number * 2;
}

// Adding a custom property to the function itself
multiPlyBy2.power = 2;

// Logging outputs
console.log(multiPlyBy2(5));       // Calls the function → 10
console.log(multiPlyBy2.power);    // Accesses custom property → 2
console.log(multiPlyBy2.prototype); // Access the prototype → {} (functions have a prototype object)

// ======================================
// Example 2: Constructor Function & Prototype
// ======================================

// Constructor function to create new User objects
function CreateUser(userName, score) {
    this.userName = userName;  // Assign username property
    this.score = score;        // Assign score property
    return this;               // Optional: new automatically returns 'this' if nothing else is returned
}

// Adding shared methods via prototype (efficient memory usage)
CreateUser.prototype.increment = function () {
    this.score++; // Increment the user's score
};

CreateUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`); // Display current score
};

// Create instances using 'new' keyword
const chai = new CreateUser("Chai", 25);
const tea = new CreateUser("Tea", 250);

// Log objects to inspect properties
console.log(chai); // Output: CreateUser { userName: 'Chai', score: 25 }
console.log(tea);  // Output: CreateUser { userName: 'Tea', score: 250 }

// Use prototype methods
tea.increment();   // tea.score becomes 251
chai.increment();  // chai.score becomes 26

tea.printMe();     // Score is 251
chai.printMe();    // Score is 26

// ========================================
// Behind the Scenes with 'new' Keyword
// ========================================

/*
1. A new object is created:
   The 'new' keyword starts the creation of a fresh JavaScript object.

2. Prototype linking:
   The new object is linked to the constructor's prototype,
   giving access to shared methods (increment, printMe).

3. Constructor invocation:
   The constructor function is called with 'this' bound to the new object.
   Properties like userName and score are assigned.

4. Object return:
   If the constructor does not return a non-primitive object explicitly,
   the new object created by 'new' is automatically returned.
*/