// function IntroPrinter(userName, Courses){
//     return "Hello! I am " + userName + ". I have done "+ Courses + " till now."
// }
// let userName = "Vinay22573";
// let Courses = 33;
// console.log(IntroPrinter(userName,Courses));
// Not used now a days

// Now method called string Interpolation for that we use something more interesting that is called backticks


// We use backticks, with ${} for variable naming this is new Normal across the industry(convention)
// function IntroPrinter(userName, Courses){
//     return `Hello! I am  ${userName}. I have done ${Courses} till now.`
// }
// let userName = "Vinay22573";
// let Courses = 33;
// console.log(IntroPrinter(userName,Courses));





// Best to use Console log for this
// const userName = new String("Vinay22573");
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Su34uIAj5KjKztN1EuKXs0LMJji8aVegnmfluyDq2VR2m6cSsMwtbU&s=10
// refer to this to understand this better

// console.log(userName.length);
// console.log(userName.toLowerCase());
// console.log(userName.charAt(3));
// console.log(userName.indexOf('y'));


// console.log(userName.substring(0,4));// does not accepts negative values
// console.log(userName.slice(-8,4));// accepts negative indexing similar to python for doing it from back.

let text = "     I am doing something new.       ";
console.log(text.trim());
let url = new String("https://webdev.com/python%20bootcamp");
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(url.includes('python'));



let email1 = 'johndoe@example.com';
let mask1 = "j*****e@example.com";
let email2 = 'vinay22573@gmail.com';
let mask2 = 'v*****3@gmail.com';
// HW convert email to mask 
// Salesforce Intern problem
