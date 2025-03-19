const accountId = "Vinay22573";
// accountId = "5";//not allowed
// console.log(accountId);//TypeError: Assignment to constant variable.
// variables which are declared as constants can not be used to store new values.
let accountName = "Vinay Kumar Dubey";
var accountPassword = "Vinay22573@9793";
accountCity = "Gorakhpur";
let accountJoinedCompany;
console.table([accountId, accountName, accountPassword, accountCity, accountJoinedCompany]);
accountName = "Shobhit Raj";
accountPassword = "Shobhit22482@2004";
accountCity = "Ankleshwar/Noida";
accountJoinedCompany = "BNY Mellon";
// This is a possibility 
console.table([ accountName, accountPassword, accountCity, accountJoinedCompany]);



// var was used to declare variables earlier, but the problem with using var was that it create o problem of scoping. it was not block scoped or functional scoped.
// {} any thing defined under this curly braces are scoped.
{
    let blockScopedLet = "I am block scoped";
    const blockScopedConst = "I am also block scoped";
    console.log(blockScopedLet); // Works
    console.log(blockScopedConst); // Works
  }
  
 // console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
  // console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined



