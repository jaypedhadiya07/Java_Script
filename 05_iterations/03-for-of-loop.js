// ------------------ For Loops in JavaScript ------------------

// Example array
const arr1 = [1, 2, 3, 4, 5];

// ------------------ for...of ------------------
// Iterates over **iterables**: arrays, strings, maps, sets

// Iterating over array elements
for (const num of arr1) {
  // console.log(num); // prints each element
}

// Iterating over string characters
const greeting = "Hello World!";
for (const char of greeting) {
  // console.log(`Each Char is: ${char}`);
}

// Iterating over Map entries
const country = new Map();
country.set("IN", "India");
country.set("USA", "United States of America");
country.set("FR", "France");
country.set("IN", "India"); // Duplicate keys are ignored; Map stores unique keys

for (const [key, value] of country) {
  console.log(`${key} :- ${value}`);
}

// Iterating over a plain object using Object.entries
let games = {
  game1: "Freefire",
  game2: "PUBG",
};

for (const [key, value] of Object.entries(games)) {
  console.log(`${key} :- ${value}`);
}

// Notes:
// - for...of works with **iterables only** (arrays, strings, maps, sets)
// - Objects are **not directly iterable** with for...of
// - Use Object.entries() or for...in to iterate over plain objects
// - Map keys are unique; setting the same key again overwrites previous value