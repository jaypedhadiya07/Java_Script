// ------------------ Array Creation ------------------
const array1 = [0, 1, 2, 3, 4, 5, 6];        // Simple array
const array2 = ["saktiman", "nagaraj"];      // String array
const array3 = new Array(1, 2, 3, 4);        // Array constructor
// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array3[2]); // Access element at index 2

// ------------------ Array Methods ------------------

// Adding & removing elements
array1.push(7);     // Add to end
array1.push(8);
array1.pop();       // Remove from end
array1.unshift(9);  // Add to start
array1.shift();     // Remove from start
// console.log(array1);

// Search methods
// console.log(array1.includes(7)); // true
// console.log(array1.indexOf(2));  // index position

// join() → converts array to string
let newArray = array1.join();
console.log(newArray);          // "0,1,2,3,4,5,6,7"
console.log(typeof newArray);   // string

// ------------------ slice vs splice ------------------
let anotherArray = [0, 1, 2, 3, 4, 5];

console.log(anotherArray.slice(1, 3));  // [1, 2] -> copies (non-destructive)
console.log(anotherArray);              // [0, 1, 2, 3, 4, 5]

console.log(anotherArray.splice(1, 3)); // [1, 2, 3] -> removes (destructive)
console.log(anotherArray);              // [0, 4, 5]
