// ========================================
// JavaScript Prototypes, Inheritance & Extensions
// ========================================

// ---------- Strings and Custom Methods ----------
let myName = "jay      "; // String with trailing spaces

// You can get the length including spaces
// console.log(myName.length); 

// Logic to get "true" length (ignoring trailing/leading spaces)
// console.log(myName.trim().length);

// Extending the String prototype to add a custom method
String.prototype.trueLength = function () {
    console.log(`Original string: '${this}'`);
    console.log(`True length (without spaces): ${this.trim().length}`);
};

let anotherUsername = "yash     ";
console.log(anotherUsername.length); // Includes spaces
anotherUsername.trueLength();        // Logs trimmed length
myName.trueLength();                  // Logs trimmed length

// ---------- Arrays and Custom Methods ----------
let array = ["IronMen", "SuperMen"];

// Adding a custom method to all arrays
Array.prototype.heyJay = function () {
    console.log("Jay says hello");
};

// Usage examples:
// array.heyJay(); 

// ---------- Hero Powers Object ----------
let heroPower = {
    IronMen: "super strength, flight, energy projection (repulsors, uni-beam), advanced weaponry, and high-tech defenses",
    SuperMen: "derived from his Kryptonian physiology and exposure to Earth's yellow sun, which supercharges his cells",

    getIronMenPower: function () {
        console.log(`IronMen power is: ${this.IronMen}`);
    },
    getSuperMenPower: function () {
        console.log(`SuperMen power is: ${this.SuperMen}`);
    }
};

// heroPower.getIronMenPower();
// heroPower.getSuperMenPower();

// ---------- Object Prototype Extensions (Not Recommended in Production) ----------
// Adding a method to all objects (inherited by every object)
Object.prototype.jay = function () {
    console.log("Jay is present in all objects");
};

// Example usage
// heroPower.jay(); 
// array.jay();

// ---------- Inheritance Using Prototypes ----------
const User = {
    userName: "jay",
    rollNumber: 50
};

const teacher = {
    isMakeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport // Inherit from TeachingSupport
};

// Setting up prototype chain
teacher.__proto__ = User;               // teacher inherits from User
Object.setPrototypeOf(TeachingSupport, teacher); // TeachingSupport inherits from teacher

// Accessing inherited properties
// console.log(teacher.userName);           // 'jay'
// console.log(TASupport.isAvailable);      // false
// console.log(TeachingSupport.isMakeVideo); // true
// console.log(TeachingSupport.userName);    // 'jay'
// console.log(TASupport.userName);          //'jay'