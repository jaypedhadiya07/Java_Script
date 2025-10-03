// ------------------ For Loop in JavaScript ------------------

// Basic for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// ------------------ Nested For Loop ------------------

for (let i = 1; i <= 10; i++) {
  // console.log(`\nTable of ${i}\n`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// ------------------ Looping Through Arrays ------------------

const arr1 = ["Batman", "Superman", "Hanuman", "Ironman"];

for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  // console.log(element);
}

// ------------------ Break and Continue ------------------

// Example with break
// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log("5 is detected");
//     break; // exits the loop completely
//   }
//   console.log(index);
// }

// Example with continue
for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log("5 is skipped");
    continue; // skips only the current iteration
  }
  console.log(index);
}