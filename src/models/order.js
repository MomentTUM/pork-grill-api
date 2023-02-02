module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {}, { underscored: true })
  Order.associate = db => {
    Order.belongsTo(db.Customer, {
      foreignKey: {
        name: "CustomerId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
    Order.hasMany(db.OrderItem, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
    Order.hasOne(db.Payment, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return Order
}
