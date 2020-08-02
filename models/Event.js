const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del evento es obligatorio']
  },
  date: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  salon: {
    type: mongoose.Schema.ObjectId,
    ref: 'Salon'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Event', EventSchema)