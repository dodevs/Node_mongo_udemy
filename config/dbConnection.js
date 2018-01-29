var mysql = require('mysql');

var connection = function() {
    return mysql.createConnection({
        host : '0.0.0.0',
        port: 32768,
        user: 'root',
        password: '77xcFSll3swO',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connection;
}