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
