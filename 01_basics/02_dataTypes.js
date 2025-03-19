"use strict";// treat all JS code as newer version

//alert(3+3);//ReferenceError: alert is not defined
// this error because we are using node.js and browsers  have dom api which is not available in node.js


// console.log(3 
// +
//  3);//6 // Though it prints & works but it is not a good practice to write code like this.


let name = "Vinay";
let accountNumber = "Vinay22573";
// string can have numbers its very simple,like any other language
let age = 22;
let isAdult = true;
let isLoggedIn = false;
let accountBalance = 10000.00;



// number ==> 2 to power 53 -1
// BigInt ==> 
// string ==> "", '', ``
// boolean ==> true, false
// undefined ==> Value is not assigned till now
// symbol ==> unique value
// null ==> standalone value (Value is assigned but it is empty)

// object


console.log(typeof age);//stringd
console.log(typeof isAdult);//boolean
console.log(typeof accountBalance);//number
console.log(typeof "Vinay");//string

// console.log(typeof null);//object
// console.log(typeof undefined);//undefined









// console.log(3 + 3);//6
// console.log("3" + 3);//33
// console.log("Hitler" + " " + "was a dictator");
// console.log(3 * "3");//9
// console.log(3 / "3");//1
// console.log(3 / true);//3

// console.log(3 / 0);//Infinity
// console.log(3 / "0");//Infinity
// console.log(3 / "");//Infinity
// console.log(3 / null);//Infinity
// console.log(3 / false);//Infinity


// console.log(3 / undefined);//NaN
// console.log(3 / NaN);//NaN
// console.log(3 / "3a");//NaN
// console.log(3 / "0a");//NaN
// console.log(3 / "true");//NaN
// console.log(3 / "false");//NaN  
// console.log(3 / "null");//NaN
// console.log(3 / "undefined");//NaN
// console.log(3 / "NaN");//NaN
// console.log(3 / "Infinity");//0
