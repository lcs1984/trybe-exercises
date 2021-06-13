const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'trybe-exercises',
    password: 'target16',
    database: 'model_example'
});

module.exports = connection;