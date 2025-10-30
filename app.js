require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const verifyToken = require('./middleware/checktoken');
const { getYearlyVisitors } = require('./controller/visitorcount');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/regis',(req,res) => {
  res.sendFile(path.join(__dirname,'public','register.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/yearly_visitor', verifyToken, getYearlyVisitors);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
