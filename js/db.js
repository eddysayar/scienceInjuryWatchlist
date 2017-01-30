var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'siwserver',
    password: 'v0E6JICT8fjF'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
})

module.exports = connection;