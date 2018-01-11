module.exports = (sequelize, DataTypes) => {
  const userRank = sequelize.define('UserRank', {
    rank: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    freezeTableName: true
  })

  return userRank
}
