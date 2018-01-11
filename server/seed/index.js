const {sequelize, UserRank} = require('../src/models')

const Promise = require('bluebird')
const userRankJSON = require('./json/userRank.json')

// const bcrypt = Promise.promisifyAll(require('bcryptjs'))
// const salt = bcrypt.genSaltSync(9)
// const pass = bcrypt.hashSync('123123123a', salt)
// console.log(pass)

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      userRankJSON.map(uRank => {
        UserRank.create(uRank)
      })
    )
  })
