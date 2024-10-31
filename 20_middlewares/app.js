const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi I am 1st middleware")
//     next();
//     console.log("This is after next")//this will be executed after 2nd middleware.but generally nothing was written after next()
//     //use return next()
// });
// app.use((req, res, next) => {
//     console.log("Hi I am 2nd middleware")
//     next();
// });

// app.use((req, res, next) => {
//     // req.responseTime = new Date(Date.now()).toString();
//     // console.log(req.method, req.responseTime, req.hostname);
//     // next();
//     req.time = new Date(Date.now())
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    }
    throw new Error("ACCESS DENIED")
});

app.get("/api", (req, res, next) => {
    res.send("data")
})

app.get('/', (req, res) => {
    res.send("Hi I am root");
})

app.get("/random", (req, res) => {
    res.send("hi this is a random page")
});
app.get("/err", (req, res) => {
    res.send("ohh there is an error")
});
app.use((err, req, res, next) => {
    // console.error(err.stack);
    // console.status(500).send("something broke")
    //or
    console.log("------ERROR------")
    console.log(err);
    next(err);// this triggers the default error handler of express
    //this next will search for next non error handling middleware which can be default error handling middleware.
})

// app.use((req, res, next) => {
//     res.status(404).send("page not found");
// })//if any route not match


//if we write app.use and all that here then nothing will be printed  in terminal and every thing will work fine 
//we have to write it before writting get request.
app.listen(8080, () => {
    console.log("app is listening on port 8080")
});