// ========================================
// Function Borrowing Using `call` in JavaScript
// ========================================

// A function to set the 'userName' property
function setUserName(userName) {
    // 'this' will refer to the object calling this function
    this.userName = userName;
}

// Constructor function for creating new users
function User(userName, email, passWord) {
    // Reuse the setUserName function to initialize 'userName'
    // 'call' sets 'this' to the current object (newly created instance)
    setUserName.call(this, userName);

    // Initialize other properties
    this.email = email;
    this.passWord = passWord;
}

// Creating a new user instance
const createdUser = new User("jay", "jay@gmail.com", 123);

// Display the created object
console.log(createdUser);

/* 
Output:
User { userName: 'jay', email: 'jay@gmail.com', passWord: 123 }

Explanation:
1. The 'new' keyword creates a new object.
2. 'this' inside User() refers to that new object.
3. setUserName.call(this, userName) sets 'userName' property on the new object.
4. Email and password are directly added to the object.
*/