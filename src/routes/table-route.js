const express = require('express')
const authController = require('../controllers/table-controller')

const router = express.Router()

router.get("/available", authController.getTable)


module.exports = router