const express = require('express')
const authController = require('../controllers/products-controller')

const router = express.Router()

router.get("/category", authController.getCategory)
router.get("/food/:id", authController.getFoodByCatId)
router.get("/food", authController.getFood)


module.exports = router