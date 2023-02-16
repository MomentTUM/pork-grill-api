const express = require("express")
const cartController = require('../controllers/cart-controller')

const router = express.Router()

router.post('/addCart', cartController.addCartCustomer)
router.get('/getOrder', cartController.getListOrder)


module.exports = router
