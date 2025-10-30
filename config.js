
const mysql = require('mysql2/promise');
require('dotenv').config();

const opac = mysql.createPool({
  host: process.env.DB_HOST_OPAC,
  user: process.env.DB_USER_OPAC,
  password: process.env.DB_PASS_OPAC,
  database: process.env.DB_DATABASE_OPAC,
  waitForConnections: true,
  connectionLimit: 10,
});

const bebaspustaka = mysql.createPool({
  host: process.env.DB_HOST_BEBAS,
  user: process.env.DB_USER_BEBAS,
  password: process.env.DB_PASS_BEBAS,
  database: process.env.DB_DATABASE_BEBAS,
  waitForConnections: true,
  connectionLimit: 10,
})

module.exports = {opac,bebaspustaka};
