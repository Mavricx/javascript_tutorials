//Immediately Invoked Function Expression(IIFE)

(function burger(){
    console.log(`DB CONNECTED`);
})();// variable get polluted from global scope ..to prevent that from happening we use IIFE
//put semicolon in the end the execution cus it does not know where the function ends
// ()() //first one holds the definition of the function and the second parenthesis is the execution call of the function

//example with arrow function in that
(()=>{
    console.log("hi there");
})();

//passing arguments in that
((name)=>{
    console.log(`hi ther ${name}`);
})("priyanshu");