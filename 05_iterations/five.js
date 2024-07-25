const coding = ["java", "javascript", "ruby", "python", "c++"];

coding.forEach(function (item) {//passing the function itself in the loop
    console.log(item.toUpperCase());
})
coding.forEach((item) => {//in  case of arrow function 
    console.log(item.toLowerCase());
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);//only passing the function name into the loop

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [{
    languageName: "js",
    languageFileName: 'piku.js'
},
{
    languageName: "java",
    languageFileName: 'piku.java'
},
{
    languageName: "ruby",
    languageFileName: 'piku.rb'
}]

myCoding.forEach((item) => {
    console.log(item.languageName);
})