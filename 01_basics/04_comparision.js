console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);



console.log("2" > 1); // returns true .. string autometically converted to number 
console.log("02" > 1);//returns  true.


console.log(null > 0); //false
console.log(null == 0);//false      //null is treated as zero
console.log(null >= 0);// true

console.log(undefined == 0);
console.log(undefined >= 0);      //all comparisions gives false
console.log(undefined < 0);


//strict check for javascript  is denoted ===(comparision includes datatypes)

console.log(2 == "2");//true
console.log(2 === "2");//false