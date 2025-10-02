// ------------------ Simple Function ------------------
function SayName() {
    console.log("j");
    console.log("a");
    console.log("y");
}
SayName(); 
// Output:
// j
// a
// y

// ------------------ Function Without Return ------------------
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumber(10,20); 
// console.log("result", result); // result undefined because function has no return

// ------------------ Function With Return ------------------
function addTwoNumber(number1, number2) {
    return number1 + number2;
}
const result = addTwoNumber(10, 20); 
console.log("result", result); // result 30

// Handles cases like null or undefined
console.log(addTwoNumber(10, null)); // 10 (null is treated as 0 in addition)

// ------------------ Function With Default Parameter ------------------
function loginUserMessage(username = "jay") { // default value = "jay"
    if (!username) { // checks for falsy values like "", null, undefined
        console.log("Please Enter Your Name");
    }
    return `${username} Just Logged In!`;
}
console.log(loginUserMessage()); // jay Just Logged In!
console.log(loginUserMessage("yash")); // yash Just Logged In!

// ------------------ Function With Object Parameter ------------------
const user = {
    itemName: "Book",
    Price: 190
};

function HandleObject(anyObject) {
    console.log(`Item name is ${anyObject.itemName} and its price is ${anyObject.Price}`);
}
HandleObject(user); 
// Output: Item name is Book and its price is 190

// Directly passing object
HandleObject({ itemName: "book", Price: 2000 }); 
// Output: Item name is book and its price is 2000

// ------------------ Function With Array Parameter ------------------
const prices = [100, 200, 300, 400];

// Using rest operator to collect all arguments
function allPriceAllValue(...allvalue) {
    return allvalue;
}
console.log(allPriceAllValue(prices)); 
// Output: [ [100, 200, 300, 400] ]  --> array is wrapped in another array

// ------------------ Notes ------------------
// 1. Functions without 'return' implicitly return undefined.
// 2. Default parameters are used when argument is missing or undefined.
// 3. Objects and arrays can be passed directly to functions.
// 4. Rest operator '...args' collects multiple arguments into an array.