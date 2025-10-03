// ------------------ Array forEach vs filter ------------------

// Example array
const arr = ["js", "ruby", "python", "java", "cpp"];

// forEach executes a callback for each element
// It **always returns undefined**
const value = arr.forEach((value) => {
  console.log(value); // prints each element
  // return value; // return does not work inside forEach for new array
});
console.log(value); // undefined

// Using forEach to manually filter elements
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr3 = [];

arr2.forEach((value) => {
  if (value > 5) {
    arr3.push(value); // collect values manually
  }
});
// console.log(arr3); // [6, 7, 8, 9, 10]

// ------------------ filter Method ------------------
// filter returns a **new array** of elements that pass the condition

// Using arrow function shorthand
// const newValue = arr2.filter((value) => value > 5);
// console.log(newValue); // [6, 7, 8, 9, 10]

// Using block body with return
// const newValue = arr2.filter((value) => {
//     return value > 5;
// });
// console.log(newValue);

// ------------------ Filtering Array of Objects ------------------
const Books = [
  { title: "book1", genre: "Comedy", publish: 1995, edition: 2000 },
  { title: "book2", genre: "fiction", publish: 2000, edition: 2005 },
  { title: "book3", genre: "maths", publish: 1993, edition: 2001 },
  { title: "book4", genre: "science", publish: 2004, edition: 2020 },
  { title: "book5", genre: "non-fiction", publish: 2008, edition: 2020 },
  { title: "book6", genre: "fiction", publish: 2006, edition: 2022 },
  { title: "book7", genre: "horror", publish: 1995, edition: 2000 },
  { title: "book8", genre: "cartoon", publish: 2012, edition: 2018 },
  { title: "book9", genre: "maths", publish: 2005, edition: 2012 },
  { title: "book10", genre: "story", publish: 2013, edition: 2023 },
];

// Filtering objects based on multiple conditions
const bookinfo = Books.filter(
  (book) => book.publish > 2000 && book.genre === "maths"
);
console.log(bookinfo);

// Notes:
// - forEach is used for **side effects** and always returns undefined
// - filter returns a **new array** with elements that satisfy the condition
// - Use filter for creating subsets from arrays or array of objects