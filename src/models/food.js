module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    "Food",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      currentPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  Food.associate = db => {
    Food.hasMany(db.OrderItem, {
      foreignKey: {
        name: "foodId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
    Food.belongsTo(db.Category, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return Food
}
