/*
const user = {
    username: "hitesh",
    price:1000,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this);
    }
}
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

*/


// console.log(this);
// in node environment this would give an empty object but in browser environment this would give a window as an object






/*
function chai()
{   let username = "hitesh";
    console.log(this); 
    //here this will be for the function chai
}
chai();
*/

/*
function chai()
{   let username = "hitesh";
    console.log(this.username);
    // this works for object but not for functions as seen here the output is undefined
}
chai();
*/



/*
const chai = () =>{
    let username = "hitesh";
    console.log(this.username); //undefined
    // in arrow function also this is not working on fields
}
chai();
*/


// NOW COMES THE MAIN PART OF THIS LECTURE



const addTwoVal = (a,b)=>{
    return a+b;
}
console.log(addTwo(2,3)); //5


// implicit return 
const addTwo = (a,b) => a+b;// here first thing is that we don't need to write the return keyword and also we don't need the curly braces
console.log(addTwo(2,3)); //5

// another way of writing implicit return is

const addTwoNum = (a,b) => (a+b);// curly braces me wrap kara toh return keyword likhna padega whereas non curly braces me wrap kara toh return keyword nahi likhna padega
console.log(addTwoNum(2,3)); //5
// Mostly Used in React


// implicit functions and objects

const objectReturner = ()=> ({username:"Mahadev", price:1000})
