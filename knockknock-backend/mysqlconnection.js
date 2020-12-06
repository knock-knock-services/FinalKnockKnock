var mysql = require("mysql");

//Database Connection

var mysqlConnectionObject =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aravind",
    database: "knockknock",
    multipleStatements: "true"
});

mysqlConnectionObject.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("connected to MySQL database knockknock.");
    }
});

module.exports = mysqlConnectionObject;