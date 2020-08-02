const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'El nombre es obligatorio']
  },
  phone: {
    type: String,
    required: [true, 'El telefono es obligatorio']
  },
  password: {
    type: String,
    required: [true, 'El password es obligatorio']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
