// ----------------------
//  PROMISE BASICS
// ----------------------

// Promise example with manual resolve
const promiseOne = new Promise((resolve, reject) => {
    // Simulate an async task (e.g., DB call, network request)
    setTimeout(() => {
        console.log("Task 1 completed");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise 1 resolved");
});

// Inline Promise creation (shorter syntax)
new Promise((resolve) => {
    setTimeout(() => {
        console.log("Task 2 completed");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Promise 2 resolved");
});

// Promise that returns data
const promiseThree = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ user: "jay", email: "jay@ec.com" });
    }, 1000);
});

promiseThree.then((user) => console.log("Promise 3 data:", user));

// ----------------------
//  PROMISE CHAINING & ERROR HANDLING
// ----------------------
const promiseFour = new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
        if (!error) resolve({ user: "yash" });
        else reject("ERROR: Something went wrong");
    }, 500);
});

promiseFour
    .then((user) => {
        console.log("Promise 4 user:", user);
        return user.user; // chaining
    })
    .then((username) => console.log("Username:", username))
    .catch((err) => console.log("Promise 4 error:", err))
    .finally(() => console.log("Promise 4 done"));

// ----------------------
//  ASYNC / AWAIT EXAMPLE
// ----------------------
const promiseFive = new Promise((resolve, reject) => {
    let error = true;

    setTimeout(() => {
        if (!error) resolve({ user: "JS" });
        else reject("ERROR: JS went wrong");
    }, 2000);
});

async function handlePromiseFive() {
    try {
        const result = await promiseFive;
        console.log("Promise 5 result:", result);
    } catch (err) {
        console.log("Promise 5 error:", err);
    }
}
handlePromiseFive();

// ----------------------
//  FETCH EXAMPLES
// ----------------------

// Example using async/await (cleaner)
async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log("Fetched users:", data);
    } catch (err) {
        console.log("Fetch error:", err);
    }
}
// fetchUsers(); // Uncomment to run

// Example using .then() chaining
fetch("https://api.github.com/users/jaypedhadiya07")
    .then((response) => response.json())
    .then((data) => console.log("GitHub user:", data))
    .catch((err) => console.log("Fetch error:", err));