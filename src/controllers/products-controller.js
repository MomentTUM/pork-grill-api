const { Category,Food } = require("../models")

exports.getCategory = async (req, res, next) => {
  const category = await Category.findAll()
  res.status(200).json(category)
}

exports.getFood = async (req, res, next) => {
  const food = await Food.findAll()
  res.status(200).json(food)
}

exports.getFoodByCatId = async (req, res, next) => {
  const food = await Food.findAll(
    {where: {categoryId: req.params.id}}
  )
  res.status(200).json(food)
}
