function restOperator(...args) {
  return (args);
}
console.log(restOperator(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]

function restOperator2(num1,val2,...args) {
  return (args);
}
console.log(restOperator2(1, 2, 3, 4, 5));// [ 3, 4, 5 ]


const prodDetailsObject = {
    prodName: "iPhone",
    prodPrice: 100000,
    prodBrand: "Apple",
    prodRating: 4.5,
}

function handleObjectProduct(anyObject){
    return `Product Name: ${anyObject.prodName}, Product Price: ${anyObject.prodPrice}, Product Brand: ${anyObject.prodBrand}, Product Rating: ${anyObject.prodRating}`;
}
console.log(handleObjectProduct(prodDetailsObject)); 