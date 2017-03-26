var express = require("express"),
    bodyParser = require('body-parser'),
    db = require('./js/db');

var config = require("config");
var portNumber = config.get("Port.Number");
var siwdataTable = config.get("ScienceInjuryWatchlist.SiwData");
var commentDataTable = config.get("ScienceInjuryWatchlist.CommentData");
var app = express();

app.listen(portNumber, function() {
    console.log("Live at Port " + portNumber);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var router = express.Router();
var path = __dirname + '/';

app.use(express.static(__dirname + "/views/images"));

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path + "index.html");
});

router.get("/about", function(req, res) {
    res.sendFile(path + "views/about.html");
});

router.get("/world", function(req, res) {
    res.sendFile(path + "views/world.html");
});

router.get("/*", function(req, res) {
    res.sendFile(path + "views/404.html");
});

app.get("/api/world", function(req, res) {
    var select = req.query.select;
    console.log("'select' is set to '" + req.query.select + "'");
    var query = db.query("SELECT " + select + " FROM " + siwdataTable, function(err, result) {
        if (err) res.sendStatus(500);
        else {
            console.log(result);
            res.status(200).json(result);
        }
    })
});

app.use("/", router);

app.post("/about/", function(req, res) {
    var comment = req.body.commentInput;
    var post = {
        comment: comment
    };
    console.log("Inserting into table: " + commentDataTable + " comment: " + post.comment);
    var query = db.query("Insert INTO " + commentDataTable + " SET ? ", post, function(err, result) {
        if (err) console.log(err);
        else console.log(result);
    });
    res.sendFile(path + "about.html");
});

app.post("/", function(req, res) {
    //res.send("Hello world!");
    var date = req.body.dateInput;
    var injury = req.body.injuryInput;
    var description = req.body.descriptionInput;
    var locationX = req.body.locationInputX;
    var locationY = req.body.locationInputY;
    var post = {
        dateOfInjury: date,
        nameOfInjury: injury,
        description: description,
        geolocX: locationX,
        geolocY: locationY
    };
    var query = db.query("Insert INTO " + siwdataTable + " SET ? ", post, function(err, result) {
        if (err) console.log(err);
        else console.log(result);
    });
    console.log(date + ", " + injury + ", " + description);
    console.log(query.sql);
    res.sendFile(path + "index.html");
});