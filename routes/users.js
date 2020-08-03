const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users/users')

router.get('/profile', UsersController.profileView)

module.exports = router