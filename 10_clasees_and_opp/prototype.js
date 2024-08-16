let myname = "  priyanshu"
let breakfast = "croissant"
// console.log(myname.trueLength());


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all Objects`);

}

Array.prototype.heyhitesh = function () {
    console.log(`hitesh is present in all Arrays`);

}
// heroPower.hitesh();
// myHero.hitesh();
// myHero.heyhitesh();
// heroPower.heyhitesh();

const user = {
    name: "priyanshu",
    email: "johnwick@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: false,
    fullTime: true,
    __proto__: TeachingSupport//here all the properites of teaching support will be available to TA support
}

Teacher.__proto__ = user;//all the properites of is user is available to teacher

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//here all the properites of the teacher is available to teaching support


String.prototype.trueLenght = function () {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

myname.trueLenght();