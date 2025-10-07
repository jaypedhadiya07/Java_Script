// -------------------------------------------------------------
// Prototype object with internal properties and getter/setter
// -------------------------------------------------------------
const user = {
  // Internal "private" properties (conventionally prefixed with _)
  _userName: "jay",
  _email: "jay@gmail.com",

  // Getter for email: transforms stored value to uppercase
  get email() {
    return this._email.toUpperCase();
  },

  // Setter for email: updates the internal property
  set email(value) {
    this._email = value;
  },
};

// -------------------------------------------------------------
// Create a new object inheriting from `user` prototype
// -------------------------------------------------------------
const firstUser = Object.create(user);

// Access the getter from the prototype
console.log(firstUser.email); // Output: "JAY@GMAIL.COM"

// Access the raw internal property directly (inherited from prototype)
console.log(firstUser._email); // Output: "jay@gmail.com"

// -------------------------------------------------------------
// Notes:
// 1. `firstUser` does not have its own `_email` property yet.
//    It accesses `_email` from the prototype.
// 2. If you assign `firstUser._email = "new@gmail.com"`, it will shadow the prototype property.
// 3. Getter/setter `email` is inherited from the prototype, so `firstUser.email` will use it automatically.
// -------------------------------------------------------------