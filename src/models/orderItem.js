module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      name: DataTypes.STRING,
      amount: {
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
      // orderStatus: {
      //   type: DataTypes.ENUM(
      //     "PENDING", "SUCCESS"),
      //   allowNull: true,
      //   dafaultValue: "PENDING",
      // },
    },
    { underscored: true }
  )
  OrderItem.associate = db => {
    OrderItem.belongsTo(db.Order, {
      foreignKey: {
        name: "orderId",
        allowNull: true,
      },
      onDelete: "CASCADE",
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
