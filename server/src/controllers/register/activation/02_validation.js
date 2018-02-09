const {User} = require('../../../models')

var errors = {
  'alias': []
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

    if (errors.alias.length) res = true

    return res
  }

}

const valDefault = (lang) => {
  const val = require('../../tools/validator')(lang)

  return {
    alias (data) {
      let err = null
      errors.alias = []

      err = val.valBasicMain(data, 'text', 4, 15)
      if (err !== null) errors.alias.push(err)
    }
  }
}

const valServer = (lang) => {
  const {boards} = require('../../../../../lang/server')
  const langData = boards(lang, 'Register', 'activation', 'validator')

  return {
    async thereisAlias (alias) {
      try {
        const userID = await User.findOne({
          where: {alias: alias},
          attributes: ['id']
        })
        if (userID === null) {
          const fixThereisAlias = langData.regActivationValidator.thereisAlias.res.replace('#####', alias)
          if (!userID.id) errors.alias.push(fixThereisAlias)
        }
      } catch (error) {
        console.error(error)
        const fixThereisAlias = langData.regActivationValidator.thereisAlias.resError.replace('#####', alias)
        errors.alias.push(fixThereisAlias)
      }
    }
  }
}

module.exports = {
  activationUser (req, res, next) {
    const {body} = req
    const valD = valDefault(req.serverLang)

    valD.alias(body.alias.value)

    if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
    else {
      const vServer = new Promise(async resolve => {
        await funcErrors.resetErrors()

        const valS = valServer(req.serverLang)
        await valS.thereisAlias(body.alias.value)

        resolve()
      })
      vServer.then(() => {
        if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
        else next()
      })
    }
  }
}
