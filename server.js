const express = require("express");
const req = require("express/lib/request");

const app = express();

app.get("/", function (request, response) {
    response.send("<h1 style = 'color: red; font-size:5rem;'>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: <em style='font-weight:bold;'>walakulu@gmail.com</em>");
});

app.get("/about", function (req, res) {
    res.send("This is my <span style='color:blue;'>about page.</span>");
})
app.get("/hobbies", function (req, res) {
    res.send("My hobbies are <ul><li>eating</li> <li>watching movies</li></ul>")
})

app.listen(3000, function () {
    console.log("Sever started on port 3000");
});