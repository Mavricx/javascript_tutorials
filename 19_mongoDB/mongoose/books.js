const mongoose = require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');

}

main().then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log("connection error: " + err)
})

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0
    }
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 200
});

const book2 = new Book({
    title: "How to talk to anyone",
    author: "Leil Lowndes",
    price: 300,
})

book2.save().then((res) => {
    console.log("new book saved into the database");
})