const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
//you have to run $env:PORT=3004 this in powershell to be able to see this


app.use(bodyParser.json());//.use bodyparser to parse the request body

app.get('/', (req, res) => {//takes request as arguments and performs operations on the data and send response back

    //anybody who hits the localhost 3000 will get response according to this code
    //you actually exposes this endpoint 
    //headers ,body,query parameters
    //do some machine learnig stuff or
    //return whatever you want
    // res.send('Hello World!');
    res.json({
        name: "priyanshu",
        age: 22
    })

    //lets for a specific response code it 
    res.status(401).send("hello ther ..some this went wrong");
})

// app.get('/route-handler', (req, res) => {
//     res.send("route handler page here")
// })
app.get('/greetings', (req, res) => {
    console.log(req.body);
    res.send(`you have reached port ${port} `)
})


app.get('/html-sender', (req, res) => {
    res.send(`<b> here is a html tag</b>`)
})

app.get('/authorization', (req, res) => {
    console.log(req.headers["authorization"])
    console.log(req.body);
    res.send({
        msg: '2+2 is four'
    })
})
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
});
//tasks
//create a simple http server in c from sractch
//create a simple todo application where u store data in a file
//create a rust/golang/java http server
//middleware