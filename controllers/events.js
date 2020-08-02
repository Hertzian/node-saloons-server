const express = require('express')

exports.eventView = (req, res, next) => {
  res.render('pages/events/events')
}