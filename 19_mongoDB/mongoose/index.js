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

// const user1 = new User({ name: "adam", age: 23, email: "adam@example.com" });
// const user2 = new User({ name: "jojo", email: "jojo@hotmail.com", age: 32 });

// // user1.save();

// user2.save().then((res) => console.log(res)).catch(err => console.log(err));
// User.insertMany([
//     { name: "Tony", email: "nottonystack@gmail.com", age: 43 },
//     { name: "peter", email: "notSpiderman@gmail.com", age: 24 },
//     { name: "bruce", email: "definitelynotHulk@gmail.com", age: 34 }
// ]).then((res) => console.log(res)).catch(err => console.log(err));

// User.find({ age: { $gt: 20 } })
//     .then((res) => {
//         console.log(res[0].name);
//     })
//     .catch((err) => {
//         console.log(err)
//     }); 

// User.updateMany({ age: { $eq: 23 } }, { age: 49 })
//     .then((res) => {
//         console.log(res);
//     });


// User.findOneAndUpdate(
//     { name: 'bruce' }, // Filter criteria
//     { $set: { age: 78 } } // Update operation
// ).then((res) => {
//     console.log(res)
// });

// User.find({}).then((res) => { console.log(res) }).catch(err => console.log(err));

// const updatedDoc = User.findOneAndUpdate(
//     { name: "bruce" }, // Filter criteria
//     { $set: { age: 78 } }, // Update operation
//     { new: true }
//   ).then((res) => {
//     console.log(res);
//   });

//   console.log(updatedDoc);
// User.deleteOne({ name: "bruce" }).then((res) => {
//     console.log(res);
// })