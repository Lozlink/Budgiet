const db = require('../db/db')

const Transaction = {
  create: (user_id, type, amount, description, timestamp) => {
    const sql = `
        INSERT INTO transactions(user_id, type, amount, description, timestamp)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
    `;
    return db.query(sql, [user_id, type, amount, description, timestamp])
  },

  getAll: user_id => {
    const sql = 'SELECT * FROM transactions WHERE user_id = $1';
    return db.query(sql, [user_id])
  }
}

module.exports = Transaction