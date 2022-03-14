const mongoose = require('mongoose')
const connectingLink = 'mongodb://localhost/shopApp'
function rundb() {
  mongoose
    .connect(connectingLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log('connecting successfully'))
    .catch((err) => console.log(err))
}

module.exports = rundb
