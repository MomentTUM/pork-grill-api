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
      slipImage: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  Payment.associate = db => {
    // Payment.hasMany(db.Order, {
    //   foreignKey: {
    //     name: "paymentId",
    //     allowNull: true,
    //   },
    //   onDelete: "RESTRICT",
    // })
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
