const {boards} = require('../../../../../lang/server')
const {User, UserRank} = require('../../../models')
const config = require('../../../config/config')

const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

function jwtSession (Hyzher) {
  const aWeek = 60 * 60 * 24 * 7

  return jwt.sign(Hyzher, config.authentication.jwtSecret, {
    expiresIn: aWeek
  })
}

module.exports = {
  async loginUser (req, res) {
    let langData = boards(req.serverLang, 'Login', 'login', 'server')
    const {body} = req

    try {
      const hyzher = await User.findOne({
        where: {email: body.email.value},
        include: [
          {model: UserRank, as: 'userRank', attributes: ['rank'], require: true}
        ],
        attributes: ['id', 'alias', 'password']
      })

      const validatePasswords = await bcrypt.compare(body.password.value, hyzher.password)

      if (!validatePasswords) return res.status(400).send({'errors': langData.logLoginServer.noPassword})

      const sendHyzher = hyzher.toJSON()
      delete sendHyzher['password']
      delete sendHyzher['id']

      const sendHyzherToken = hyzher.toJSON()
      delete sendHyzherToken['password']

      res.send({
        hyzher: sendHyzher,
        token: jwtSession(sendHyzherToken)
      })
    } catch (error) {
      console.error(error)
      res.status(400).send({'errors': langData.logLoginServer.defaultErrorUser})
    }
  }
}
