const express = require('express')
const router = express.Router()
const EventsController = require('../controllers/users/events')

router.get('/', EventsController.eventView)

module.exports = router
