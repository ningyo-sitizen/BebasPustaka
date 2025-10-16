// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

const { getBooks } = require('./index');

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'books.html'));
});

app.get('/books', async (req, res) => {
  try {
    const data = await getBooks();

    console.log(JSON.stringify(data, null, 2));

    res.json(data);
  } catch (err) {
    console.error('❌ Database error:', err);
    res.status(500).send('Database query failed');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
