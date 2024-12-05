# Middleware in Express

> Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.
> Middleware can access and make changes to the request and response object.
> Chaining is possible in middleware (one middleware can call another middleware).
> Middleware have access to send response in the middle of operation and can end the request-response cycle.

## Common Middleware Functions:

1. `methodOverride`: Allows you to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
2. `bodyParser`: Parses incoming request bodies in a middleware before your handlers, available under the `req.body` property.
3. `express.static`: The `express.static` middleware in Express.js is used to serve static files such as HTML, CSS, JavaScript, images, etc. It also allows you to specify a directory to serve these files.
4. `express.urlencoded`: A built-in middleware function that parses incoming requests with URL-encoded payloads. It is based on `body-parser` and is typically used for parsing data sent through HTML forms using the `application/x-www-form-urlencoded` encoding.

### Examples:

```javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
```

## Use of `app.use`

`app.use([path,] callback [, callback...])` mounts the specified middleware function or functions at the specified path. The middleware function is executed when the base of the requested path matches the path.

> If the path is not mentioned, then it works for all the paths.
> `app.use()` is used for calling different middleware for different paths or path pattern or a regular expression pattern to match paths.
> Also used for different authentication purposes.
> This can be used to protect specific sensitive paths and authenticates before allowing the access to the path

> Callback functions can be:

1. A middleware function.
2. A series of middleware functions (separated by commas).
3. An array of middleware functions.
4. A combination of all of the above.

```javascript
app.use((req, res) => {
  console.log("Hi, I am a middleware");
  res.send("We can use it in this way also");
});
// For each route and each request, the response will be the same as the response was sent from a middleware and not reached any routes.
```

Let's say we send a GET request to `/random?query=abcd`, then we can access that in middleware like this:

```javascript
app.use((req, res) => {
  let { query } = req.query;
  console.log(query);
});
```

Generally, middleware is not used for sending responses; it is generally used for executing what will happen next.

### Use of `next()`

> The next middleware function is commonly denoted by a variable named `next`.
> If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function.

```javascript
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
```

### Creating a Utility Middleware

#### Logger - Helps to Log Information

```javascript
app.use((req, res, next) => {
  req.responseTime = new Date(Date.now()).toString();
  console.log(req.method, req.responseTime, req.hostname);
  next();
});
```

- `req.method` → shows which type of request we are getting like GET, POST, PUT, or DELETE.
- `req.hostname` → like localhost.
- `req.path` → like /random.

### API Token as Query String

Let's create a middleware for an API that checks if the access token was passed in the query string or not.

```javascript
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("Access Denied");
  }
});
```

For using multiple middleware we can do like this:

```javascript
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    // res.send("Access Denied");
    throw new Error("ACCESS DENIED!!");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});
```

### Error Handling

> The most common method is using Express's default error handler. This default error handler middleware function is added at the end of the middleware function stack by default. This middleware adds a status codes and prints outs the stack trace of the error(if occurred any)

#### Making Custom Error Handling Middleware

Define error handling middleware in the same way as other middleware functions, except error-handling functions have four arguments instead of three (`err`, `req`, `res`, `next`).

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
  // We can write next() to resume the normal execution of the code
  next(err); // We have to pass err in the next or to the default error handler by express
});
```

> Generally `next()` signifies the normal middleware and `next(err)` signifies the error handling middleware.

## Custom Error Classes

This is to have our own error message for each error code

```javascript
//another js file named ExpressError.js
class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = ExpressError;
```

> In app.js

```javascript
const ExpressError = require("./ExpressError");
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Access denied!!");
};
app.get("/api", checkToken, (req, res, next) => {
  res.send("data");
});
app.use((err, req, res, next) => {
  console.log("------ERROR------");
  console.log(err);
  let { status, message } = err;
  res.status(status).send(message); //this can cause error when the status is undefined
  //only works when we have definite status code
});
```

> To avoid this we can give default error code and default error message

```javascript
app.use((err, req, res, next) => {
  let { status = 500, message = " SOME ERROR OCCURRED" } = err;
  res.status(status).send(message);
});
```

> Here is a simple activity to use custom error handling class

```javascript
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "You are not an admin");
});
```

### Handling Async Errors

To handle asynchronous errors in Express, you can use the `next` function to pass the error to the error-handling middleware. Here is an example:
(refer 19_mongDB->chat_model-)

```javascript
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  try {
    let chat = await Chat.findById(id);
    if (!chat) {
      return next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});
```

In this example, if the chat is not found, an `ExpressError` is created and passed to the next middleware using `next()`. This ensures that the error is handled by the error-handling middleware.

### Example of Different Types of Errors to Handle

1. ID does not exist
2. Validation error

Here is an example of using `try` and `catch` to handle these types of errors:

```javascript
app.post("/chats", (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    newChat
      .save()
      .then(() => {
        console.log("Chat is saved in the database");
        res.redirect("/chats");
      })
      .catch((err) => {
        console.log(err);
        next(err); // Pass the error to the error-handling middleware
      });
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
});
```

In this example, if there is an error while saving the chat, it will be caught and passed to the error-handling middleware using `next(err)`.

## wrapAsync

Different types of error handling:

1. Normal error handling
2. Async error handling
3. Try and catch error handling (bulky style of coding)
4. wrapAsync

wrapAsync is a function that takes a function as an argument and returns a function.

Here is how it's done:

```javascript
//pseudocode
function wrapAsync(fnc) {
  return function (req, res, next) {
    func().catch(err); //execute the passed function with catch statement
  };
}
```

Here is the real code:

```javascript
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      // throw ExpressError(404, "chat  not found") this error will not be handled by the error handling middleware
      //to fix this
      next(new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", { chat });
  })
);
## Mongoose Errors

Mongoose generates different types of errors like:

1. Validation error: Occurs when the data does not meet the defined schema requirements.
2. Cast error: Happens when a value cannot be cast to the required type.

To handle these errors uniquely and print out the error name, you can use the following approach:

```javascript
const handleValidationErr = (err) => {
  // Particularly for the ValidationError
  console.log("This was a validation error, please follow the rules.");
  console.log(err.message);
  return err;
};

// Error name printing middleware and other tasks for particular errors
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});
```

In this example, if a validation error occurs, the `handleValidationErr` function is called to log the error details and handle it appropriately.
