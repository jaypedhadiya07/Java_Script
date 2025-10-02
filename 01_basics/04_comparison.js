// Comparison operators (returns boolean)
// console.log(2 < 1);   // false
// console.log(2 > 1);   // true
// console.log(2 <= 1);  // false
// console.log(2 >= 1);  // true
// console.log(2 == 1);  // false (loose equality)
// console.log(2 === 1); // false (strict equality)
// console.log(2 != 1);  // true

// Type coercion in comparisons
console.log("2" > 1);  // true, string "2" converted to number
console.log(2 > 1);    // true

// null comparison rules
console.log(null > 0);  // false
console.log(null == 0); // false (loose equality treats null specially)
console.log(null >= 0); // true (>= converts null to 0)

// undefined comparison rules
console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Strict equality (===) checks both value and type
console.log("2" === 2); // false (different types)
console.log(2 === 2);   // true (same value and type)