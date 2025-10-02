// Account ID (constant - cannot be changed)
const accountId = 1111;

// User name (mutable)
let userName = "jaypatel";

// Password (using var - not recommended)
var accountPassword = "2222";

// Account state (currently undefined)
let accountState;

// City (implicitly global - avoid this, use let/const)
city = "rajkot";

// Update city value
city = "jamnagar";

// Display variables in a table format
console.table([accountId, userName, accountPassword, city, accountState]);

/*
┌─────────┬────────────┐
│ (index) │ Values     │
├─────────┼────────────┤
│ 0       │ 1111       │
│ 1       │ 'jaypatel' │
│ 2       │ '2222'     │
│ 3       │ 'jamnagar' │
│ 4       │ undefined  │
└─────────┴────────────┘
*/