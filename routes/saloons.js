const express = require('express')
const router = express.Router()
const {saloonsView} = require('../controllers/saloons')

router.get('/', saloonsView)

module.exports = router