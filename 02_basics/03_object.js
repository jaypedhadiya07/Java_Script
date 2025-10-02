// ------------------ Singleton Object ------------------
// Rarely used; creates an object without a prototype
// const obj = Object.create(null); // No inherited methods like toString or hasOwnProperty

// ------------------ Objects ------------------

// Symbol key (unique property key)
const MySym = Symbol("Key1");

// Object literal with various property types
const JsUser = {
    Name: "jay",                      // string
    Age: 19,                            // number
    "full name": "jay pedhadiya",       // property with space
    [MySym]: "MyKey1",                  // symbol property
    Location: "Rajkot",                 // string
    Email: "jay123@gmil.com",           // string
    isLoggedIn: false,                  // boolean
    LastLogginDays: ["Monday", "Saturday"] // array
};

// ------------------ Accessing Properties ------------------
// console.log(JsUser.Email);           // Output: jay123@gmil.com
// console.log(JsUser["full name"]);   // Output: jay pedhadiya
// console.log(JsUser[MySym]);         // Output: MyKey1

// ------------------ Modifying Properties ------------------
JsUser.Email = "jay123apple.com";
console.log(JsUser.Email); // Output: jay123apple.com

// ------------------ Adding Methods ------------------

// Method without 'this'
JsUser.Greeting = function () {
    console.log("Hello");
};
console.log(JsUser.Greeting());
// Inside console: Hello
// Returns: undefined

// Method using 'this' to access object properties
JsUser.GreetingTwo = function () {
    console.log(`Hello ${this.Name}`);
};
console.log(JsUser.GreetingTwo());
// Inside console: Hello jay
// Returns: undefined