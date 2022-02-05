const express = require('express')
const romanConverter = require('./romanNumberConverter')
const app = express()
const path = require('path');
const port = 3000;

var romanRes = {};

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
    let romanNumber = romanConverter.converter(dec);
    sendMessage(romanNumber);
    res.sendStatus(200);
})

function sendMessage(roman) {

    let id = (new Date()).toLocaleTimeString();

    romanRes.write('id:' + id + '\n');
    romanRes.write('data:' + roman);
    romanRes.write('\n\n');
}

app.get('/roman/', (req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    res.flushHeaders();
    res.write('retry:10000\n\n');
    romanRes = res;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})