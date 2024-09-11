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
        username: "whypiku",
        content: "i love coding "
    },
    {
        username: "rahulkumar",
        content: "i love mountain climbing "
    }
    , {
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

app.post("/posts/new", (req, res) => {
    console.log(req.body)
    res.send("post response working")
})

app.listen(port, () => {
    console.log("listening on port " + port)
})


//server the post -->get -->/posts/new
//add new post --->post --->/posts

