const express = require("express")
const paymentController = require("../controllers/payment-controller");
const upload = require("../middlewares/upload");
const router = express.Router()

router.get('/getPaymentCustomer',paymentController.paymentCustomer)
router.post('/createPayment',upload.single("slipImage"),paymentController.createPayment)
router.patch('/paymentSuccese/:CustomerId',paymentController.updatePayment)


module.exports = router