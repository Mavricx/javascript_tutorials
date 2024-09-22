const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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
    password: "Pikulhavesql@11",
    port: 3307
});




// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);

//     })
// }
// catch (err) {
//     console.log(err);
// }

// connection.end();

app.get('/', (req, res) => {//fetch and show total no of user available in the database
    let q = `select count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render("home.ejs", { count })
        })
    }
    catch (err) {
        console.log(err);
        res.send("some error occured in showing no of users")
    }
});
//no need to write connection.end() as it end with app.get while executed in the process

app.get('/user', (req, res) => {
    try {
        let q = `select * from user`;
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("user.ejs", { users });
        })
    }
    catch (err) {
        res.send("some error occured in fething db data")
    }
})
//==view edit

app.get('/user/:id/edit', (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user })
        })
    }
    catch (err) {
        res.send("some error occured in editing user")
    }
})

//update route

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formpw, username: newUsername } = req.body;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formpw != user.password) { //if password is incorrect
                res.send("!!Wrong password !!! try again")
            }
            else { //nested query to update the username if pw is correct
                let q2 = `update user set username='${newUsername}' where id='${id}'`
                connection.query(q2, (err, result => {
                    if (err) throw err;
                    res.redirect("/user");
                }))
            }


        })
    }
    catch (err) {
        res.send("some error occured in editing user")
    }
})


app.listen(port, () => {
    console.log("listening on port " + port);
})