function setUserName(username) {
    //complex Db calls
    this.username = username;
    console.log('setUserName is called');
}

function createUser(username, email, password) {
    setUserName.call(this,username);//it holds the reference of the function even after removing from call stack//still not working and not returning the username

    this.email = email;
    this.password = password;
}

const chai = new createUser('chai', 'chai@gmail.com', '1223');
console.log(chai);//createUser { email: 'chai@gmail.com', password: '1223' } setusername is not called 
//to set username we have to call setUserName(this.username)
 