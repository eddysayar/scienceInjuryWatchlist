var express = require("express");
var app = express();

var db = require('./js/db');

var router = express.Router();
var path = __dirname + '/views/';

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

router.get("/about", function(req, res) {
    res.sendFile(path + "about.html");
});

router.get("/world", function(req, res) {
    res.sendFile(path + "world.html")
})

app.use("/", router);

app.use("*", function(req, res) {
    res.sendFile(path + "404.html");
});

app.post('/', function(req, res) {
    Console.log(req.body);
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
    console.log("Live at Port 3000");
});