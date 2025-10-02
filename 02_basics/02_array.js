// ------------------ Array Merging ------------------
const Marvel_Heros = ["IronMen", "Thor", "Loki"];
const Dc_Heros = ["Supermen", "Flesh", "Betamen"];

// Push will insert Dc_Heros as a nested array
// Marvel_Heros.push(Dc_Heros);
// console.log(Marvel_Heros); 
// console.log(Marvel_Heros[3][2]); // Betamen

// concat() merges arrays (non-destructive)
const All_heros = Marvel_Heros.concat(Dc_Heros);
// console.log(All_heros);
// console.log(Marvel_Heros); // Original array unchanged

// Spread operator (modern way to merge multiple arrays)
const SecondWay_All_Heros = [...All_heros, ...Dc_Heros];
// console.log(SecondWay_All_Heros);

// ------------------ Array Flattening ------------------
const con_Array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]];

console.log(con_Array.flat(Infinity)); // Flatten all nested arrays
console.log(con_Array); // Original array unchanged

// ------------------ Array Utility Methods ------------------
console.log(Array.isArray("jay")); // false
console.log(Array.from("jay"));    // [ 'j', 'a', 'y' ]

// Object with non-iterable structure → returns empty array
console.log(Array.from({ name: "jay" })); // []

// Array.of() → creates array from given arguments
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]