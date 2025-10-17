const db = require('../config');


async function getBooks() {
  const [rows] = await db.query('SELECT * FROM user');
  return rows;
}

module.exports = { getBooks };
