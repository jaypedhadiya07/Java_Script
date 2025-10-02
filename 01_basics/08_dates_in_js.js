// ------------------ Dates ------------------

// Current date and time
let myDate = new Date();
// console.log(myDate.toString());       // Full date string
// console.log(myDate.toDateString());   // Date only
// console.log(myDate.toLocaleString()); // Localized date & time
// console.log(typeof myDate);           // object

// Creating specific dates
// let myCreatedDate = new Date(2023, 0, 23);           // Year, Month (0-indexed), Day
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);    // Year, Month, Day, Hour, Minute
// let myCreatedDate = new Date("2023-01-14");         // ISO format
let myCreatedDate = new Date("01-14-2023"); // US format
// console.log(myCreatedDate.toLocaleString());

// Timestamps
let myTimeStamp = Date.now(); // Current time in milliseconds since Jan 1, 1970
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());           // Timestamp of a specific date
// console.log(Math.floor(Date.now() / 1000));    // Current timestamp in seconds

// Working with date components
let newDate = new Date();
console.log(newDate); // Full date object
console.log(newDate.getMonth() + 1); // Month (0-11, so +1 for human-readable)
console.log(newDate.getDay()); // Day of week (0-Sunday, 6-Saturday)

// Getting weekday name using locale options
console.log(
  newDate.toLocaleString("default", {
    weekday: "long", // Returns full weekday name
  })
);