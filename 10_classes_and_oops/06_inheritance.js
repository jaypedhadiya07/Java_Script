// ========================================
// JavaScript Classes and Inheritance (ES6)
// ========================================

// ---------- Base Class (Parent) ----------
class User {
  constructor(userName) {
    this.userName = userName; // property initialization
  }

  // Instance method available to all User objects
  logMe() {
    console.log("UserName is:", this.userName);
  }
}

// ---------- Derived Class (Child) ----------
class Teacher extends User {
  constructor(userName, email, password) {
    // 'super()' calls the parent class constructor
    super(userName); // initializes 'userName' property from the parent class
    this.email = email;
    this.password = password;
  }

  // Child class–specific method
  userCreatedByTeacher() {
    console.log(`User added by Teacher: ${this.userName}`);
  }
}

// ---------- Creating Instances ----------
const firstUser = new User("jay");
const secondUser = new Teacher("jay", "jay@gmail.com", 123);

// Accessing parent class method
firstUser.logMe(); // Output: UserName is: jay

// Accessing child class method
// firstUser.userCreatedByTeacher(); // Error: not available for base User class
secondUser.userCreatedByTeacher(); // Output: User added by Teacher: jay
secondUser.logMe(); // Inherited from User class

// ---------- instanceof Operator ----------
// Checks whether an object is an instance of a class (or subclass)
console.log(firstUser instanceof User); // true
console.log(firstUser instanceof Teacher); // false (User does not inherit from Teacher)

console.log(secondUser instanceof Teacher); // true
console.log(secondUser instanceof User); // true (Teacher inherits from User)

/*
Explanation of what's happening:

1. The 'User' class defines common properties and methods for all users.
2. The 'Teacher' class extends 'User', inheriting its properties and methods.
3. The 'super()' keyword calls the constructor of the parent class.
4. The 'instanceof' operator confirms inheritance relationships.
5. Methods and properties are shared through the prototype chain.

Prototype Chain (simplified):
secondUser --> Teacher.prototype --> User.prototype --> Object.prototype
*/