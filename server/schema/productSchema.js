const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    desc: String,
    price: Number,
    type: [String],
    image: String,
  })

module.exports = productSchema