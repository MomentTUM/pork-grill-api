const {
  PAYMENT_CASH,
  PAYMENT_TRANSFER,
  PAYMENT_PENDING,
  PAYMENT_COMPLETED,
  PAYMENT_FAIL,
} = require("../config/constant")
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
    {
      paymentType: {
        type: DataTypes.ENUM(PAYMENT_CASH, PAYMENT_TRANSFER),
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      status: {
        type: DataTypes.ENUM(
          PAYMENT_PENDING,
          PAYMENT_COMPLETED,
          PAYMENT_FAIL
        ),
        allowNull: false,
        dafaultValue: PAYMENT_PENDING,
      },
    },
    {
      underscored: true,
    }
  )
  Payment.associate = db => {
    Payment.belongsTo(db.Order, {
      foreignKey: {
        name: "orderId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return Payment
}
