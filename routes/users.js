const express = require('express')
const router = express.Router()
const {usersView} = require('../controllers/users')

router.get('/', usersView)

module.exports = router