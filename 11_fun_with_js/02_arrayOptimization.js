// -------------------------------------------------------------
//  V8 Internal Array Optimization & Element Kinds
// -------------------------------------------------------------
//
// Arrays in JavaScript are optimized differently based on:
//  - Type of their elements (SMI, Double, Object, etc.)
//  - Presence of "holes" (missing indexes)
//  - Transitions between packed/holed and typed arrays
//
// The V8 engine (used by Node.js and Chrome) dynamically changes
// the internal representation of arrays to optimize speed and memory.
// -------------------------------------------------------------

// Example: Empty array structure in V8 (shown via %DebugPrint in D8 shell)
// let array = [];
// %DebugPrint(array);
// Output:
/*PS C:\Users\Jay\OneDrive\Desktop\js_fun> C:\Users\Jay\.jsvu\bin\v8-debug.cmd --allow-natives-syntax   
>> 
V8 version 14.3.45
d8> let arry = []
undefined
d8> %DebugPrint(arry)
DebugPrint: 0x3ee0084941d: [JSArray]
 - map: 0x03ee008272f1 <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
 - prototype: 0x03ee00827319 <JSArray[0]>
 - elements: 0x03ee000007bd <FixedArray[0]> [PACKED_SMI_ELEMENTS]
 - length: 0
 - properties: 0x03ee000007bd <FixedArray[0]>
 - All own properties (excluding elements): {
    0x3ee00000df1: [String] in ReadOnlySpace: #length: 0x03ee006e9cd1 <AccessorInfo name= 0x03ee00000df1 <String[6]: #length>, data= 0x03ee00000011 <undefined>> (const accessor descriptor, attrs: [W__]), location: descriptor
 }
0x3ee008272f1: [Map] in OldSpace
 - map: 0x03ee0081f141 <MetaMap (0x03ee0081f191 <NativeContext[300]>)>
 - type: JS_ARRAY_TYPE
 - instance size: 16
 - inobject properties: 0
 - unused property fields: 0
 - elements kind: PACKED_SMI_ELEMENTS
 - enum length: invalid
 - back pointer: 0x03ee00000011 <undefined>
 - prototype_validity_cell: 0x03ee00000ac9 <Cell value= [cleared]>
 - instance descriptors #1: 0x03ee00827935 <DescriptorArray[1]>
 - transitions #1: 0x03ee00827955 <TransitionArray[5]>
   Transitions #1:
     0x03ee00000e8d <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x03ee00827971 <Map[16](HOLEY_SMI_ELEMENTS)>
 - prototype: 0x03ee00827319 <JSArray[0]>
 - constructor: 0x03ee00827241 <JSFunction Array (sfi = 000003EE006EF331)>
 - dependent code: 0x03ee000007cd <Other heap object (WEAK_ARRAY_LIST_TYPE)>
 - construction counter: 0

[]
d8>*/

// -------------------------------------------------------------
// Packed vs. Holey Arrays
// -------------------------------------------------------------
//
// Packed Arrays   → Contain no holes (continuous indexes)
// Holey Arrays    → Contain missing indexes or sparse data
//
// SMI Elements    → Small integers (32-bit signed ints)
// Double Elements → Floating-point numbers
// Object Elements → Mixed types (string, objects, etc.)
// -------------------------------------------------------------


// Example 1: Transition between element kinds
let arr = [1, 2, 3, 4, 5];  // Packed SMI elements
arr.push(6.0);              // Still packed (6.0 is treated as SMI-like)
arr.push("seven");          // Transition → Packed Elements (mixed types)
arr[10] = 10;               // Creates HOLES → Holey Elements

console.log(arr);           // [1, 2, 3, 4, 5, 6, "seven", <3 empty items>, 10]
console.log(arr.length);    // 11
console.log(arr[9]);        // undefined (hole at index 9)


// -------------------------------------------------------------
// Internal Checks (conceptually)
// -------------------------------------------------------------
// - arr.hasOwnProperty(9)           → false  (no value at index 9)
// - arr.__proto__.hasOwnProperty(9) → false
// - Object.prototype.hasOwnProperty(9) → false
//
// Holes make iteration slower, since JS engine must perform
// extra checks for each "missing" index.


// -------------------------------------------------------------
// Example 2: Bounds check & access cost
// -------------------------------------------------------------
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3[2]);  // Fast access (packed, in-bounds)


// -------------------------------------------------------------
// Array Type Transitions Summary
// -------------------------------------------------------------
//  SMI Elements       → Only integers
//  DOUBLE Elements    → Contains floats
//  PACKED Elements    → Mixed types (string, object, etc.)
//  HOLEY_* variants   → Contain gaps (missing indexes)
//
//  Transition chain (in performance order):
//     PACKED_SMI  > PACKED_DOUBLE  > PACKED_ELEMENTS
//     HOLEY_SMI   > HOLEY_DOUBLE   > HOLEY_ELEMENTS
// -------------------------------------------------------------


// -------------------------------------------------------------
// Example 3: Creating holey arrays explicitly
// -------------------------------------------------------------
let arr4 = new Array(3);  // Creates array with 3 holes (empty slots)
arr4[0] = "1";            // Holey Packed Elements
arr4[1] = "2";
arr4[2] = "3";
console.log(arr4);        // ["1", "2", "3"] but still HOLEY internally


// -------------------------------------------------------------
// Example 4: Optimization by consistent types
// -------------------------------------------------------------
let arr5 = [];            // Starts as PACKED_SMI
arr5.push("1");           // Transitions → PACKED_ELEMENTS
arr5.push("2");
arr5.push("3");
console.log(arr5);        // ["1", "2", "3"]


// -------------------------------------------------------------
// Example 5: Mixing numeric types causes downgrade
// -------------------------------------------------------------
let arr6 = [1, 2, 3, 4, 5]; // Packed SMI
arr6.push(6.0);             // Promotes to PACKED_DOUBLE internally

// -------------------------------------------------------------
// PERFORMANCE TIP:
// -------------------------------------------------------------
// ✅ Keep arrays densely packed (no holes).
// ✅ Avoid mixing integers, floats, and strings.
// ✅ Avoid deleting indexes or using sparse arrays (e.g., arr[1000] = 1).
// ✅ V8 re-optimizes arrays dynamically, but transitions cost performance.
// -------------------------------------------------------------

// For iteration tests, prefer simple loops (fastest):
// for (let i = 0; i < arr.length; i++) { ... }
//
// Avoid `for...in` for arrays — it iterates over keys (not numeric order).
// `forEach`, `map`, and `reduce` are safe and clean for most uses.