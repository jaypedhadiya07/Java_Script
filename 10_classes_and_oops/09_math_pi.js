// -------------------------------------------------------------
// Inspecting built-in property descriptors using Math.PI
// -------------------------------------------------------------

// Retrieve and log the property descriptor of Math.PI.
// This shows how JavaScript defines built-in constants —
// they are typically non-writable, non-enumerable, and non-configurable.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*
Example Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// Trying to override Math.PI will fail silently (no effect in non-strict mode).
// In strict mode, this would throw a TypeError.
// console.log(Math.PI);
// Math.PI = 4; // ❌ No effect, because "writable" is false.
// console.log(Math.PI);

// -------------------------------------------------------------
// Custom object example: using property descriptors manually
// -------------------------------------------------------------
const User = {
  userName: "jay",
  rollNumber: 50,

  // A method demonstrating how `this` refers to the current object.
  name: function () {
    console.log(this.userName);
  },
};

// Inspect the descriptor of the `userName` property before any changes.
const userDescriptor = Object.getOwnPropertyDescriptor(User, "userName");
console.log(userDescriptor);
/*
Output before modification:
{
  value: 'jay',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// -------------------------------------------------------------
// Redefining property attributes with Object.defineProperty()
// -------------------------------------------------------------
//
// Making `userName` immutable and protected:
//  - writable: false     → value cannot be reassigned
//  - configurable: false → cannot be deleted or redefined later
//  - enumerable: true    → still appears in Object.entries()
Object.defineProperty(User, "userName", {
  writable: false,
  configurable: false,
  // enumerable: false // Uncomment to hide from loops like Object.entries()
});

// -------------------------------------------------------------
// Test property immutability and configurability
// -------------------------------------------------------------

// Attempt to change the value → fails silently (no effect)
User.userName = "yash";

// Attempt to delete the property → fails silently (cannot delete non-configurable property)
delete User.userName; // ❌ Won’t delete because configurable: false

// -------------------------------------------------------------
// Display enumerable, non-function properties
// -------------------------------------------------------------

// Object.entries() only lists enumerable properties.
// If enumerable = false, `userName` won’t appear below.
for (const [key, value] of Object.entries(User)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}

// Confirm that userName remains unchanged and undeleted.
console.log(User.userName);
/*
Expected Output:
userName: jay
rollNumber: 50
*/
// If enumerable were false, userName wouldn't appear in the loop output.