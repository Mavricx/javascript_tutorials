//Dates

let myDate = new Date();
console.log(myDate);//2024-07-10T19:58:12.048Z
console.log(myDate.toString());//Thu Jul 11 2024 01:28:12 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Thu Jul 11 2024
console.log(myDate.toLocaleString());//11/7/2024, 1:28:12 am

let myCreatedDate = new Date(2024, 5, 23);
console.log(myCreatedDate.toDateString());//Sun Jun 23 2024

let myCreatedDateWithTime = new Date(2024, 5, 23, 6, 29);
console.log(myCreatedDateWithTime.toLocaleString());//23/6/2024, 6:29:00 am

let myCreatedInstanceWithFormat = new Date("01-14-2023");
console.log(myCreatedInstanceWithFormat.toLocaleString())//14/1/2023, 12:00:00 am//american format

let myTimeStamp = Date.now();

console.log(myTimeStamp);//1720642125862 milisecond from 1st january 1970
console.log(myCreatedInstanceWithFormat.getTime());//gets duration from that time to 1st january 1970

console.log(Math.floor(Date.now() / 1000));//to convert miliseconds to seconds//to avoid decimal point

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);//7 (july)
console.log(newDate.getDay() + 1);//5 (Thursday)

console.log(newDate.toLocaleString('default', { weekday: "long" }));//thursday








