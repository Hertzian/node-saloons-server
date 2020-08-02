const express = require('express')

exports.loginView = (req, res, next) => {
  res.render('pages/auth/login')
}
