// Shallow Copy: Copying the reference instead of actually copying the value
// Deep Copy: Copying the actual value


// Part1: Arrays    
// // Array of numbers
// const numbers = [1, 2, 3, 4, 5];
// // Array of strings
// const strings = ["apple", "banana", "cherry"];
// // Mixed array (different data types)
// const mixed = [42, "hello", true, { key: "value" }, [1, 2, 3]];

// console.log(numbers);
// console.log(strings);
// console.log(mixed);
// // indexing same as other languages starts from 0
// console.log(strings[1]);


// Part2: Array
// let myArr2 = new Array(1, 2, 3, 4,"Vinay",false, {key: "value"}, [1, 2, 3]);
// console.log(myArr2);
// // just see its prototype in console it has chained prototype which means its prototype too has its own prototype




// Part3: Array
// let arr3 = new Array(10,20,9,11,13,17,2,5,81,99);
// console.log(arr3);
// arr3.push(30);
// console.log(arr3);
// arr3.pop();
// console.log(arr3);
// arr3.unshift(5);//adds element at the start ==> high time complexity ==> not suggested unless required
// console.log(arr3);
// arr3.shift();//removes element at the start ==> high time complexity ==> not suggested unless required
// console.log(arr3);
// console.log(arr3.length);
// console.log(arr3.reverse());
// console.log(arr3.includes(9));
// console.log(arr3.indexOf(9));
// console.log(arr3.indexOf(8));

// Part4: Array
// let arr4 = new Array(10,20,9,11,13,17,2,5,81,99);
// console.log(typeof arr4);
// let arr5  = arr4.join();
// console.log(arr5);
// console.log(arr4);
// console.log(typeof arr5);


// Part5: Array
// let arr5 = new Array(10,20,9,11,13,17,2,5,81,99);
// // JavaScript Arrays follow shallow copy
// let arr6 = arr5;
// console.log(arr6[0]);
// console.log(arr5[0]);
// arr6[0] = 19;
// console.log(arr5[0]);
// console.log(arr6[0]);
// This proves shallow copy

// slice , splice
let Arr1 = new Array(2,3,5,7,6,8,12);
console.log("A:",Arr1);//A: [
//     2, 3,  5, 7,
//     6, 8, 12
//   ]
// let myslice = Arr1.slice(0,5);
// console.log("Slice:",myslice);//Slice: [ 2, 3, 5, 7, 6 ]
// console.log("B:",Arr1);
// let mysplice = Arr1.splice(0,5);//B: [
// //     2, 3,  5, 7,
// //     6, 8, 12
// //   ]
// console.log("Splice:",mysplice);//Splice: [ 2, 3, 5, 7, 6 ]
// console.log("C:",Arr1);//C: [ 8, 12 ]
// // slice does not change the original array but splice does change the original array
// // slice does not includes the last value where as splice does include the last value.
