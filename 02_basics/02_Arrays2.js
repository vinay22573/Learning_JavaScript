// Part1:  Operators
// Concat
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// arr1.push(arr2);
// console.log(arr1);
// arr1.concat(arr2)
// console.log(arr1);
// const allVals = arr1.concat(arr2);
// console.log(allVals);


// // Spread Operator --> Very highly used in React Projects
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [11, 12, 13, 14, 15];
// let arrCombined = [...arr1, ...arr2, ...arr3];
// console.log(arrCombined);


// //flat operator
// const arrNest = [1,2,[3,4,[4,3,[6,7]]],[5,6,7],8,9,10];
// const arrFlat = arrNest.flat(Infinity);
// console.log(arrFlat);


// if(!Array.isArray("Vinay")){
//     console.log(Array.from("Vinay"));
// }

console.log(Array.from({name:"hitesh"}));//Interesting case for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

