module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    surnames: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    question1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    question2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER,
      defaultValue: '-1',
      allowNull: false
    },
    activation: {
      type: DataTypes.STRING
    },
    recover: {
      type: DataTypes.STRING
    },
    soul: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true
  })

  User.associate = function (model) {
    User.belongsTo(model.UserRank, {
      as: 'userRank',
      foreignKey: {name: 'UserRank', allowNull: false, defaultValue: '1'},
      onDelete: 'RESTRICT'
    })
  }

  return User
}
