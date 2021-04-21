const { ConnectionError } = require("../utils/error")


/**
 * This function used to connect to mysql
 * @param {integer} slotId
 * @returns {string} - success message
 * @throws {ConnectionError}
 */
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bibit'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw new ConnectionError(error.message);
  console.log("Successfully connect to mysql");
});

module.exports = connection

