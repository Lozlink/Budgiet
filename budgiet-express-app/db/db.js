const pg = require('pg')
const dbName = 'budgiet'

const db = new pg.Pool({
  database: dbName
})

module.exports = db