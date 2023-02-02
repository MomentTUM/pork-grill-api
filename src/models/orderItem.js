module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
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
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
    OrderItem.belongsTo(db.Food, {
      foreignKey: {
        name: "foodId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return OrderItem
}
