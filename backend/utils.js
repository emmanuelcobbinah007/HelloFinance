const mysql = require('mysql');

const connectToDB = () => {
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'helloFinance'
    });

    return con;

}

module.exports = {connectToDB};