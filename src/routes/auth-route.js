const express = require('express')
const authController = require('../controllers/auth-controller')
const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.post('/register', authController.register) //admin register
router.post('/register/customer', authController.registerCustomer) //Customer register

router.post('/login/admin',authController.loginAdmin)

router.post('/login/customer',authController.loginCustomer)

router.get("/me",authenticate, authController.getMe)

module.exports = router