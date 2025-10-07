// -------------------------------------------------------------
// Class demonstrating getters and setters in JavaScript
// -------------------------------------------------------------
class User {
  constructor(userName, email) {
    // Initialize internal (private) properties
    this.userName = userName; // setter will handle _userName
    this.email = email; // setter will handle _email
  }

  // ---------------------------
  // Getter and Setter for userName
  // ---------------------------
  get userName() {
    // Returns a transformed version of the username
    // Using _userName to store the internal value
    return `Encrypted USERNAME: ${this._userName.toUpperCase()}`;
  }

  set userName(value) {
    // Assigns value to internal property
    this._userName = value;
  }

  // ---------------------------
  // Getter and Setter for email
  // ---------------------------
  get email() {
    // Returns a transformed version of the email
    return `Encrypted EMAIL: ${this._email.toUpperCase()}`;
  }

  set email(value) {
    // Assigns value to internal property
    this._email = value;
  }
}

// -------------------------------------------------------------
// Create a new instance of User and test getters
// -------------------------------------------------------------
const firstUser = new User("jay", "jay@gmail.com");

// Accessing getters
console.log(firstUser.userName); // Encrypted USERNAME: JAY
console.log(firstUser.email); // Encrypted EMAIL: JAY@GMAIL.COM