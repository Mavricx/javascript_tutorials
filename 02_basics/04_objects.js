// const tinderUser=new Object();-->singleton object

const tinderUser = {};//--not singleton object
tinderUser.id = "1234slk";
tinderUser.name = "regular tom";
tinderUser.isLoggedin = true;

console.log(tinderUser);

const regularUser = {
    email: "ramnathchadda@gmail.com",
    fullname: {
        userfullname: {            //-->we can go multiple level as objects as key inside an object
            firstname: "hari",
            lastname: "guru singh"
        }
    }
}

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname);//->can access through dot operator

//--combining objects
const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d" };
const obj2 = { a: 1, b: 2, c: 3, d: 4 };

// const obj3={obj1,obj2};//not a good way to combaining 

const obj3 = Object.assign({}, obj1, obj2);//combinging objcts with assign function 
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', a: 1, b: 2, c: 3, d: 4 }

//most common way to comine objects is to use spread operator

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', a: 1, b: 2, c: 3, d: 4 }

const user = [//usually apis are passed in this form and we use index no to access them 
    {
        id: 1,
        email: "user@example.com"
    },
    {
        id: 1,
        email: "user@example.com"
    },
    {
        id: 1,
        email: "user@example.com"
    },
    {
        id: 1,
        email: "user@example.com"
    },]

console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));//returns array of keys and can be iterated through loop
console.log(Object.values(tinderUser));////returns array of values present in the passed object
console.log(Object.entries(tinderUser));//returns arrays of pair of key and value

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//false