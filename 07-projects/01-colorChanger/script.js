const buttons = document.querySelectorAll(".button");
const body = document.body;

// Option 1
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// Option 2
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         body.style.backgroundColor = button.id;
//     });
// });
