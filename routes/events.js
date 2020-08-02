const express = require('express')
const router = express.Router()
const {eventView} = require('../controllers/events')

router.get('/', eventView)

module.exports = router
