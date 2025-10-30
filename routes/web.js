const express = require('express');
const router = express.Router();
const { getYearlyVisitors } = require('../controller/visitorController');
const verifyToken = require('../middleware/verifyToken'); //
const { get_visitorCount_weekly } = require('../controller/visitorcount')


router.get('/books', async (req, res) => {
  try {
    const data = await getBooks();

    res.json(data);
  } catch (err) {
    console.error('❌ Database error:', err);
    res.status(500).send('Database query failed');
  }
});

router.get('/weekly_visitor',async (req,res) =>{
 try{
  const data = await get_visitorCount_weekly();
  res.json(data)
 }catch(err){
  console.error('lol')
  res.status(500).send("database query failed")
 }

})

router.get('/yearly_visitor', verifyToken, getYearlyVisitors);

module.exports = router;