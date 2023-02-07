const bcrypt = require("bcryptjs")
const { Admin,Customer } = require("../models")
const createError = require("../utils/create-error")
const Op = require('sequelize')
const jwt = require("jsonwebtoken")

//register Admin
exports.register = async (req, res, next) => {
  try {
    const value = req.body
    value.password = await bcrypt.hash(value.password, 12)
    await Admin.create(value)
    res.status(201).json({ message: "register  Admin success." })
  } catch (err) {
    next(err)
  }
}

//register Customer
exports.registerCustomer = async (req, res, next) => {
  try {
    const value = req.body
    value.phone = await bcrypt.hash(String(value.phone), 12)
    await Customer.create(value)
    res.status(201).json({ message: "register  Customer success." })
  } catch (err) {
    next(err)
  }
}

exports.loginAdmin = async (req, res, next) => {
  try {
    const value = req.body
    const admin = await Admin.findOne({
      where: 
        
          { username: value.username },
          
       
    })
    if (!admin) {
      createError('invalid username or password',400)
    }
    const isCorrect = await bcrypt.compare(
      value.password,
      admin.password
    )
    if (!isCorrect) {
      createError("invalid username or password", 400)
    }
    const accessToken = jwt.sign(
      {
        id: admin.id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        username: admin.username,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    )
    res.status(200).json({ accessToken })
  } catch (err) {
    next(err)
  }
}

exports.loginUser = async (req, res, next) => {
  try {
    const value = req.body
    const customer = await Customer.findOne({
      where: {
        [Op.or]: [
          { phone: value.phone },
        ],
      },
    })
    if (!customer) {
      createError('invalid username or password',400)
    }
  } catch (err) {
    next(err)
  }
}

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user })
}