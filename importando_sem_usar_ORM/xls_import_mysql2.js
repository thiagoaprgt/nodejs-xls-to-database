// get the client
const mysql = require('mysql2');
const readXLS = require('../read_xls');

const file = './../teste.xls';

const xls = readXLS(file);

// Obtendo o nome das colunas

const columnNames = Object.keys(xls[0]);

//console.log(columnNames);

// Nome da tabela, a tabela precisa existir

const tableName = 'contato_teste';

// Preparando o comando SQL

function insert(tableName, json) {

  let sql = 'INSERT INTO ' + tableName + ' (';

  sqlColumnNames = columnNames.join(", ");  // retorna uma string com os elementos do array separado por vírgula

  sql += sqlColumnNames + ' ) ';

  let values = Object.values(json); // retorna um array com os valores do json

  let sqlValues = ' VALUES ( ';

  for (let index = 0; index < values.length; index++) {

    if(typeof(values[index]) == 'string')    {
      
      sqlValues += " '"+ values[index] +"' ";

    }else {
      sqlValues += ' ' + values[index] + '';
    }

    if(index < (values.length - 1)) {

      sqlValues += ', ';

    }

  }  

  sql += sqlValues + ' )';

  console.log(sql);

  return sql;

}


// create the connection to database



const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'dev',
  database: 'thiago_db',
  port: 13306
});


for (let index = 0; index < xls.length; index++) {

  let sql = insert(tableName, xls[index]);

  connection.query(sql, (err, res) => { 
    connection.end();   
  });
  
}








