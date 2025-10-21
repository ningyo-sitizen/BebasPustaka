const db = require('../config');
const {opac} = require('../config')

async function getBooks() {
  const [rows] = await opac.query('SELECT * FROM user');
  return rows;
}

module.exports = { getBooks };
