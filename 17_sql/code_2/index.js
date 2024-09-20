const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const generateData = () => {
    return [
        faker.string.uuid(),
        faker.internet.email(),
        faker.internet.userName(),
        faker.internet.password()
    ]
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    port: 3307,
    password: 'Pikulhavesql@11'
});



const commandQuery = (q) => {
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }
    catch (err) {
        console.log(err)
    }
}

commandQuery("show databases");
commandQuery("use delta_app");
commandQuery("show tables");
connection.end();