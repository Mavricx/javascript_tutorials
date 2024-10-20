const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
let allchat=[
    {
    from: "Neha Ghosh",
    to: "Priya Sharma",
    msg: "Hey there, can you send me those exam sheets?",
    created_at: new Date()
},
{
from: "Priya Sharma",
to: "Neha Ghosh",
msg: "Sure, I'll send them by tonight.",
created_at: new Date()
},
{
from: "Rahul Verma",
to: "Amit Singh",
msg: "Are we still on for the meeting tomorrow?",
created_at: new Date()
},
{
from: "Amit Singh",
to: "Rahul Verma",
msg: "Yes, see you at 10 AM.",
created_at: new Date()
},
{
from: "Sonia Mehta",
to: "Ravi Kumar",
msg: "Happy Birthday! Have a great day!",
created_at: new Date()
},
{
from: "Ravi Kumar",
to: "Sonia Mehta",
msg: "Thank you so much!",
created_at: new Date()
},
{
from: "Anita Desai",
to: "Vikram Patel",
msg: "Can you review my code?",
created_at: new Date()
},
{
from: "Vikram Patel",
to: "Anita Desai",
msg: "Sure, I'll do it by EOD.",
created_at: new Date()
},
{
from: "Karan Johar",
to: "Alia Bhatt",
msg: "Let's catch up over coffee.",
created_at: new Date()
},
{
from: "Alia Bhatt",
to: "Karan Johar",
msg: "Sounds good! When?",
created_at: new Date()
},
{
from: "Rohit Shetty",
to: "Ajay Devgn",
msg: "Can you send me the script?",
created_at: new Date()
},
{
from: "Ajay Devgn",
to: "Rohit Shetty",
msg: "Sending it now.",
created_at: new Date()
},
{
from: "Deepika Padukone",
to: "Ranveer Singh",
msg: "Dinner tonight?",
created_at: new Date()
},
{
from: "Ranveer Singh",
to: "Deepika Padukone",
msg: "Absolutely!",
created_at: new Date()
},
{
from: "Shahrukh Khan",
to: "Gauri Khan",
msg: "Miss you!",
created_at: new Date()
},
{
from: "Gauri Khan",
to: "Shahrukh Khan",
msg: "Miss you too!",
created_at: new Date()
},
{
from: "Salman Khan",
to: "Katrina Kaif",
msg: "Let's go for a run.",
created_at: new Date()
},
{
from: "Katrina Kaif",
to: "Salman Khan",
msg: "Sure, see you at 6 AM.",
created_at: new Date()
},
]
Chat.insertMany(allchat);

