// ------------------ While Loop ------------------

// Example 1: Increment by 2 until 20
let i = 0;
while (i <= 20) {
  // console.log(i);
  i = i + 2;
}

// Example 2: Iterate through an array
let arr1 = ["Hanuman", "Ram", "Shyam", "Laxman", "Kush", "Love"];
let a = 0;

while (a < arr1.length) {
  // console.log("Hero is:", arr1[a]);
  a = a + 1;
}

// ------------------ Do While Loop ------------------

// The do-while loop executes the block at least once
// even if the condition is initially false.

let b = 21;

do {
  console.log(b); // Executes once despite b > 20
  b++;
} while (b <= 20);

// Key point:
// - Unlike a regular while loop, the condition is checked **after** the first iteration.
// - Useful when you want code to run at least once, e.g., input prompts or initial setup.