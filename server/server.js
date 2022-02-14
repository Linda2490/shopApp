const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/routes')
const app = express()

app.use(bodyParser.json())
app.use('/', router)
const connectingLink = 'mongodb://localhost/shopApp'
mongoose
  .connect(connectingLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('connecting successfully'))
  .catch(err => console.log(err))




app.listen(5001, () => {
  console.log('running on port 5001')
})
