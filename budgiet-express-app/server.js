const express = require('express')
const app = express()
const PORT = 3001

const transactionsController = require('./controllers/transactions_controllers')
const usersController = require('./controllers/users_controllers')


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

app.use(express.json())

app.use('/api/users', usersController)
app.use('/api/transactions', transactionsController)
