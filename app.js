require('dotenv').config;
const express = require('express');
const path = require('path');
const weekly_visitor_route = require('./routes/web');
const PORT = process.env.PORT;


const app = express();


app.get('/weekly_visitor_page',(req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'approval.html'))
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.use('/', weekly_visitor_route);

console.log(process.env.DB_DATABASE_OPAC)
console.log(PORT)
console.log(process.env)

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
