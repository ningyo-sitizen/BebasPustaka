const db = require('../config');
const {bebaspustaka} = require('../config')
const db_bebas = bebaspustaka

async function get_visitorCount_weekly() {
    const [rows] = await bebaspustaka.query("select * from bebaspustaka.summary_weekly_visitor")
    return rows;

}

module.exports = {get_visitorCount_weekly};