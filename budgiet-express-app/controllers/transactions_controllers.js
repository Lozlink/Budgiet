const express = require('express')
const router = express.Router()

const Transactions = require('../models/transaction')

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`userId: ${userId}`)
  Transactions
      .getAll(userId)
      .then((transactions) => res.json(transactions));
});

router.post('/', (req, res) => {
  const {user_id, type, amount, description, timestamp, category} = req.body

  // UserID is currently undefined
  // console.log(user_id)
  // console.log('meow')
  Transactions
    .create(user_id, type, amount, description, timestamp, category)
    .then(transaction => res.json({transaction: transaction.rows[0]}))
})

module.exports = router