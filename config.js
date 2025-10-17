const mysql = require('mysql2/promise');

const opac = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'opac',
  waitForConnections: true,
  connectionLimit: 10,
});

const bebaspustaka = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bebaspustaka',
  waitForConnections: true,
  connectionLimit: 10,
})

module.exports = {opac,bebaspustaka};
