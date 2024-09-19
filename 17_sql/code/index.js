const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


let getRandomUser = () => {//gernerating fake random data
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}


//making a connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    // password: "*********",
    port: 3307
});
//runnihg a query

// let q = "insert into user (id,username, email,password) values (?,?,?,?)";
// let user = ["126", "whynotme", "abc2@gmail.com", "abc123"];

let q = "insert into user (id,username, email,password) values ?";
// let user = [
//     ["126dfdsd", "whynofstmedfs", "abc2@gmfddfgail.com", "asdcfd123"],
//     ["126dfds", "whynodftmeds", "abc2@dgmail.comsd", "abgfc123sd"],
//     ["127dfdsd", "newuser1", "newuser1@example.com", "newpass1"],
//     ["128dfdsd", "newuser2", "newuser2@example.com", "newpass2"],
// ];

let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());//populating 100 random users
}

try {
    connection.query(q, [data], (err, result) => { //inserts the data from user into placeholders in the query
        if (err) throw err;
        console.log(result);

    })
}
catch (err) {
    console.log(err);
}

connection.end();//ends the connection and returns the cursor to normal position


