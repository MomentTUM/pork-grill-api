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
      detail: DataTypes.STRING,
      currentPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  Food.associate = db => {
    Food.hasMany(db.OrderItem, {
      foreignKey: {
        name: "foodId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
    Food.belongsTo(db.Category, {
      foreignKey: {
        name: "categoryId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
  }
  return Food
}
