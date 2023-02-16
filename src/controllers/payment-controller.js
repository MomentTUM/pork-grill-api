const { Payment } = require("../models")

exports.addPayment = async (req, res, next) => {
    try {
        const result = await Order.create(
            
        )
        
        res.status(201).json({ message: "addCart success." })
      } catch (err) {
        next(err)
      }
  }