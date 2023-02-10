const { Table } = require("../models")

exports.getTable = async (req, res, next) => {
  const table = await Table.findAll({
    where: {
      status: 'AVAILABLE',
    },
  })
  res.status(200).json(table)
}
