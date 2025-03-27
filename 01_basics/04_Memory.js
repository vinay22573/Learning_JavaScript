// Stack(Primitive),(stores copies)
// Heap(Non-Primitive, Objects),(stores reference)


// Strings are Primitive Datatypes so follows stack Rule
// let var1  = "Vinay";
// let var2 = var1;
// var2 = "Akshat";
// console.log(var2);
// console.log(var1);



// Objects are Non-Primitive dataTypes
let userOne  = {
    userEmail: "User@gmail.com",
    userName: "UserXXXX",
    userPasswd: "UserXXXX@####"
}
let userTwo = userOne;
userTwo.userEmail = "Vinay22573@iiitd.ac.in";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);