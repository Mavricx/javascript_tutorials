//first promise
const promiseOne = new Promise(function (resolve, reject) {
    //do and async tasks
    //DB calls ,cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})
//Async task is complete
//Promise comsumed
promiseOne.then(function () {
    console.log('Promise comsumed')
});


//promise two
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task two');
        resolve();
    }, 1000)
}).then(function () {//this will only be executed after the promise are executed
    console.log('Async task two is resolved');
});

//promise three
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "passwoeddk", email: "piku@extrahotmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
});

//promise four
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: " randomId", password: "12345" });
        }
        else {
            reject('ERROR : something went wrong');
        }

    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    }).then((username) => {
        console.log(username)
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("the promise is either resolved or rejected "))

//promise five

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "neerajchopra", password: "12345" });
        }
        else {
            reject('ERROR : something went wrong');
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response)
    }
    catch (error) {
        console.log("something went wrong")
    }
}


consumePromiseFive()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();//we have to await this also bcz it also takes time
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }

}
// getAllUser();

//we can do same thing as this way also and get the same result
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { return response.json() })
    .then((data) => { console.log(data) })
    .catch((error) => console.log(error));

    //we can see that fetch results are shown earlier in the result rather than previous call stacks because there exist another queue in the browser/js engine which which called fetch queue /microtask queue which is responsible for handling the fetch request and it has higher priority than the call stack so it will be executed first and then the call stack will be executed.