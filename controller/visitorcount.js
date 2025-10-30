const { bebaspustaka } = require('../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.getYearlyVisitors = async (req, res) => {
  try {
    const sql = `
      SELECT * from summary_yearly_visitor
    `;

    const [rows] = await bebaspustaka.query(sql);

    res.status(200).json(rows);

  } catch (err) {
    console.error('❌ Error fetching yearly visitors:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
