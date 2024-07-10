// const score = 400;

// const balance = new Number(100);
// console.log(score);//400
// console.log(balance);//[Number: 100]

// console.log(balance.toString());//"100"

// console.log(balance.toString().length);//3

// console.log(balance.toFixed(2));//100.00 for currency purposes

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(4));//23.90

const num = 1000000;
console.log(num.toLocaleString('en-IN'));//commas will be placed according to indian standards i.e 10,00,000

//Number. in console to check out different fuction related to NUMBER

//==========--------------MATHS----------------=================
// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.6));//4

// console.log(Math.max(3,2,8,4));//8

// console.log(Math.random());//picks a random decimal between 0-1
// //to pick a random number between 0 to 10
console.log(Math.floor(Math.random() * 10) + 1);


//to pick a number between in the given range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//try to remember this formula









