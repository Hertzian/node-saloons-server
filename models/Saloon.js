const mongoose = require('mongoose')

const SaloonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido']
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Saloon', SaloonSchema)