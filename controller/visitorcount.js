const db = require('../config');
const {bebaspustaka} = require('../config')


async function get_visitorCount_weekly() {
    const [rows] = await bebaspustaka.query("select * from bebaspustaka.summary_weekly_visitor")
    return rows;
}

async function get_visitor_year(params) {
    const [rows] = await bebaspustaka.query("")
    return rows;
}

module.exports = {get_visitorCount_weekly};