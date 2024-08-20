// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){
//         return this.password.toUpperCase();
//     }

//     set password(value){
//         this.password = value;
//     }
// }
// const piku=new User("piku@example.com","hi there");
// console.log(piku.password);

// The above code will throw an error because the because the settter and the constructor both trying to set value of the password


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();// we have to make an whole new variable to work this code
    }

    set password(value) {
        this._password = value;
    }
}
const piku = new User("piku@example.com", "hi there");
console.log(piku.password);
console.log(piku.email);
