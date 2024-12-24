const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")
const users = require("./routes/user.js")
const posts = require("./routes/post.js")
const expressSession = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(expressSession(sessionOptions));

app.use(flash())

app.use((req, res, next) => {
    res.locals.messages = req.flash("success")
    res.locals.error = req.flash("error")
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name === "anonymous") {
        req.flash("error", "please provide a name")
    }
    else {
        req.flash("success", "user registered successfully")
    }
    res.redirect("/hello");
})

app.get("/hello", (req, res) => {
    // res.locals.messages = req.flash("success");
    // res.locals.error=req.flash("error") //instead writing this again and again we can use middleware.
    res.render("page.ejs", { name: req.session.name, });
})

// app.use(expressSession({
//     secret: "mysupersecretstring",
//     resave: false,//forces the session to be saved back to the session store even if the session was never modified during the request.
//     saveUninitialized: true//forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
// }))

// app.get("/test", (req, res) => {
//     res.send("test successful.")
// })

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     }
//     else {
//         req.session.count = 1;
//     }
//     res.send(`you sent aa request ${req.session.count} times`)
// })
// app.use(cookieParser("thisismysecretkey"))

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("home root")
// });

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "namaste"); //send a cookie named greet with value 'hello'
//     res.cookie("madein", "india");
//     res.send("sent you some cookies");
// })

// app.get("/greet", (req, res) => {
//     let { name = "anonymous" } = req.cookies;
//     res.send(`hello ${name}`);
// })

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("winner", "yes", { signed: true });
//     res.send("sent you a signed cookie")
// })

// app.get("/verifycookie", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified")
// })


app.use("/users", users)
app.use("/posts", posts)


app.listen(8080, () => {
    console.log("app is listening on port 8080")
});