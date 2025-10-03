// ------------------ Object Method and 'this' ------------------
const user = {
    userName: "jay patel",
    price: 333,
    welcome: function () {
        // 'this' refers to the object that calls the method
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this); // Logs the user object
    }
};

// user.welcome();           // jay patel, Welcome to Website
// user.userName = "yash";
// user.welcome();           // yash, Welcome to Website
// console.log(this);        // Refers to global object (window in browser, {} in node)

// ------------------ 'this' in Regular Functions ------------------
// 'this' inside a regular function depends on how function is called

function instagramUser() {
    const userId = "123abc";
    const pass = "123";
    console.log(this);      // In strict mode: undefined, otherwise global object
    console.log(this.pass); // undefined
}
// instagramUser();

// ------------------ 'this' in Function Expressions ------------------
const instagramUserFunc = function () {
    const userId = "123abc";
    const pass = "123";
    console.log(this);      // In strict mode: undefined, otherwise global object
    console.log(this.userId); // undefined
};
// instagramUserFunc();

// ------------------ 'this' in Arrow Functions ------------------
// Arrow functions do not have their own 'this'; they inherit from the surrounding lexical scope
const instagramUserArrow = () => {
    const userId = "123abc";
    const pass = "123";
    console.log(this);       // In node: {}, in browser: window
    console.log(this.userId); // undefined
};
instagramUserArrow();

// ------------------ Arrow Function Syntax ------------------

// 1. With curly braces and return
const arrow1 = (num1, num2) => {
    return num1 + num2;
};

// 2. Without curly braces (implicit return)
const arrow2 = (num1, num2) => num1 + num2;

// 3. Using parentheses for clarity
const arrow3 = (num1, num2) => (num1 + num2);

// 4. Returning an object (wrap in parentheses)
const arrow4 = (num1, num2) => ({ UserName: "jay" });

console.log(arrow4(10, 20)); // { UserName: 'jay' }