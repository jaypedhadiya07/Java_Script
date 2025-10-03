// ------------------ Array reduce Method ------------------

// Example array
const myArray = [1, 2, 3];

// Using reduce with a regular function
// const Total = myArray.reduce(function (acc, curr) {
//     console.log(`acc is ${acc} and curr is ${curr}`);
//     return acc + curr;
// }, 0);
// console.log(Total); // 6

// Using reduce with an arrow function and initial value
const Total = myArray.reduce((acc, curr) => acc + curr, 2); // initial accumulator = 2
console.log(Total); // 8

// ------------------ Reduce on Array of Objects ------------------
const shoppingCart = [
  { itemName: "js course", price: 999 },
  { itemName: "python course", price: 999 },
  { itemName: "java course", price: 999 },
];

// Calculating total price using reduce
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 2997

// ------------------ Notes ------------------
// - reduce iterates over an array and accumulates a single value
// - Parameters: accumulator, currentValue, (optional) index, array
// - Initial value for accumulator can be provided as the second argument
// - Useful for sums, averages, or combining array elements