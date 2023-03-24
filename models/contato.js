const sequelize = require('sequelize');
const database = require('../db');

/*
 ao construir a tabela o sequelize coloca um s no final do nome da tabela, 
 no banco de dados a tabela ficará com o nome de contatos

*/

const contato = database.define('contato', {

    id :{
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome : {
        type : sequelize.STRING
    },

    cep : {
        type : sequelize.INTEGER
    },

    telefone : {
        type : sequelize.INTEGER
    },

    email : {
        type : sequelize.STRING
    }

});


module.exports = contato;