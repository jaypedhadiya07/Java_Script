// ========================================
// User Object: ES6 Class vs Constructor Function
// ========================================

// ---------- Using ES6 Class (Syntactic Sugar) ----------
class UserClass {
  constructor(userName, email, passWord) {
    this.userName = userName;
    this.email = email;
    this.passWord = passWord;
  }

  // Method to "encrypt" password
  encryptPassword() {
    return `${this.passWord}abc`;
  }

  // Method to convert username to uppercase
  changeUsername() {
    return `${this.userName.toUpperCase()}`;
  }
}

// Create an instance
const firstCreatedUser = new UserClass("jay", "jay@gmail.com", 123);
console.log(firstCreatedUser); // UserClass { userName: 'jay', email: 'jay@gmail.com', passWord: 123 }
console.log(firstCreatedUser.encryptPassword()); // 123abc
console.log(firstCreatedUser.changeUsername()); // JAY

// ---------- Behind the Scenes: Constructor Function + Prototype ----------
function User(userName, email, passWord) {
  this.userName = userName;
  this.email = email;
  this.passWord = passWord;
}

// Methods added to the prototype are shared across instances
User.prototype.encryptPassword = function () {
  return `${this.passWord}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.userName.toUpperCase()}`;
};

// Create an instance using the constructor function
const secondCreatedUser = new User("yash", "yash@gmail.com", 123);
console.log(secondCreatedUser); // User { userName: 'yash', email: 'yash@gmail.com', passWord: 123 }
console.log(secondCreatedUser.encryptPassword()); // 123abc
console.log(secondCreatedUser.changeUsername()); // YASH

/*
Key Insights:

1. ES6 Class is syntactic sugar for constructor functions:
   - Methods defined inside the class are automatically placed on the prototype.
   - Behind the scenes, a class behaves like a constructor function + prototype methods.

2. Prototypes:
   - Sharing methods via prototype ensures all instances use the same function in memory.
   - This is memory-efficient compared to defining methods inside the constructor.

3. Instantiation:
   - Both 'new UserClass()' and 'new User()' create new objects with 'this' pointing to that object.
   - 'this' inside methods refers to the instance.

4. Method calls:
   - firstCreatedUser.encryptPassword() calls the method via the prototype chain.
   - secondCreatedUser.encryptPassword() behaves identically.
*/