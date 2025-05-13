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






function chai()
{   let username = "hitesh";
    console.log(this);
}
chai();