// function addTwoNumbers(a, b) {
//   return a + b;
// }
// // while defining functions whatever we pass is called parameters
// console.log(addTwoNumbers(5, 10)) // 15
// console.log(addTwoNumbers(3,"b"));//
// while executing functions whatever we pass is called arguments
// just for the sake of nomenclature

// function without checks giving undefined
// function loginMsg(username) {
//   return `Welcome ${username}.`;
// }
// console.log(loginMsg()); // Welcome undefined.
// writing conditinals for such cases
// function loginMsg(username) {
//     if(username===undefined) {
//         return "Please provide a username.";
//     }
//     return `Welcome ${username}.`;
//   }
// console.log(loginMsg());// Please provide a username.






// default value
// function loginMsg(username = "Shiva") {
//     return `Welcome ${username}.`;
//   }
// console.log(loginMsg()); // Welcome Guest.