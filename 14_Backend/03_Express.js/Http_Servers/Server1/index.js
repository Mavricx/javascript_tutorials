const express = require('express');

const app = express()
const port = 3000


app.get('/route-handler', (req, res) => {
    res.json({//send json in this case
        name: 'priyanshu',
        age: 24
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("request sent now");
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)

}) 