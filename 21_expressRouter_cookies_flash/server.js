const express = require('express');
const app = express();

const users = require("./routes/user.js")
const posts = require("./routes/post.js")

app.get("/", (req, res) => {
    res.send("home root")
});
app.use("/users", users)
app.use("/posts", posts)


app.listen(8080, () => {
    console.log("app is listening on port 8080")
});