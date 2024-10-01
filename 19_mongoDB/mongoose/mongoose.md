A library that creates a connection between mongodb, node js javascript runtime environment.
It is an ODM (Object Data Modeling) library.

```javascript
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
```

This line connects to the given database and this connection expects an asynchronous promise from the user.

```javascript
main().catch((err) => console.log(err));
```

## Schema

Schema defines the shape of the documents within that collection.

```javascript
const userSchema = new mongoose.Schema({
  // Define schema fields here
});
```

[schema](mongoose.md)

##Models

model in mongoose is a class with which we construct documents

```javascript
const User = mongoose.model("User", userSchema);
```

here User is the model name and "User" is the collections name.
we generally use same name for both collection and model.

User --->users
Product -->products
Employee -->employees

this is how collections are created with plural name starting with small letter

### Inserting data using mongoose

```javascript
const user1 = new User({ name: "adam", email: "adam@hotmail.com", age: 45 });
const user2 = new user({ name: "jojo", email: "jojo@hotmail.com" });
```

At this point those values are not pushed to the database but it is created within the memory of the javascript

to check we can use node
the .load index.js
then user1
we can see an object with unique object id

```javascript
user1.save();
user2.save(); //to save in the database
```
