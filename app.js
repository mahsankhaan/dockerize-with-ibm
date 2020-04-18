const express = require("express")
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

var port = 3000;

app.get("/home", function (req, res) {
    console.log("I am home");
    res.send("Hello everyone");

});

app.get("/", function (req, res) {
    res.render("login");
});

var server = app.listen(port, function () {
    console.log("Server listening on " + port);
})
module.exports.app = app;
/*app.listen(3000 , function(){
    console.log("App is running");
});*/