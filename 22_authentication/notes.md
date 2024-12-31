## Authentication

> Authentication is the process of verifying who someone is.
> Sign-up and login are processes that come under this.

## Authorization

Authorization is the process of verifying what specific applications, files, and data a user has access to.

> Just like anyone other than you can't access your bank account, you have authorization to have that access.

## Storing Passwords

We never store the password as it is. We store their hashed form, but we can store email, username, and other credentials as they are.

```python
"helloworld" ----hashing function----> "936a185caaa266bb9cbe981e9e05cb78cd732b0b3280eb944412bb6f8f8f07af"
```

> We can't form "helloworld" from this unrecognizable long string.
> Each time we login, the hashing function converts the entered password and checks it against the stored string, not with the actual password.

## What is this hashing function?

> For every input, there is a fixed output.
> They are one-way functions, we can't get input from output.
> For a different input, there is a different output but of the same length.
> A small change in input should bring a large change in output.

Examples of commonly used hashing functions are SHA256, MD5, CRC, bcrypt.

> SHA256 is preferably not a good hashing function for industry-level production.
> We generally prefer a slow hashing function because it takes extra time to find its hash form and hence our real password for a hacker.

## What is salting?

Password salting is a technique to protect passwords stored in databases by adding a string of 32 or more characters and then hashing them.

> Let's say the salt is `salt=%?@`
> Then `abc` will become `abc%?@` or `%?@abc` or `ab%?@c`
> Hackers generally use a `reverse lookup table` to match the obtained hash with the most commonly used password's hash form.
> This way we can avoid password leaks even though it is a commonly used password.
> Various popular tools already exist in Node.js to help with hashing and salting.
> `passport` is one of such tool used for this.

### passport

> Passport is authentication middleware for Node.js. Extremely flexible and modular, passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and passwords, Facebook and twitter and more.

> here strategies means we can use many existing accounts on various platforms to our advantage and login/sign up like facebook, google, github, spotify, or local sign up and login(passport-local ) and many more.

Here how to use it(for passport-local)

1. `run npm i passport`
2. `run npm i passport-local`--> Passport strategy for authentication with a username and password.
3. `run i passport-local-mongoose`--> A mongoose plugin that simplifies building username and password login with passport
4. `User Model`
   user:username, password, email
   > You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.Additionally, Passport-Local Mongoose adds some methods to your Schema. See the API

## configuring strategies

### passport.initialize()

> A middleware that initialize passport

### passport.session()

> a web application needs the ability to identify users as they browse from page to page. This series of requests and responses , each associated with the same user, is known as a session.

### passport.use(new LocalStrategy(User.authenticate()))

This code sets up passport to use the local strategy for authenticating users with a username and password,leveraging the authenticate method from the User model.

```javascript
app.use(passport.initialize());//Initialize passport.js to be used in the express application. 

app.use(passport.session());//Integrate passport.js with express session, allowing persistent login session.

passport.use(new LocalStrategy(User.authenticate()));//configures passport.js to use the local strategies for authentication , using the authenticate method provided by the User model.

passport.serializeUser(User.serializeUser());//Define how user data is serialized to the session, using the serializeUser method from the User model.

passport.deserializeUser(User.deserializeUser());//Defines how user data is deserialize from the session, using deserializeUser method from the User model.
```