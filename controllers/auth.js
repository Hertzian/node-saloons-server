const express = require('express')

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
exports.register = (req, res, next) => {
  console.log('registered!')
  console.log(req.body)
  res.redirect('/auth/register')
}
