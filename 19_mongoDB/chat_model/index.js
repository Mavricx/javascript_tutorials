const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname, 'views'));
app.set("views", "ejs");
main()
    .then(() => {
        console.log("connection successful")
    })
    .catch(err => console.lkog(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "Neha Ghosh",
    to: "Priya Sharma",
    msg: "Hey there, can you send me those exam sheets?",
    created_at: new Date()
})

chat1.save().then((res) => {
    console.log("chat saved successfully")
})

app.get('/', (req, res) => {
    res.send("root is working")
})

app.listen(port, () => {
    console.log("listening on port 8080")
})