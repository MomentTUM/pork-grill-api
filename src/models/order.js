module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {}, { underscored: true })
  Order.associate = db => {
    Order.belongsTo(db.Customer, {
      foreignKey: {
        name: "CustomerId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
    Order.hasMany(db.OrderItem, {
      foreignKey: {
        name: "orderId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
  }
  return Order
}
