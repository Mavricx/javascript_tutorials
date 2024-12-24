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

#### counting how many times the get request got send using session and cookies

```javascript
app.use(
  expressSession({
    secret: "mysupersecretstring",
    resave: false, //forces the session to be saved back to the session store even if the session was never modified during the request.
    saveUninitialized: true, //forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  })
);

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`you sent aa request ${req.session.count} times`);
});
```

- as we used req.session.count to store how many times the get request we got ..similarly we are going to external storage for this..

here is the example of storing and using the information from the session

```javascript
app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name; //storing information from the source
  console.log(req.session.name);
  res.send(`welcome ${name}`); //using the stored information in the same route
});

app.get("/hello", (req, res) => {
  res.send(`hello ${req.session.name}`); //using the information in the different route.
});
```

## connect-flash

- The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.
- Flash messages are stored in the session. First setup session as usual by enabling cookieParser and session middleware.Then use flash middleware provided by connect-flash.
  here how to use it

```javascript
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "user registered successfully"); //key and value pair, succes is the key and used to call value inside flash() function.
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  console.log(req.flash("success"));
  res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });
});
```

and for the output in ejs

```html
<body>
  <%= msg %>
  <h1>hello , <%=name %></h1>
</body>
```

- Lets learn how to flash in a better way using `res.locals()`
- `res.locals()` stores the flash values which we can directly access in the ejs pages without passing them in the redirect one by one manually.
- Here is how to do it with the help of a middleware also.

```javascript
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  res.locals.error = req.flash("error");
});

//register route=>  localhost:8080/register?name=pikul
app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    //in case no name is provided.
    req.flash("error", "please provide a name");
  } else {
    req.flash("success", "user registered successfully");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // res.locals.messages = req.flash("success");
  // res.locals.error=req.flash("error") //instead writing this again and again we can use middleware as upper middleware
  res.render("page.ejs", { name: req.session.name });
});
```
