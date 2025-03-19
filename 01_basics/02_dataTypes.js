"use strict";// treat all JS code as newer version

//alert(3+3);//ReferenceError: alert is not defined
// this error because we are using node.js and browsers  have dom api which is not available in node.js

console.log(3 + 3);//6
console.log(3 - 3);//0
console.log("Hitler" + " " + "was a dictator");
console.log("3" * 3);//9 
console.log("3" + 3);//33
console.log(3 * "3");//9
console.log(3 + "3");//33
console.log(3 / "3");//1