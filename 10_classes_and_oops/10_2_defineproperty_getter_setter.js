// -------------------------------------------------------------
// Constructor function demonstrating getters and setters
// using Object.defineProperty (ES5 style)
// -------------------------------------------------------------
function User(userName, email) {
  // Internal (private) properties using convention _propertyName
  this._userName = userName;
  this._email = email;

  // ---------------------------
  // Define 'userName' property with getter and setter
  // ---------------------------
  Object.defineProperty(this, "userName", {
    // Getter returns the username in uppercase
    get: function () {
      return this._userName.toUpperCase();
    },
    // Setter assigns a new value to the internal property
    set: function (value) {
      this._userName = value;
    },
    // this property add by default
    enumerable: true, // will appear in loops like Object.entries()
    configurable: true, // can redefine or delete the property later
  });

  // ---------------------------
  // Define 'email' property with getter and setter
  // ---------------------------
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
    // this property add by default
    enumerable: true,
    configurable: true,
  });
}

// -------------------------------------------------------------
// Create a new User instance and test getters/setters
// -------------------------------------------------------------
const firstUser = new User("jay", "jay@gmail.com");

// Accessing getter values
console.log(firstUser.userName); // Output: "JAY"
console.log(firstUser.email); // Output: "JAY@GMAIL.COM"
console.log(firstUser._email); // Output: "jay@gmail.com"

// Inspect property descriptor for 'userName'
console.log(Object.getOwnPropertyDescriptor(firstUser, "userName"));
/*
Example Output:
{
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
}
*/