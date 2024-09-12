const express = require("express")
const app = express();
const port = 6060
const path = require("path")
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '416ac246-e7ac-49ff-93b4-f7e94d997e6b' //everytime generates a unique long string 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const methodOverride = require('method-override')//as html can only send get and post request we have to override it with method-override package and covert it desirable request
app.use(methodOverride('_method'))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: uuidv4(),
        username: "whypiku",
        content: "i love coding "
    },
    {
        id: uuidv4(),
        username: "rahulkumar",
        content: "i love mountain climbing "
    }
    , {
        id: uuidv4(),
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
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content })
    res.redirect("/posts")
})


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post })

})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;//comes with request 
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });//{post }-->means sending post data along with page

})


app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log("listening on port " + port)
})


//server the post -->get -->/posts/new
//add new post --->post --->/posts

