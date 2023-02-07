module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      adult: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      checkin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  )
  Customer.associate = db => {
    Customer.belongsTo(db.Admin, {
      foreignKey: {
        name: "adminId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
    Customer.hasOne(db.Table, {
      foreignKey: {
        name: "CustomerId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
    Customer.hasMany(db.Order, {
      foreignKey: {
        name: "CustomerId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return Customer
}
