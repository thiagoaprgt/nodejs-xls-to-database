// get the client
const mysql = require('mysql2');

// create the connection to database
/*
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: ''
});
*/

// exemplo de connection string: mysql://root:password@localhost:port/dbName

const connection = mysql.createConnection("mysql://root:password@localhost:port/dbName");


// connection.connect(function (err) {

//     console.log("Conexão com o banco de dados realizada com sucesso.");

// });


const sql = "select * from account limit 10";

const results = connection.query('SELECT * FROM account LIMIT 5', (err, rows, fields) => {
  return rows;
});


console.log(results);