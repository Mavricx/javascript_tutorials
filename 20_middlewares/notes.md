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
    res.send("Access Denied");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});
```

### Error Handling

The most common method is using Express's default error handler. This default error handler middleware function is added at the end of the middleware function stack.

Error handling middlewares

Making custom error handling middleware
define error handilng middleware in the same way as other middleware functions, except error-handling functions have four arguments instead of three (err, req, res, next)

```javascript
app.use((err, req, res, next)=>{
  console.error(err.stack);
  console.status(500).send("something broke")
  //we can write next() to presume the normal execution of the code 
   next(err);//we have to pass err in the next 
})
```
