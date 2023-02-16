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
        allowNull: true,
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
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
        allowNull: true,
        dafaultValue: PAYMENT_PENDING,
      },
    },
    {
      underscored: true,
    }
  )
  Payment.associate = db => {
    Payment.belongsTo(db.Customer, {
      foreignKey: {
        name: "CustomerId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
  }
  return Payment
}
