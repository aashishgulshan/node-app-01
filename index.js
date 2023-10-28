require('dotenv').config();
const express = require('express');
const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello App");
})

app.get('/twitter', (req, res) =>{
    res.send("Twitter App");
})

app.get('/login', (req, res) =>{
    res.send('<h2> Please Login on App </h2>');
})

app.get('/yt', (req,res) =>{
    res.send('<h1> App On Youtube</h1>');
})

app.listen(process.env.PORT || port, () => {
    console.log(` Example app listening on port ${port || process.env.port}`)
})