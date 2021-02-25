/* 
Import
*/
    // NPM moodules
    const mysql = require('mysql'); //=> https://www.npmjs.com/package/mysql
//

/* 
Define class
*/
    class MYSQLClass {
        constructor(){
            // Set MySQL connection
            this.connection = mysql.createConnection({
                host     : process.env.MYSQL_HOST,
                port     : process.env.MYSQL_PORT,
                user     : process.env.MYSQL_USER,
                password : process.env.MYSQL_PASS,
                database : process.env.MYSQL_DB
            });
        };

        connectDb(){
            return new Promise( (resovle, reject) => {
                // Try to connect MYsql
                this.connection.connect( (connectionError) => {
                    return connectionError ? reject(connectionError) : resovle(this.connection);
                });
            });
        };
    };
//

/* 
Export class
*/
    module.exports = MYSQLClass;
//