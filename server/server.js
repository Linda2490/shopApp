const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const productsRouter = require('./routes/routes')
const orderRouter = require('./routes/orderRoutes')
const rundb = require('./config/db')
const app = express()

app.use(bodyParser.json())
app.use('/', productsRouter)
app.use('/', orderRouter)


rundb();



app.listen(5001, () => {
  console.log('running on port 5001')
})
