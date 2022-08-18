const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(request, response){
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: yamaso@gmail.com")
});

app.get("/about", function(req, res){
    res.send("<h1>Yamaso</h1><h2>I'm an Engineer aiming for the full-stack developer</h2>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>video games</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});