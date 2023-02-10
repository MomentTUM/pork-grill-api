module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      image: DataTypes.STRING,
    },
    { underscored: true }
  )
  Category.associate = db => {
    Category.hasMany(db.Food, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return Category
}
