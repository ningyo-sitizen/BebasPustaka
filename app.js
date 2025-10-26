const express = require('express');
const path = require('path');
const weekly_visitor_route = require('./routes/web');
const PORT = 8080;

const app = express();

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'books.html'));
});

app.get('/weekly_visitor_page',(req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'approval.html'))
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.use('/', weekly_visitor_route);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
