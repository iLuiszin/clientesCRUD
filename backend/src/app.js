const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const clientRoute = require('./routes/clientRoute')

app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/cliente', clientRoute)

module.exports = app
