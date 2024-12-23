## Web Cookies

HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.

### Uses of Cookies:

- Personalization
- Tracking
- Authentication

### `res.cookie(name, value [, options])`

- Sets cookie name to value. The value parameter may be a string or object converted to JSON.
- The options parameter is an object that can have the following properties.

```javascript
app.get("/getcookies", (req, res) => {
  res.cookie("greet", "namaste"); // send a cookie named greet with value 'namaste'
  res.cookie("madein", "india");
  res.send("sent you some cookies");
});
```

- The cookie gets placed only when the GET request hits the `/getcookies` route.

## Cookie Parser Package

- to access and to read cookies from the browser we have to use a middleware called `cookie parser` as `req.cookie` returns undefined in case we want to print it.

```javascript
app.use(cookieParser());
```

- Here is how to access it.

```javascript
app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  res.send(`hello ${name}`);
});
```
### Signed Cookie

> To avoid tampering or unintentional changes in the cookie, we use signed cookies.

Steps to send signed cookies:

1. First, use the cookie parser with a secret code:

    ```javascript
    app.use(cookieParser("secretcode"));
    ```

2. Send a signed cookie:

    ```javascript
    app.get("/getsignedcookie", (req, res) => {
      res.cookie("winner", "yes", { signed: true });
      res.send("sent you a signed cookie");
    });
    ```

3. Check if the cookie is tampered with or not:

    ```javascript
    app.get("/verifycookie", (req, res) => {
      console.log(req.signedCookies); // This will print the value of the signed cookie if the cookie is not altered. It will not print if altered (returns an empty object or false).
      res.send("verified");
    });
    ```
