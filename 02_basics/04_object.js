// ------------------ Singleton & Non-Singleton Objects ------------------

// Singleton object creation (rarely used)
// const YoutubeUser = new Object();
// console.log(YoutubeUser); // {}

// Non-singleton object literal
const YoutubeUser = {};
YoutubeUser.UserId = "123abc";
YoutubeUser.Name = "vishu";
YoutubeUser.LastLoggedInDay = "Monday";
console.log(YoutubeUser); 
// Output: { UserId: '123abc', Name: 'vishu', LastLoggedInDay: 'Monday' }

// ------------------ Nested Objects ------------------
const TinderUser = {
    UserId: "020abc",
    Name: {
        FullName: {
            FristName: "jay",
            LastName: "pedhadiya"
        }
    }
};
// Access nested properties
console.log(TinderUser.Name);                     // { FullName: { FristName: 'jay', LastName: 'pedhadiya' } }
console.log(TinderUser.Name.FullName);           // { FristName: 'jay', LastName: 'pedhadiya' }
console.log(TinderUser.Name.FullName.FristName); // jay

// ------------------ Merging Objects ------------------
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// Merge objects into a new empty object (originals unchanged)
const AllObjAssign = Object.assign({}, obj1, obj2, obj3);
console.log(AllObjAssign); 
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Merge objects using spread operator (modern approach)
const AllObjSpread = { ...obj1, ...obj2, ...obj3 };
console.log(AllObjSpread); 
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Original objects remain unchanged
console.log(obj1); // { '1': 'a', '2': 'b' }
console.log(obj2); // { '3': 'a', '4': 'b' }
console.log(obj3); // { '5': 'a', '6': 'b' }

// ------------------ Object Methods ------------------
console.log(Object.keys(YoutubeUser));   // ['UserId', 'Name', 'LastLoggedInDay']
console.log(Object.values(YoutubeUser)); // ['123abc', 'vishu', 'Monday']
console.log(Object.entries(YoutubeUser));// [['UserId','123abc'], ['Name','vishu'], ['LastLoggedInDay','Monday']]

// ------------------ Array of Objects (API Data) ------------------
const apidata = [
    { Name: "yash", Age: 72 },
    { Name: "yash", Age: 72 },
    { Name: "yash", Age: 72 }
];
console.log(apidata[0].Name);              // yash
console.log(YoutubeUser.hasOwnProperty("Name")); // true

// ------------------ Object Destructuring ------------------
const Course = {
    CourseName: "javaScript",
    CourseInstructor: "divyanshu",
    Price: 3333
};
console.log(Course.CourseInstructor); // divyanshu

// Destructuring with alias
const { CourseInstructor: Teacher } = Course;
console.log(Teacher); // divyanshu

// ------------------ JSON Examples ------------------
/*
JSON Object:
{
    "Name": "jay",
    "Age": 19,
    "id": "123abc"
}

JSON Array:
[
    {},
    {},
    {},
    {}
]
*/