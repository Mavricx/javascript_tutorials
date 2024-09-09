//this index.js file will act as server in localhost:port


const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {//app.listen is function to listen incoming requests
    console.log(`app is listening on ${port}`);
});

// app.use((req, res) => {//this listens every request and executes call back function
//     // console.log(req)
//     console.log("request recieved")
//     res.send("hello world")
//     res.send({
//         name: "apple",
//         color: "red",
//         price: 50
//     })
//     const code = "<h1>one apple a day keeps doctor away</h1>";
//     res.send(code);//.res() is used to send response form our server
// });


// routing
//it is the process of selecting a path for traffic in a network or between or across multiple networks

app.get("/", (req, res) => {
    res.send(`I am root`);
});
// app.get("/apple", (req, res) => {
//     res.send(`you contacted apple path`);
// })
// app.get("/orange", (req, res) => {
//     res.send(`you contacted orange path`);
// });

// app.get("*", (req, res) => {//for any not defined path or route
//     res.send(`you contacted wrong path`);
// })

// app.post("/", (req, res) => {//only for post requests
//     res.send("you sent a post request to the root path")
// })
//installing nodemon which will automatically restart server when we make changes in cod

// app.get("/:username/:id", (req, res) => { //this is a get request
//    console.log(req.params);
//    res.send(`you have username of ${req.params.username} and id of ${req.params.id}`);
// });
// http://localhost:3000/priyanshu/123->>you have username of priyanshu and id of 123
//or
app.get("/:username/:id", (req, res) => {

    let { username, id } = req.params;
    res.send(`welcome to the page of @${username} with id of ${id}`);
});

//querystring
// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("no results") 

// });
//{ q: 'apple' } for http://localhost:3000/search?q=apple
// { q: 'apple', green: '' } for http://localhost:3000/search?q=apple&green

//or
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("nothing searched")
    }
    res.send(`search result for query ${q}`)

});
//http://localhost:3000/search?q=apple--->search result for query apple
//http://localhost:3000/search?-->nothig searched