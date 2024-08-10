const user = {
    username: "priyanshu",
    logincount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log('Get user details from database')
        // console.log(`Username :${this.username} and LoginCount: ${this.logincount} and SignedIn: ${this.signedIn}`)
        console.log(this)
    }
}

// // console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);//this will return empty object
// //this in browser will return window object

//constructor function 
// const promiseOne = new Promise();
// const date = new Date();

function userConstructor(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const userOne = userConstructor("piku", 12, true);
const userTwo= userConstructor("hi there", 12, true);

// console.log(userTwo instanceof userConstructor);
 console.log(userTwo);