const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El nombre del evento es obligatorio']
  },
  start: {
    type: String,
    default: Date.now
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