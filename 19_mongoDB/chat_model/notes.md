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

   7. Creating `init.js` to initialize and put some sample data for the database.
   8. Creating `index.js` as `/chat` route and setting up `index.ejs` to render all the chats and styling it with `style.css`.
   9. New route `chats/new` to show a form and take data/message input from the user.
   10. A new route `chats/:id/edit` will enable us to edit the chat by taking us to the `edit.ejs` page and take new modified message.

      ```javascript
      app.get("/chats/:id/edit", async (req, res) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
      });

      app.put("/chats/:id", async (req, res) => {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
         id,
         { msg: newMsg },
         { runValidators: true, new: true }
        );
        console.log(updatedChat);
        res.redirect("/chats");
      });
      ```

   11. By clicking the delete button on the side of the edit button, the clicked chat will be deleted, thus removing that particular route and data from the database.

      ```javascript
      app.delete("/chats/:id", async (req, res) => {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
      });
      ```

