const express = require('express')
const router = express.Router()

const Transactions = require('../models/transaction')

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  Transactions
      .getAll(userId)
      .then((transactions) => res.json(transactions));
});

router.post('/', (req, res) => {
  const {user_id, type, amount, description, timestamp} = req.body
  Transactions
    .create(user_id, type, amount, description, timestamp)
    .then(transaction => res.json({transaction: transaction.rows[0]}))
})
