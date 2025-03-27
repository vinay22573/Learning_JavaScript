// Date
// let myDate = new Date();
// console.log(myDate); //2025-03-27T19:42:50.883Z
// console.log(myDate.toDateString()); //Thu Mar 27 2025
// console.log(myDate.toLocaleDateString()); //3/27/2025
// console.log(myDate.toLocaleString('en-IN')); //3/27/2025, 7:46:56 PM
// console.log(myDate.toString()); //Thu Mar 27 2025 19:47:32 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toJSON());//2025-03-27T19:47:32.878Z
// console.log(myDate.toISOString()); //2025-03-27T19:47:32.878Z
// console.log(typeof myDate);//object



// let myCreatedDate = new Date(2024,4,1);
// console.log(myCreatedDate.toDateString()); //Wed May 01 2024
// console.log(myCreatedDate.toLocaleDateString()); //5/1/2024
// console.log(myCreatedDate.toLocaleString('en-IN'));


// let yourCreatedDate = new Date("2024-04-1");
// // console.log(yourCreatedDate.toDateString()); //Mon Apr 01 2024
// console.log((yourCreatedDate.getTime())/1000);


// let yourTimeStamp =Date.now();
// console.log(yourTimeStamp);

// 5s ===5000ms
// so this shows every second has 1000ms so for conversion seconds just divide it by 1000
// let yourTimeStampInSec = Math.round(yourTimeStamp/1000);
// console.log(yourTimeStampInSec);





// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.getMonth()+1);// its 0 based index so added 1 to get the correct month
// console.log(newDate.getDate());//



// Most important thing to learn if you are dealing with some international products.
let newDate = new Date();
console.log(
    newDate.toLocaleString('default',
        {
            month: 'long',
            timeZone: 'Asia/Kolkata',
            day:'numeric',
            year:'numeric',
            month:'long',
            weekday:'long',
        }
    )
);


