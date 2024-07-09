const name = "piku ";
const repoCount = 50;

// console.log(name+repoCounnt+"value");//works but seems not readable
console.log(`hello ny name is ${name} and repo count is ${repoCount}`);//string interpolation ,more readable

const gameName = new String("mineCraft");
//string is a object here as
// {
//     0:"m",
//     1:"i",
//     2:"n",
//     3:"e",
//     4:"C",
//     5:"r",
//     6:"a",
//     7:"f",
//     8:"t",
// }

//they are stored in this key :value pair

// console.log(gameName[0]);//m
// console.log(gameName.__proto__);//{} //empty object
// console.log(gameName.length); //9
// console.log(gameName.toUpperCase());//MINECRAFT
// console.log(gameName.charAt(6));//a
// console.log(gameName.indexOf("C"));//4


// const newString = gameName.substring(0, 6);//last index is not inclused in the substring
// console.log(newString);//mineCr


// const anotherString = gameName.slice(3);
// console.log(anotherString);//eCraft

const newStringOne = " more spaces than needed in the start and end  ";
console.log(newStringOne.trim());

const url = "https://www.priyanshu.com/homePage%20access";
console.log(url.replace('%20', '__'));//https://www.priyanshu.com/homePage__access

console.log(url.includes('priyanshu'));// true

console.log(url.split('/'));





