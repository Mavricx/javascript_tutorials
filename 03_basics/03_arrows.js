const user = {
    username: "goku",
    price: 699,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)// this refers to the current context
        console.log(this);//{
        //     username: 'goku',
        //     price: 699,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }

}

user.welcomeMessage();//goku, welcome to website
user.username = "sam";
user.welcomeMessage();//sam, welcome to website

console.log(this);//{}

console.log(this);//gives window object in browser

// function coffee(){
//     console.log(this);//return global object
//     console.log(this.username);//undefined
// }

// coffee();

// const chai=()=>{
//     let username="hari dash"
//     console.log(this);//{}
//     console.log(this.username);//undefined //this does not work in arrow function 
// }
// chai();
//-----arrow function ---------

// const addTwo=(num1,num2)=>{
//      return num1+num2; //explicit return

// }

// const addTwo =(num1,num2)=>num1+num2;//implicit return in arrow function
//or
const addTwo =(num1,num2)=>(num1+num2);
//returning object in arrow function 

const returnObject=()=>({username:"naruto uzumaki"});

console.log(returnObject());//{ username: 'naruto uzumaki' }


//using this in array
const arr=[2,3,4,5,5];
 arr.forEach(()=>{ });
 //or
 arr.forEach(()=>({}));
 //or
 arr.forEach(function(){ });