const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const generateData = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    port: 3307,
    password: 'Pikulhavesql@11'
});

let data = [];
for (let i = 0; i < 10; i++) {
    data.push(generateData());
}
// Function to execute a command query
const commandQuery = (q) => {
    connection.query(q, [data],(err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log(result);
    });
};

// Function to execute a normal query string
const normalQuery = (q) => {
    connection.query(q, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log(result);
    });
};


// commandQuery("use delta_app");
// commandQuery("create table persons (id int primary key ,username varchar(70) unique,email varchar(70) unique ,password varchar(255) )");
// commandQuery("insert into persons (id,username,email,password) values ?",);
normalQuery("select * from persons")
// console.log(data);
// normalQuery("create table persons (id varchar(70) primary key ,username varchar(70) unique,email varchar(70) unique ,password varchar(255) )");
connection.end();