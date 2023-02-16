const bcrypt = require("bcryptjs")
const { TABLE_BUSY, TABLE_AVAILABLE } = require("../config/constant")
const { Admin,Customer,Table } = require("../models")
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
    const newCustomer = await Customer.create(value)
    await Table.update({ CustomerId: newCustomer.id,status: TABLE_BUSY }, {where: {id: +value.tableId}})
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

exports.loginCustomer = async (req, res, next) => {
  try {
    const value = req.body
    const customer = await Customer.findOne({
      where:  
          { phone: value.phone },     
    })
    if (!customer) {
      createError('invalid phone number',400)
    }
    const accessToken = jwt.sign(
      {
        id: customer.id,
        adult: customer.adult,
        kid: customer.kid,
        phone: customer.phone,
        checkin: customer.checkin
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

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user })
}

