const {boards} = require('../../../../../lang/server')
const config = require('../../../config/config')
const {User} = require('../../../models')

const {time, text, email} = require('../../tools/customizedTools')

const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

module.exports = {
  async newUser (req, res) {
    let langData = boards(req.serverLang, 'Register', 'new', 'email')

    const salt = bcrypt.genSaltSync(9)
    req.body.password.value = bcrypt.hashSync(req.body.password.value, salt)

    const currentTime = time.currentTime('ms').toString()
    const bodyActivation = bcrypt.hashSync(currentTime, salt)
    const fixAlias = text.clearSpaces(req.body.alias.value)

    const emailMsg = {
      from: langData.regNewEmail.confirmRegister.from.replace('#####', config.email.account.user),
      to: req.body.email.value,
      subject: langData.regNewEmail.confirmRegister.subject,
      text: langData.regNewEmail.confirmRegister.text.replace('#####', req.body.name.value).replace('?????', config.ports.client).replace('&&&&&', currentTime).replace('@@@@@', fixAlias),
      html: langData.regNewEmail.confirmRegister.html.replace(/#####/g, req.body.name.value).replace('?????', `${config.ports.client}/register/activation/${currentTime}/${fixAlias}`).replace('&&&&&', Date())
    }

    try {
      // console.log(emailMsg)
      await email.sendEmail(emailMsg)

      const _User = await User.create({
        name: req.body.name.value,
        surnames: req.body.surnames.value,
        alias: req.body.alias.value,
        email: req.body.email.value,
        password: req.body.password.value,
        question1: req.body.question1.value,
        answer1: req.body.answer1.value,
        question2: req.body.question2.value,
        answer2: req.body.answer2.value,
        activation: bodyActivation
      })
      res.send(_User.toJSON())
    } catch (error) {
      let langData = boards(req.serverLang, 'Register', 'new', 'server')

      console.error(error)
      res.status(400).send({'errors': langData.regNewServer.createUser})
    }
  }
}
