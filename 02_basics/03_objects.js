//singleton -->built with constructor-->Object.create

//object literals 

const JsUser = {//keys are stored as strings 
    name: "Priyanshu",
    "full name": "Priyanshu",
    age: 22,
    location: "bhubaneswar",
    email: "hitheregmail.com",
    isLoggedIn: true,
    lastLogInDays: ["monday", "tuesday", "wednesday"]
}

console.log(JsUser.email);//accessing through dot operator
console.log(JsUser["email"]);//accessing through squre brackets
console.log(JsUser["full name"]); //only  way to access full name here is through squre brackets

//--making a symbol as a key in the object---

const symb = Symbol("key1");

const JsUser2 = {

    [symb]: "mykey1",//correct way to make a symbola key
}

console.log(JsUser2[symb]);//accessing through squre bracket

//some normal operation on object jsUser

JsUser.email="priyanhsu@gmail.com";
console.log(JsUser.email);

// Object.freeze(JsUser);//further this point we cannot change values of the object JsUser


JsUser.greeting =function(){
     console.log("hi there unknown fella");
}
console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting());// hi there unknown fella   Undefined

JsUser.greetingTwo =function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greetingTwo);//[Function (anonymous)]
console.log(JsUser.greetingTwo());//hello js user,Priyanshu and an unexplained undefined