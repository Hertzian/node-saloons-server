const express = require('express')
const router = express.Router()
const EventsController = require('../controllers/users/events')

router.get('/', EventsController.eventView)
router.get('/events', EventsController.getEvents)
router.post('/new-event', )

module.exports = router
