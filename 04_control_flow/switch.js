// ------------------ Switch Statement in JavaScript ------------------

// Syntax template for reference
// switch (key) {
//     case value:
//         // code to execute
//         break;
//     default:
//         // code to execute if no case matches
//         break;
// }

// Example: Display month name based on month number
const month = 1;

switch (month) {
  case 1:
    console.log("January");
    break;

  case 2:
    console.log("February");
    break;

  case 3:
    console.log("March");
    break;

  case 4:
    console.log("April");
    break;

  default:
    console.log("Something went wrong");
    break;
}
// Notes:
// - 'break' prevents fall-through to the next case
// - 'default' executes if no cases match