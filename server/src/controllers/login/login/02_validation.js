const {User} = require('../../../models')

var errors = {
  'email': [],
  'password': []
}

const funcErrors = {
  resetErrors () {
    let keys = Object.keys(errors)

    keys.forEach(key => {
      errors[key] = []
    })
  },

  checkErrors () {
    let res = false

    if (errors.email.length || errors.password.length) res = true

    return res
  }
}

const valDefault = (lang) => {
  const val = require('../../tools/validator')(lang)

  return {
    email (data) {
      let err = null
      errors.email = []

      err = val.valBasicMain(data, 'email', 5, 50)
      if (err !== null) errors.email.push(err)
    },
    password (data) {
      let err = null
      errors.password = []

      err = val.valBasicMain(data, 'password', 7, 70)
      if (err !== null) errors.password.push(err)
    }
  }
}

const valServer = (lang) => {
  const {boards} = require('../../../../../lang/server')
  const langData = boards(lang, 'Login', 'login', 'validator')

  return {
    async analyzeEmail (email) {
      try {
        const userID = await User.findOne({
          where: {email: email},
          attributes: ['id', 'state']
        })
        if (userID === null) {
          const fixThereisEmail = langData.logLoginValidator.thereisEmail.res.replace('#####', email)
          errors.email.push(fixThereisEmail)
        } else {
          if (userID.state !== 1) errors.email.push(langData.logLoginValidator.isActivated)
        }
      } catch (error) {
        console.error(error)
        const fixThereisEmail = langData.logLoginValidator.thereisEmail.resError.replace('#####', email)
        errors.email.push(fixThereisEmail)
      }
    }
  }
}

module.exports = {
  loginUser (req, res, next) {
    const {body} = req
    const valD = valDefault(req.serverLang)

    valD.email(body.email.value)
    valD.password(body.password.value)

    if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
    else {
      const vServer = new Promise(async resolve => {
        await funcErrors.resetErrors()

        const valS = valServer(req.serverLang)
        await valS.analyzeEmail(body.email.value)

        resolve()
      })
      vServer.then(() => {
        if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
        else next()
      })
    }
  }
}
