//this index.js file will act as server 


const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {//app.listen is function to listen incoming requests
    console.log(`app is listening on ${port}`);
})