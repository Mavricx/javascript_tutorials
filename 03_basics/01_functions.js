
function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");

}
// sayMyName();

// function addTwoNumbers(number1,number2){//here number1 and number2 are parameters //just names--no values
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4);//7//----here 3 and 4 is called arguments and have values
// addTwoNumbers(3,"4")//34
// addTwoNumbers(3,"a")//3a

// const result=addTwoNumbers(3,4);//not  really stored in result because the function doesn't returns anything 
// console.log("Result :",result)//Result : undefined

//to store in the another variable one function should return a value
function addTwoNumbers(number1, number2) {
    return number1 + number2;//use return statement and after return statement all code id unreachable inside the functio
}
const result = addTwoNumbers(33, 34);
console.log(result);//67

function loginUserMessage(username="sam"){//if nothing is passed in the username then sam will be passed as default
    if(username==undefined){ //if(!username) is also valid
        console.log("please enter a username");
        return;
    }
    
    return `${username} just logged in`;
}

console.log(loginUserMessage("priyanshu"));//priyanshu just logged in
console.log(loginUserMessage());//undefined just logged in