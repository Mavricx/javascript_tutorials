const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js")
const methodOverride = require("method-override")
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

main()
    .then(() => {
        console.log("connection successful")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get('/', (req, res) => {
    res.send("root is working")
})

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index", { chats })
})

app.post("/chats", (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        })
        newChat.save().then((res) => {
            console.log("chat is saved in the database");
        }).catch((err) => {
            console.log(err);
        })
        res.redirect("/chats")
    }
    catch (err) {
        next(err)
    }
});

//new route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "page not found")
    res.render("new.ejs")
})

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err));
    };
}
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        // throw ExpressError(404, "chat  not found") this error will not be handled by the error handling middleware
        //to fix this 
        next(new ExpressError(404, "chat not found"));

    }
    res.render("edit.ejs", { chat })
}));
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat)
    res.redirect("/chats")
})
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")

})

const handleValidationErr=(err)=>{
  console.log("This was a validation error, please follow rules.")  
  console.log(err.message)
  return err;
}

//Error name printing middleware and other tasks for particular error
app.use((req, res, next) => {
    console.log(err.name);
    if(err.name=="ValidationError"){
        err=handleValidationErr(err);
    }
    next(err);
})
//Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);

})
app.listen(port, () => {
    console.log("listening on port 8080")
})