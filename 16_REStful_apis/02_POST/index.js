const express = require("express")
const app = express();
const port = 6060
const path = require("path")

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: "godless",
        username: "whypiku",
        content: "i love coding "
    },
    {
        id: "express",
        username: "rahulkumar",
        content: "i love mountain climbing "
    }
    , {
        id: "goodfella",
        username: "shardha khapra",
        content: "i love listening to old music and speeches "
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})
app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body
    posts.push({ username, content })
    res.redirect("/posts")
})


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post})

})

app.listen(port, () => {
    console.log("listening on port " + port)
})


//server the post -->get -->/posts/new
//add new post --->post --->/posts

