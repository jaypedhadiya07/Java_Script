// ========================================
// Static Methods in JavaScript Classes
// ========================================

// ---------- Base Class ----------
class User {
  constructor(userName) {
    this.userName = userName;
  }

  // A static method belongs to the class itself, not to its instances
  static createId() {
    return `123`;
  }
}

// Creating an instance of User
const firstUser = new User("jay");

console.log(firstUser);
// Output: User { userName: 'jay' }

// Accessing static method via instance -> ❌ Error
// console.log(firstUser.createId()); // TypeError: firstUser.createId is not a function

// Accessing static method via class name -> ✅ Works
console.log(User.createId()); // Output: 123

// ---------- Derived Class ----------
class Teacher extends User {
  constructor(userName, email) {
    super(userName); // call parent constructor
    this.email = email;
  }
}

// Creating an instance of the derived class
const secondUser = new Teacher("yash", "yash@gmail.com");

console.log(secondUser);
// Output: Teacher { userName: 'yash', email: 'yash@gmail.com' }

// Accessing static method via instance -> ❌ Error
// console.log(secondUser.createId()); // TypeError

// Accessing static method via class name -> ✅ Works (inherited)
console.log(Teacher.createId()); // Output: 123

/*
====================
   EXPLANATION
====================

1. **Static Methods**
   - Declared using the 'static' keyword.
   - Are called on the *class itself*, not on instances.
   - Often used for utility/helper functions (e.g., database IDs, validators).

2. **Instance vs. Class Context**
   - `firstUser.createId()` ❌ → Instance cannot access static methods.
   - `User.createId()` ✅ → Called directly on the class.

3. **Inheritance**
   - Subclasses (like 'Teacher') inherit static methods from their parent class.
   - So `Teacher.createId()` works, even though it’s defined in 'User'.

4. **Real-World Analogy**
   - Think of static methods as “tools” belonging to the *class factory*, not individual “products” (instances) it makes.

Prototype Relationship (simplified):
   Teacher --> User --> Function --> Object

Static method inheritance:
   Teacher.__proto__ === User  → ✅ allows Teacher.createId() to work.
*/