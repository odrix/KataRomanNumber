const express = require('express')
const romanConverter = require('./romanNumberConverter')
const app = express()
const path = require('path');
const port = 3000

app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    };

    res.sendFile('index.html', options)
})

app.get('/app.js', (req, res) => {
    var options = {
        root: path.join(__dirname)
    };

    res.sendFile('app.js', options)
})

app.get('/convert/:decimalNumber', (req, res) => {

    let dec = parseInt(req.params.decimalNumber)
    var romanNumber = romanConverter.converter(dec);
    res.send(romanNumber);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})