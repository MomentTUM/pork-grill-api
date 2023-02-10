module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  )
  Admin.associate = db => {
    Admin.hasMany(db.Customer, {
      foreignKey: {
        name: "adminId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    })
    Admin.hasMany(db.Table, {
      foreignKey: {
        name: "adminId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    })
  }
  return Admin
}
