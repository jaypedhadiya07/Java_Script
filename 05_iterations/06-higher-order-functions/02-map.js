// ------------------ Array map Method ------------------

// Example array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to create a new array with modified values
// const newNumber = number.map((value) => {
//     return value + 10;
// });
// console.log(newNumber); // [11, 12, 13, ..., 20]

// ------------------ Chaining map and filter ------------------
// Perform multiple transformations in sequence

const newNumber = number
  .map((value) => value * 10) // multiply each element by 10 => [10, 20, 30, ...]
  .map((value) => value + 1) // add 1 to each element => [11, 21, 31, ...]
  .filter((value) => value >= 40); // keep only values >= 40 => [41, 51, 61, ...]

console.log(newNumber); // [41, 51, 61, 71, 81, 91, 101]

// ------------------ Notes ------------------
// - map returns a **new array** with transformed elements
// - filter returns a **new array** with elements that satisfy a condition
// - Methods can be **chained** to perform multiple operations in sequence