const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user:  'root',
        password: '',
        database: 'cursos',
    }
);

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Base de datos conectada.');
});

module.exports = db;