## Express Router

- Express Routers are way to organize your express application such that out primary app.js file does not not become bloated.
- A router object is an isolated instance of middleware and routes.
- You can think of it as a 'mini-application" capable only for performing middleware and routing functions.
- Every express application has a built-in app router.

```javascript
const router = express.Router(); //creates new router object
```

- To avoid bloating in the `server.js` first create this file structure.

```plaintext
 project/
├── server.js
├── routes/
│   ├── user.js
│   └── post.js
```

Home Route:

```javascript
app.get("/", (req, res) => {
  res.send("home root");
});
```

Modular Routes:

```javascript
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
```

These require route handlers defined in user.js and post.js files (assumed to be in the routes folder).

```javascript
app.use("/users", users);
app.use("/posts", posts);
```

These mount the users and posts routes under /users and /posts paths respectively.
Server Listening:

```javascript
app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
```

Starts the server on port 8080 and logs a message when it is up and running.

Here are the detailed router files.

### user.js

```javascript
const express = require("express");
const router = express.Router();

//GET-users
router.get("/", (req, res) => {
  res.send("get request for users");
});
//GET show-users-id
router.get("/:id", (req, res) => {
  res.send("get request for user id");
});
//POST-users
router.post("/", (req, res) => {
  res.send("post request for users");
});
//PUT-users
router.put("/", (req, res) => {
  res.send("put request for the users");
});
//DELETE-users
router.delete("/:id", (req, res) => {
  res.send("delete request for the users");
});

module.exports = router;
```

### post.js

```javascript
const express = require("express");
const router = express.Router();

//GET-posts
router.get("/", (req, res) => {
  res.send("get request for the posts");
});
//GET show-post-id
router.get("/:id", (req, res) => {
  res.send("get request for the posts");
});
// POST-posts
router.post("/", (req, res) => {
  res.send("post request for posts");
});
//PUT-posts
router.put("/", (req, res) => {
  res.send("put request for the posts");
});
//DELETE-posts
router.delete("/:id", (req, res) => {
  res.send("delete request for the posts");
});

module.exports = router;
```

we can do either things of both

1. way-1

```javascript
//in  server.js
app.use("/", users); //<--notice this
// and in user.js
app.get("/users/:id", (req, res) => {
  //<---
  res.send("user id get request");
});
app.post("/users", (req, res) => {
  //<---
  res.send("user post request");
});
```

2. way-2(more preferred to)

```javascript
//in server.js
app.use("/users", users); //<--notice this-
// and in user.js
app.get("/:id", (req, res) => {
  //<---
  res.send("user id get request");
});
app.post("/", (req, res) => {
  //<---
  res.send("user post request");
});
```
