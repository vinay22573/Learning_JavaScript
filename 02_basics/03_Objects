//Singleton --> jab kabhi literals se banate hain toh singleton nahi banta but jab kabhi constructor se banayenge toh singleton ban jayega


// This is called the Constructor method where singletons are created
// Object.create(Object.prototype, {
//     name: {
//         value: 'John',
//         enumerable: true,
//         configurable: true,
//         writable: true
//     },
//     age: {
//         value: 30,
//         enumerable: true,
//         configurable: false,
//         writable: false
//     }
// })

// object literals
/*
const JsUser = {
    userName: "Vinay22573",
    "Full Name": "Vinay Kumar Dubey",
    age: 21,
    isActive: true,
    lastVisitedDate: new Date(),
    languagesKnown: ["JavaScript", "Python", "Java","C", "C++","TypeScript"],
    address: {
        city: "New-Delhi",
        state: "Delhi",
        country: "India",
        pincode:110020,
    },
}
*/

//console.log(JsUser.address.city);
//console.log(JsUser.languagesKnown[0]);
//console.log(JsUser["Full Name"]);/* for string u need this square bracket way of accessing*/


// const mySym  = Symbol("key1");
// const JsUser2 = {
//     userName: "Vinay22573",
//     "Full Name": "Vinay Kumar Dubey",
//     age: 21,
//     mySym:"mykey1",
//     isActive: true,
//     lastVisitedDate: new Date(),
//     languagesKnown: ["JavaScript", "Python", "Java","C", "C++","TypeScript"],
//     address: {
//         city: "New-Delhi",
//         state: "Delhi",
//         country: "India",
//         pincode:110020,
//     },
// }
// console.log(typeof JsUser2.mySym); // string
// //since this gives the output as string how to convert it into symbol.

// Unsderstanding freeze in objects of JavaScript
// const mySym  = Symbol("key1");
// const JsUser3 = {
//     userName: "Vinay22573",
//     "Full Name": "Vinay Kumar Dubey",
//     [mySym]:"mykey1",

// }
// console.log(typeof mySym);
// JsUser3["Full Name"] = "Vinay Dubey";
// console.log(JsUser3["Full Name"]); // Vinay Dubey
// Object.freeze(JsUser3); // this will freeze the object and make it immutable
// JsUser3.userName = "Vinay Kumar Dubey"; // this will not work
// console.log(JsUser3);




// functions in Objects
const JsUser4 = {
    userName: "Vinay22573",
    "Full Name": "Vinay Kumar Dubey",
    age: 21,
}
JsUser4.greeting =  function(){
        return `${this.userName} is ${this.age} years old.`;
}
console.log(JsUser4.greeting()); // Vinay22573 is 21 years old.
console.log(JsUser4.greeting);