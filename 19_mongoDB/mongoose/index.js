const mongoose = require('mongoose');
// const url = "https://localhost:8080/users"
// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const User = mongoose.model("User", userSchema); //this created a collection of name users not User
// const Employee=mongoose.model("Employee",userSchema);

const user1 = new User({ name: "adam", age: 23, email: "adam@example.com" });
//