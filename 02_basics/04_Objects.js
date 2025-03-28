// new based declaration
// const user = new Object();
// user.name = "Vinay Kumar Dubey";
// user.age = 21;
// user.isActive = true;
// user.lastVisitedDate = new Date();

// object nesting
const user = {
  userDetails: {
    fullName: {
      firstName: "Vinay",
      middleName: "Kumar",
      lengthName: "Dubey",
    },
  },
};

// combining objects
// assign
const obj1 = {
  name: "Vinay",
  age: 21,
};
const obj2 = {
  isActive: true,
  lastVisitedDate: new Date(),
};
const obj3 = {
  languagesKnown: ["JavaScript", "Python", "Java", "C", "C++", "TypeScript"],
  userName: "Vinay22573",
  fullName: {
    firstName: "Vinay",
    middleName: "Kumar",
    lengthName: "Dubey",
  },
};

const obj4 = { obj1, obj2, obj3 }; // wont work as expected
// console.log(obj4);
const obj5 = Object.assign(obj1, obj2, obj3); // because it returns a pointer we need to store it in some variable

const obj6 = Object.assign({}, obj1, obj2, obj3); // this will create a new object and assign the values of obj1, obj2, obj3 to it
// console.log(obj5);
// console.log(obj6);
// suggested to see the mdn web docs of assign

//spread operator
// const obj7 = {    ...obj1,
//     ...obj2,
//     ...obj3
// };
// console.log(obj7);

// const eventCard = {
//     1:"one",
//     2:"two",
//     3:"three",
// }
// console.log(eventCard);
// console.log(Object.keys(eventCard));
// console.log(Object.values(eventCard));
// console.log(Object.entries(eventCard));



// HasOwn Property
// const eventCard = {
//     title: "Birthday Party",
//     date: "2023-10-25",
//     time: "6:00 PM",
//     location: "123 Main St, Cityville",
//     description: "Join us for a fun-filled birthday celebration!",
//     };
// console.log(eventCard.hasOwnProperty("title")); // true
// console.log(eventCard.hasOwnProperty("venue")); // false


