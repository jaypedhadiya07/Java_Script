// ------------------ Variable Declarations ------------------
let a = 10;
var b = 20;
const c = 30;

if (true) {
    a = 20; // reassign is allowed with let
    b = 40; // var can be reassigned and redeclared in the same scope
    // c = 60; // Error: Assignment to constant variable (const cannot be reassigned)
}
console.log(a); // 20
console.log(b); // 40
console.log(c); // 30


// ------------------ Function Scope Example ------------------
function one() {
    const UserName = "jay";

    function two() {
        const Website = "youtube";
        console.log(UserName); 
        // Output: jay (child can access parent variable)
    }

    // console.log(Website); // Error: Website is not defined (parent cannot access child variable)
    two();
}
one();


// ------------------ Block Scope Example ------------------
if (true) {
    const UserName = "yash";
    if (UserName === "yash") {
        const Website = " youtuber";
        console.log(UserName + Website); 
        // Output: yash youtuber
    }
    // console.log(Website); // Error: Website is not defined (block-scoped)
}
// console.log(UserName); // Error: UserName is not defined (block-scoped)
