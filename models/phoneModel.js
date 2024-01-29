const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Myphones'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

const PhoneModel = {
    getAllPhones: (callback) => {
        connection.query('SELECT * FROM phones', (error, results) => {
            callback(error, results);
        });
    },

    addPhone: (phone, callback) => {
        connection.query('INSERT INTO phones SET ?', phone, (error, results) => {
            callback(error, results);
        });
    },

    deletePhone: (phoneId, callback) => {
        connection.query('DELETE FROM phones WHERE id = ?', [phoneId], (error, results) => {
            callback(error, results);
        });
    }
};

module.exports = PhoneModel;
