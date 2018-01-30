module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    chest: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: 'default'
    },
    route: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    copyright: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    freezeTableName: true
  })

  Image.associate = (model) => {
    Image.belongsTo(model.User, {
      as: 'User',
      foreignKey: {name: 'user', allowNull: false},
      onDelete: 'CASCADE'
    })
  }

  return Image
}
