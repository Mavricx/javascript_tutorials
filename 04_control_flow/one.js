if (2 == "2") {
    console.log("executed");
}

if (!(3 === "3")) {
    console.log("this is strict checking")
}
 
const scope=200;
if(scope>100){
    let power ="fly";
    console.log(power);//fly
}
// console.log(power);//error

const balance=400;

// if(balance>300) console.log("implicit scope");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}