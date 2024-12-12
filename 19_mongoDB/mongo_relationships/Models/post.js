const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err))


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}

const userSchema = new Schema({
    username: String,
    email: String,
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    // let user1 = new User({
    //     username: "whypiku",
    //     email: "whypiku@gmail.com"
    // })
    let user1 = await User.findOne({ username: "whypiku" });
    // let post1 = new Post({
    //     content: "This is my first post",
    //     likes: 1234,
    //     user: user1
    // })
    let post2 = new Post({
        content: "This is my second post",
        likes: 4390,
        user: user1
    })

    // let res1 = await user1.save();
    // console.log(res1);
    post2.user = user1;
    let res2 = await post2.save();
    console.log(res2);
}

// addData();

const getData = async () => {
    let result = await Post.findOne({}).populate("user");
    console.log(result);
}

getData();