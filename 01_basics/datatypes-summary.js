//javascript is dynamically typed language

//primitive datatype(call by value)
//7 type: string, number, boolean, null, undefined, symbol, Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);//returns false


const bigNumber = 48787089475037342n;


//reference datatype(non primitive)
//array,objects, function

const heros = ["shaktiman", "superman", "batman"];
let myObj = {
    name: "piku",
    age: 22,
}

const myFunction = function () {
    console.log("hello world");
}

// console.log(typeof myFunction);//function
// console.log(typeof scoreValue);//number
// console.log(typeof heros);//object

//more information

//https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack memory(primitive)
//by accessing this we get a copy of the data in this type of data structure

//heap memory (for non primitive data types)
//by accessing this we get a  reference of the orignal data in this type of data structure

let myname = "priyanshu"
let anothername = myname;
anothername = "piku";//only the copy got changed but not the original one 

// console.log(myname);//Priyanshu
// console.log(anothername);//piku

let userOne={
    email:"user@google.com",
     upi:"user@ubl"
}

let userTwo=userOne;
userTwo.email="piku@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); //both will return piku@gmail.com
//as the reference of both the data are same and both got changed
