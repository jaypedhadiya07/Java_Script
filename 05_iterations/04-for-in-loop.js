// ------------------ for...in Loops ------------------

// Example object
const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

// Iterating over object keys
for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Example array
const programming = ["js", "rb", "py", "java", "cpp"];

// Iterating array indices using for...in
for (const key in programming) {
  // console.log(programming[key]); // prints each element
}

// ------------------ Map Iteration (for...in not valid) ------------------

// Maps are **iterables**, not plain objects, so for...in does not work
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('FR', 'France');
// map.set('IN', 'India'); // duplicate key ignored

// for (const key in map) {
//     console.log(key); // will not work, Map is not iterable with for...in
// }

// ------------------ Notes ------------------
// - for...in: iterates over **object keys** or array indices
// - for...of: iterates over **iterables** (arrays, strings, maps, sets)
// - Maps are iterable but cannot use for...in directly