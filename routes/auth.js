const express = require('express')
const router = express.Router()
const {loginView} = require('../controllers/auth')

router.get('/login', loginView)

module.exports = router