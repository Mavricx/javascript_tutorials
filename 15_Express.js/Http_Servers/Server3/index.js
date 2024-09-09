//creating an http server

// const express = require("express");
// const app = express();
// const port = 3000;


// function sum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans = ans + i;

//     }
//     return ans;
// }
// app.get("/", (req, res) => {
//     const n = req.query.n;
//     res.send(`The sum of first ${n} numbers is ${sum(n)}`);

// })

// app.listen(port);


const express = require('express');
const app = express();

const user = {
    name: "john",
    kidneys: [
        {
            healthy: false

        },
        {
            healthy: true
        }
    ]
}

var users = [user];
app.use(express.json())

app.get('/', (req, res) => {//get request are for to show data/processed data nothing added or removed
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);
    const numberOfKidneys = johnKidneys[0].length;
    console.log(numberOfKidneys);
    let healthyKidneys = 0;
    for (let kidney of users[0].kidneys) {
        if (kidney.healthy) {
            healthyKidneys++;
        }
    }
    const unhealthyKidneys = numberOfKidneys - healthyKidneys;
    res.send(JSON.stringify(healthyKidneys));


});

app.post('/', (req, res) => {//post request are mainly for adding more things to already exiting data
    console.log(req.body)
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    })
    res.json({
        msg: "done"
    })
})


app.put('/', (req, res) => {//put request are mainly for updating the data)
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "added more good kidneys to the body"
    })
})

app.delete('/', (req, res) => {//delete request are mainly for deleting the data)
    users[0].kidneys.pop();
    res.json({
        msg: "removed a kidney"
    })
})

app.listen(3000);
