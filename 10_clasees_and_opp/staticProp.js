class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static creatId(){//we dont want to give access to all the objects whicha are instantiated from this class
        return `123`;//so we use static
    }
}

const priyanshu=new  User("priyanshu");
console.log(priyanshu.creatId());


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const iphone=new Teacher("iphone","iphone@gmail.com");
console.log(iphone.creatId());//it will not work because creatId is static method and it is not inherited by the child class