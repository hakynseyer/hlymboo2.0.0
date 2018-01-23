const {boards} = require('../../../../../lang/server')
const config = require('../../../config/config')
const {User} = require('../../../models')

const {text, email} = require('../../tools/customizedTools')

const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

module.exports = {
  async activationUser (req, res) {
    const {code, alias} = req.body

    try {
      const _User = await User.findOne({
        where: {alias: alias.value},
        attributes: ['id', 'email', 'activation']
      })

      if (_User.activation === null) return res.send({hyzher: alias.value, mode: 'hyzher'})

      const valCodes = await bcrypt.compare(code.value, _User.activation)

      if (!valCodes) return res.status(403).send({errors: true})
      else {
        let langData = boards(req.serverLang, 'register', 'activation', 'email')

        const masterKey = text.masterKey(9)

        const emailMsg = {
          from: langData.regActivationEmail.sendMasterKey.from.replace('#####', config.email.account.user),
          to: _User.email,
          subject: langData.regActivationEmail.sendMasterKey.subject,
          text: langData.regActivationEmail.sendMasterKey.text.replace('#####', alias.value).replace('?????', masterKey),
          html: langData.regActivationEmail.sendMasterKey.html.replace('#####', alias.value).replace('?????', masterKey).replace('&&&&&', Date())
        }

        await email.sendEmail(emailMsg)

        const salt = bcrypt.genSaltSync(9)
        const soulCrypt = bcrypt.hashSync(masterKey, salt)

        await User.update({
          state: 1,
          activation: null,
          soul: soulCrypt
        }, {
          where: {
            id: _User.id,
            email: _User.email
          }
        })

        res.send({hyzher: alias.value, mode: 'success'})
      }
    } catch (error) {
      let langData = boards(req.serverLang, 'register', 'activation', 'server')

      console.error(error)
      res.status(400).send({'errors': langData.regActivationServer.defaultErrorUser})
    }
  }
}
