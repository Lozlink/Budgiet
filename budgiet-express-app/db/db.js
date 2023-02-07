const pg = require('pg')
const dbName = 'budgiet'

const db = new pg.Pool({
  database: dbName,
  password: 'password'
})

module.exports = db