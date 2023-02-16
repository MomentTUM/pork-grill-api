const createError = require("../utils/create-error")
const Jwt = require("jsonwebtoken")
const { Admin,Customer } = require("../models")

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization || !authorization.startsWith("Bearer ")) {
      createError("you are unathorized", 401)
    }
    const token = authorization.split(" ")[1]
    const payload = Jwt.verify(token, process.env.JWT_SECRET_KEY)
    const admin = await Admin.findOne({
      where: { id: payload.id },
      attributes: { exclude: ["password"] },
    })

    const customer = await Customer.findOne({
      where: { id: payload.id },
      attributes: { exclude: ["phone"] },
    })
    if (!customer && !admin) {
      createError("you are unathorized", 401)
    }
    req.user = admin || customer
    next()
  } catch (err) {
    next(err)
  }
}
