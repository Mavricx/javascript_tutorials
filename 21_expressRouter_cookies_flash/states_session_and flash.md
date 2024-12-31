## stateful protocol

Stateful protocol require server to save the status and session information.
e.g-ftp

## stateless protocol

Stateless Protocol does not require the server to retain the server information or session information.
e.g -http

Although http is a stateless protocol we going to add some stateful features in this.

## express session

Express sessions allow you to store user data between HTTP requests, making the session stateful.

### Server-side

- The server stores session data, typically in memory or a database.
- Each session has a unique identifier stored in a cookie on the client side.
- The server uses this identifier to retrieve the session data for each request.

### Client-side

- The client receives a session ID cookie from the server.
- This cookie is sent with each subsequent request to the server.
- The server uses the session ID to identify and manage the session data.

By using express sessions, you can maintain user-specific data across multiple requests, enhancing the user experience.

#### Counting how many times the GET request was sent using session and cookies

```javascript
app.use(
    expressSession({
        secret: "mysupersecretstring",
        resave: false, // Forces the session to be saved back to the session store even if the session was never modified during the request.
        saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
    })
);

app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});
```

As we used `req.session.count` to store how many times the GET request was received, similarly, we can use external storage for this.

Here is an example of storing and using the information from the session:

```javascript
app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name; // Storing information from the source
    console.log(req.session.name);
    res.send(`Welcome ${name}`); // Using the stored information in the same route
});

app.get("/hello", (req, res) => {
    res.send(`Hello ${req.session.name}`); // Using the information in a different route
});
```

## connect-flash

- The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.
- Flash messages are stored in the session. First, set up the session as usual by enabling `cookieParser` and session middleware. Then use the flash middleware provided by `connect-flash`.

Here is how to use it:

```javascript
app.use(flash());

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    req.flash("success", "User registered successfully"); // Key and value pair, 'success' is the key and used to call value inside flash() function.
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    console.log(req.flash("success"));
    res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });
});
```

And for the output in EJS:

```html
<body>
    <%= msg %>
    <h1>Hello, <%= name %></h1>
</body>
```

Let's learn how to flash in a better way using `res.locals`.

- `res.locals` stores the flash values which we can directly access in the EJS pages without passing them in the redirect one by one manually.
- Here is how to do it with the help of middleware:

```javascript
app.use((req, res, next) => {
    res.locals.messages = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Register route => localhost:8080/register?name=pikul
app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name === "anonymous") {
        // In case no name is provided
        req.flash("error", "Please provide a name");
    } else {
        req.flash("success", "User registered successfully");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});
```

```javascript
const sessionOptions = { 
    // Secret key used to sign the session ID cookie (should be changed to a secure value in production)
    secret: "mysupersecret", 
    // should be changed later. Forces the session to be saved back to the session store, even if it was never modified during the request
    resave: false, 
    // Forces a session that is "uninitialized" to be saved to the store
    saveUninitialized: true, 
    // Configuration options for the session ID cookie
    cookie: { 
        // Sets the expiration date of the cookie (7 days from now)
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, 
        // Sets the maximum age of the cookie in milliseconds (7 days)
        maxAge: 7 * 24 * 60 * 60 * 1000, 
        // Ensures the cookie is only sent over HTTP(S), not client JavaScript
        httpOnly: true,
    }
}

// Use the session middleware with the specified options
app.use(session(sessionOptions));
```