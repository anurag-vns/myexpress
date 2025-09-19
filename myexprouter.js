const express = require("express");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
    res.send("welcome on Homepage");
});

app.get("/about", (req, res) => {
    res.send("welcome on about page");
});

app.get("/contact", (req, res) => {
    res.send("welcome on contact page");
});

app.listen(port,()=>{
    console.log(`localhost:${port}`);
});