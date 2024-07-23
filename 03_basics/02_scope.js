
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("the value of a is", a);//the value of a is 10
}
c = 400;
// console.log(a);//error ---cant't access a outside of the block scope 
// console.log(b);//error ---cant't access b outside of the block scope
console.log(c);//400---can access c --cus it has global scope and we have last updated value


//-----------nested scope--------------------------------

function one() {
    const username = "priyanshu"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//error ---cant access website outside of function two

    two();
}
// one();//two(); will not be executed unless we execute one() because two is inside of one

if (true) {
    const username = "priyanshu"
    if (username == "priyanshu") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    //console.log(website)//error ---cant access website outside of function
}

// console.log(username);

function addOne(num1) {
    return num1 + 1;
}

addOne(4);

//-----hoisting--------
addTwo(2);//gives error //in case of hoisting we cann't use this before declaration
const addTwo = function (num2) {
    return num2 + 2;
}

