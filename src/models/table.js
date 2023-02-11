const { TABLE_BUSY, TABLE_AVAILABLE } = require("../config/constant")

module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define(
    "Table",
    {
      numberTable: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      status: {
        type: DataTypes.ENUM(TABLE_BUSY, TABLE_AVAILABLE),
        allowNull: false,
        dafaultValue: TABLE_AVAILABLE,
      },
    },
    { underscored: true }
  )
  Table.associate = db => {
    Table.belongsTo(db.Admin, {
      foreignKey: {
        name: "adminId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
    Table.belongsTo(db.Customer, {
      foreignKey: {
        name: "CustomerId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
  }
  return Table
}
