var mysql = require('mysql');
var config = require('config');
var dbConfig = config.get("ScienceInjuryWatchlist.dbConfig");

var connection = mysql.createConnection(dbConfig);
connection.connect()

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
})

module.exports = connection;