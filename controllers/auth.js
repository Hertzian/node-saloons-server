const bcrypt = require('bcrypt')
const User = require('../models/User')

// @desc    render login page
// @route   GET /auth/login
// @access  Public
exports.loginView = (req, res, next) => {
  const hello = 'hola wey! :D'
  res.render('pages/auth/login', {layout: 'clear', hello})
}

// @desc    process login
// @route   POST /auth/login
// @access  Public
exports.login = (req, res, next) => {
  console.log('logged in')
  console.log(req.body)
  res.redirect('/auth/login')
}

// @desc    render register page
// @route   GET /auth/register
// @access  Public
exports.registerView = (req, res, next) => {
  res.render('pages/auth/register', {layout: 'clear'})
}

// @desc    process register
// @route   POST /auth/register
// @access  Public
exports.register = async (req, res, next) => {
  const {name, email, phone, password, password2} = req.body
  let errors = []

  if(!name || !email || !phone || !password || !password2){
    errors.push({msg: 'Completa todos los campos'})
  }

  if(password.length < 6){
    errors.push({msg: 'Debe ser mayor a 6 caracteres'})
  }

  if(password !== password2){
    errors.push({msg: 'Las contraseñas son diferentes'})
  }

  if(errors.length >= 1){
    return res.render('pages/auth/register', {layout: 'clear', errors, name, email, phone, password, password2 })
  }

  try {
    if(await User.findOne({email: email})){
      errors.push({msg: 'Ya hay un registro con ese email'})
      console.log(errors)
      return res.render('pages/auth/register', {layout: 'clear', errors, name, email, phone, password, password2})
    }else{
      await User.create({
        name: name,
        email: email,
        phone: phone,
        password: await bcrypt.hash(password, 10)
      })

      req.flash('success', 'Ya puedes autenticarte')
      res.redirect('/auth/login')
    }
  } catch (err) {
    console.log(err)
    req.flash('error', 'Algo salio mal')
    res.redirect('/auth/register')
  }
}
