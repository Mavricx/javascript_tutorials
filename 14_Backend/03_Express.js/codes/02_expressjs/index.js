const express = require('express');
const app = express();

const port = 3000;
app.use(express.urlencoded({ extended: true }));//parses url encoded data
app.use(express.json())//now express can parse json encoded data



app.get("/", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard get request from the form ${user} `);
});

app.post("/", (req, res) => {
    let { user, password } = req.body;
    res.send(`standard post request from the form ${user}`);
})

app.listen(port, () => {
    console.log("listening on port 3000")
});