const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth')

router.get('/login', AuthController.loginView)
router.post('/login', AuthController.login)
router.get('/register', AuthController.registerView)
router.post('/register', AuthController.register)

module.exports = router