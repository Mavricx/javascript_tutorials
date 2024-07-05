let score = 33;
console.log(typeof score);//returns number
console.log(typeof (score))//returns number

score = "33";
console.log(typeof score);//returns string
console.log(typeof (score))//returns string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//returns number

let randomNumber = "1234sjdh"
let convertedRandomNumber = Number(randomNumber);
console.log(typeof convertedRandomNumber);//returns number
console.log(convertedRandomNumber)//returns NaN

//null converted to number returns zero
//undefined cnverted number return NaN
//true converted to number retuerns 1 and false retunrs 0
//stirng converted to number returns NaN

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn); //returns true

//1=>true : 0=>false
//""=>false
//"piku"=>true 

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);//returns "33"
console.log(typeof stringNumber);//returns string



