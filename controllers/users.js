const express = require('express')

exports.usersView = (req, res, next) => {
  res.render('pages/users/users')
}