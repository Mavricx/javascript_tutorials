## Steps performed in the order of given below

1. Setting up `index.js` and connecting it to MongoDB database through Mongoose.
2. Creating `views` folder to hold various EJS files.
3. Creating `models` folder to hold various models for Mongoose which later form collections in MongoDB. For now, we will create a `chatSchema` in `chat.js` file.
4. Write `chatSchema` into the `chat.js` and export it.
   - Here chat will have: `_id`, `from`, `to`, `message`, `created_at`.
   - In the model, we will create multiple schemas in the future.
5. Import `chat.js` into the `index.js` file like this:

   ```javascript
   // Mentioning just in case you forgot
   const Chat = require("./models/chat.js");
   ```

6. Let's save a chat message:

   ```javascript
   let chat1 = new Chat({
     from: "Neha Ghosh",
     to: "Priya Sharma",
     msg: "Hey there, can you send me those exam sheets?",
     created_at: new Date(),
   });

   chat1.save().then((res) => {
     console.log("chat saved successfully");
   });
   ```

7. Creating init.js to initialize put  some sample data for the database.
8. Creating index.js as /chat route and setting up index.ejs to render all the chats and styling it with style.css
9. New route chats/new to show a form and taking data/message input from the user.
