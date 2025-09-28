var express = require('express');
var app = express();
var path = require('path');
const port= 3000;
console.log(__dirname);
app.get('/', (req, res) => {
    res.send('Hello my world');
});

app.listen(port,()=>{
    console.log(`localhost:${port}`);
});