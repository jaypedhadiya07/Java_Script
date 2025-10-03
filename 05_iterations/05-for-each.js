// ------------------ Array forEach Method ------------------

// Example array
const arr = ["js", "ruby", "python", "java", "cpp"];

// Using a regular function
arr.forEach(function (value) {
  // console.log(value); // prints each element
});

// Using an arrow function
arr.forEach((value) => {
  // console.log(value); // prints each element
});

// Using a named function
const language = function (value) {
  console.log(value);
};
// arr.forEach(language); // prints each element

// Accessing value, index, and array
// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// Example array of objects
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

// Iterating array of objects
// myCoding.forEach((item) => {
//   console.log(item.languageName);
// });

// ------------------ Notes ------------------
// - forEach executes a callback for each element in the array
// - Supports regular functions, arrow functions, or named functions
// - Callback parameters: value, index, array
// - Cannot break out of forEach; use for/of or for loop if needed