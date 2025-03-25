// ***********OPERATIONS ********** 

// let value = 3;
// let negValue = -value;
// console.log(negValue);
// addition, subtraction, multliplication of all of these numbers are easy we will not discuss them 

// power
// console.log(4**3)

// console.log(7%3)

// concatenation 
// let str1 = "Vinay "
// let str2 = "Kumar Dubey"
// let str3 = str1 + str2

// console.log(str3);// easiest case we are not going to discuss it


// string + number case
// console.log("Let's Discuss the discerning cases.")
// console.log("1"+ 2);
// console.log(1+"2");


// Most Confused cases
// Js Understood this whole as string because first number was string
// console.log("1"+ 2+ 2);//122
// // Ideally what we thought was 14 but it came different
// console.log(1+ 2+"2");//122 is what we thought but answer is 32
// Js here first caught numbers so went with that calculations first

// For more information regarding it please refer to this 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive


// Also there are so many other permutations possible please feel free to experiment and learn. 

// Not suggested for of coding but sometimes appears in JS OAs
// console.log(3+4*5%3);

// console.log(+true);//converts to 1
// //console.log(true+);//gives error
// console.log(+"");//converts to 0 or false


// Read operator precedence if you have to attempt in Interview or exam.
// not a good way of writing one more example
let num1, num2,num3;
num1 = num2 = num3 = 2+2;


let gameCouter = 100;
// console.log(++gameCouter);
console.log(gameCouter++);
