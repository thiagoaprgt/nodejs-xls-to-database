// get the client
const mysql = require('mysql2');
const readXLS = require('./../read_xls');

const file = './../teste.xls';

const xls = readXLS(file);

// Obtendo o nome das colunas

const columnNames = Object.keys(xls[0]);

//console.log(columnNames);

// Nome da tabela, a tabela precisa existirs

const tableName = 'contatos';

// Preparando o comando SQL

function insert(tableName, json) {

  let sql = 'insert into ' + tableName + ' (';

  sqlColumnNames = columnNames.join(", ");

  sql += sqlColumnNames + ' ) ';

  let values = Object.values(json); // retorna um array com os valores do jsons

  let sqlValues = ' values ( ';

  for (let index = 0; index < values.length; index++) {

    if(typeof(values[index]) == 'string')    {
      
      sqlValues += ' `'+ values[index] + '`';

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

insert(tableName, xls[0]);




// create the connection to database

/*

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'dev',
  database: 'proponto',
  port: 13306
});


connection.query('SELECT id, document, email FROM account LIMIT 5', (err, res) => { 

  for (let index = 0; index < xls.length; index++) {

    // insere os resultados
    
  }

  connection.end(); 

});

*/

