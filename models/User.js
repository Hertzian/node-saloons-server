const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio']
  },
  phone: {
    type: String,
    required: [true, 'El telefono es obligatorio']
  },
  picprofile: String,
  about: {
    type: String,
    default: 'Nos encantaría que nos contaras un poco acerca de ti!'
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

UserSchema.pre('save', async function(next) {
  if(!this.isModified('password')){
    next()
  }

  this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model('User', UserSchema)
