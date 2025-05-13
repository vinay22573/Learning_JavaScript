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

// an Inner Function can use the variables of the Outer Function but the Outer Function can not use the variables of the inner function
// Example of Outer and Inner Function Scope
/*
function outerFunction() {
    const outerVariable = "I am from the Outer Function";

    function innerFunction() {
        const innerVariable = "I am from the Inner Function";
        console.log(outerVariable); // Inner function can access outer function's variable
        console.log(innerVariable); // Inner function can access its own variable
    }

    innerFunction();

    // Uncommenting the next line will throw an error because the outer function
    // cannot access the inner function's variable
    // console.log(innerVariable); 
}

outerFunction();
*/