const { bebaspustaka } = require('./config');

(async () => {
  try {
    const [results] = await bebaspustaka.query('SELECT NOW() AS time');
    console.log('✅ Database connected successfully:', results);
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  } finally {
    process.exit();
  }
})();
