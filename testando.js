// get the client
const mysql = require('mysql2');


// create the connection to database

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'dev',
  database: 'proponto',
  port: 13306
});

const results = connection.query('SELECT * FROM account LIMIT 5', function(err, results, fields) {
    console.log(results); // results contains rows returned by servera    
});

