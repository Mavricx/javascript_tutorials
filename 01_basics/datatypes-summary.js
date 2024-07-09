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

console.log(typeof myFunction);//function
console.log(typeof scoreValue);//number
console.log(typeof heros);//object
