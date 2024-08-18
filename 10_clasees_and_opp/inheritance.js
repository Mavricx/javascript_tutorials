class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(course){
        console.log(`${this.username} has added new course`);
    }

}

const chai= new Teacher ('chai','chai@teacher.com','123');
chai.addCourse();


const masalaChai=new User("masalaChai");
 masalaChai.logMe();

console.log(chai instanceof Teacher);

console.log(masalaChai instanceof User);