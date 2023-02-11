module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  )
  OrderItem.associate = db => {
    OrderItem.belongsTo(db.Order, {
      foreignKey: {
        name: "orderId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
    OrderItem.belongsTo(db.Food, {
      foreignKey: {
        name: "foodId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
  }
  return OrderItem
}
