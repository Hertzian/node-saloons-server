const express = require('express')
const router = express.Router()
const SaloonsController = require('../controllers/users/saloons')

router.get('/', SaloonsController.saloonsView)

module.exports = router