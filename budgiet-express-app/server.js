const express = require('express')
const app = express()
const PORT = 3001

const sessions = require('./middlewares/sessions')

const transactionsController = require('./controllers/transactions_controllers')
const usersController = require('./controllers/users_controllers')
const sessionsController = require('./controllers/sessions_controller')

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

app.use(express.json())

app.use(sessions)

app.use('/api/users', usersController)
app.use('/api/transactions', transactionsController)
app.use('/api/sessions', sessionsController)