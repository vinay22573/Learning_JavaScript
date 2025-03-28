// function restOperator(...args) {
//   return (args);
// }
// console.log(restOperator(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]

// function restOperator2(num1,val2,...args) {
//   return (args);
// }
// console.log(restOperator2(1, 2, 3, 4, 5));// [ 3, 4, 5 ]


const prodDetailsObject = {
    prodName: "iPhone",
    prodPrice: 100000,
    prodBrand: "Apple",
    prodRating: 4.5,
}

function handleObject(anyObject){
    return `Product Name: ${anyObject.prodName}\nProduct Price: ${anyObject.prodPrice}\nProduct Brand: ${anyObject.prodBrand}\nProduct Rating: ${anyObject.prodRating}`;
}
// console.log(handleObject(prodDetailsObject));



console.log(handleObject(
    {
        prodName: "NokiaPro",
        prodPrice: 50000,
        prodBrand: "Nokia",
        prodRating: 3.9,
    }
));


//return second value of an array

// const getSecVal  = (arr) => {
//     return arr[1];
// }
// const arr = [1,2,3,4,5];
// console.log(getSecVal([5,7,3,4,5])); 
// console.log(getSecVal(arr)); 

