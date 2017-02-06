var express = require("express"),
    bodyParser = require('body-parser'),
    db = require('./js/db');

var app = express();

app.listen(3000, function() {
    console.log("Live at Port 3000");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var router = express.Router();
var path = __dirname + '/';

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

app.use("/", router);

app.post("/", function(req, res) {
    //res.send("Hello world!");
    var date = req.body.dateInput;
    var injury = req.body.injuryInput;
    var description = req.body.descriptionInput;
    var post = {
        dateOfInjury: date,
        nameOfInjury: injury,
        description: description
    };
    var query = db.query("Insert INTO scienceinjurywatchlist.siwdata SET ? ", post, function(err, result) {
        if (err) console.log(err);
        else console.log(result);
    });
    console.log(date + ", " + injury + ", " + description);
    console.log(query.sql);
    res.sendFile(path + "index.html");
});