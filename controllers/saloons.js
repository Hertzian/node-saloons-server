const express = require('express')

exports.saloonsView = (req, res, next) => {
  res.render('pages/saloons/saloons')
}