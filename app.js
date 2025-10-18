const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

const { getBooks } = require('./controller/useridcontroller');
const { get_visitorCount_weekly } = require('./controller/visitorcount')

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'books.html'));
});

app.get('/weekly_visitor_page',(req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'weekly.html'))
})


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
