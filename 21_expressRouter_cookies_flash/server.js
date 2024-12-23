const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")
const users = require("./routes/user.js")
const posts = require("./routes/post.js")

app.use(cookieParser("thisismysecretkey"))

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "namaste"); //send a cookie named greet with value 'hello'
    res.cookie("madein", "india");
    res.send("sent you some cookies");
})

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("home root")
});

app.get("/greet", (req, res) => {
    let { name = "anonymous" } = req.cookies;
    res.send(`hello ${name}`);
})

app.get("/getsignedcookie", (req, res) => {
    res.cookie("winner", "yes", { signed: true });
    res.send("sent you a signed cookie")
})

app.get("/verifycookie", (req, res) => {
    console.log(req.signedCookies);
    res.send("verified")
})
app.use("/users", users)
app.use("/posts", posts)


app.listen(8080, () => {
    console.log("app is listening on port 8080")
});