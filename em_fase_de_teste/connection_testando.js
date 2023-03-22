const sequelize = require('sequelize');

const connection = {
    databaseName : "thiago_db",
    user : "root",
    password : "dev",  
    databaseType: "mysql",
    host : "127.0.0.1", 
    port : 13306
    
}


const database = new sequelize(
    connection.databaseName,
    connection.user,
    connection.password,
    {
        dialect: connection.databaseType,
        host: connection.host,
        port : connection.port
    }
)


module.exports = connection;