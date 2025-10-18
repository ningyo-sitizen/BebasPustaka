const { getBooks } = require('./controller/useridcontroller');
const { get_visitorCount_weekly } = require('./controller/visitorcount')


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

app.get('/weekly_visitor',async (req,res) =>{
 try{
  const data = await get_visitorCount_weekly();
  res.json(data)
 }catch(err){
  console.error('lol')
  res.status(500).send("database query failed")
 }

})