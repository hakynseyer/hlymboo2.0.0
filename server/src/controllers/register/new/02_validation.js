const {User} = require('../../../models')

var errors = {
  'name': [],
  'surnames': [],
  'alias': [],
  'email': [],
  'password': [],
  'repeatPassword': [],
  'question1': [],
  'answer1': [],
  'question2': [],
  'answer2': [],
  'sign': []
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

    if (errors.name.length || errors.surnames.length || errors.alias.length || errors.email.length || errors.password.length || errors.repeatPassword.length || errors.question1.length || errors.answer1.length || errors.question2.length || errors.answer2.length || errors.sign.length) res = true

    return res
  }

}

const valDefault = (lang) => {
  const val = require('../../tools/validator')(lang)

  return {
    name (data) {
      let err = null
      errors.name = []

      err = val.valBasicMain(data, 'text', 3, 10)
      if (err !== null) errors.name.push(err)
    },
    surnames (data) {
      let err = null
      errors.surnames = []

      err = val.valBasicMain(data, 'text', 5, 20)
      if (err !== null) errors.surnames.push(err)
    },
    alias (data) {
      let err = null
      errors.alias = []

      err = val.valBasicMain(data, 'text', 4, 15)
      if (err !== null) errors.alias.push(err)
    },
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
    },
    repeatPassword (data, compare) {
      let err = null
      errors.repeatPassword = []

      err = val.valBasicMain(data, 'password', 7, 70)
      if (err !== null) errors.repeatPassword.push(err)
      err = val.valEqual(data, compare)
      if (err !== null) errors.repeatPassword.push(err)
    },
    question1 (data, compare) {
      let err = null
      errors.question1 = []

      err = val.valBasicMain(data, 'text', 4, 100)
      if (err !== null) errors.question1.push(err)
      err = val.valUnequal(data, compare, 'simple')
      if (err !== null) errors.question1.push(err)
    },
    answer1 (data) {
      let err = null
      errors.answer1 = []

      err = val.valBasicMain(data, 'text', 5, 35)
      if (err !== null) errors.answer1.push(err)
    },
    question2 (data, compare) {
      let err = null
      errors.question2 = []

      err = val.valBasicMain(data, 'text', 4, 100)
      if (err !== null) errors.question2.push(err)
      err = val.valUnequal(data, compare, 'simple')
      if (err !== null) errors.question2.push(err)
    },
    answer2 (data) {
      let err = null
      errors.answer2 = []

      err = val.valBasicMain(data, 'text', 5, 35)
      if (err !== null) errors.answer2.push(err)
    },
    sign (data) {
      let err = null
      errors.sign = []

      err = val.valEmpty(data)
      if (err !== null) errors.sign.push(err)
      err = val.valType({value: data, response: true}, 'boolean')
      if (err !== null) errors.sign.push(err)
    }
  }
}

const valServer = (lang) => {
  const {boards} = require('../../../../../lang/server')
  const langData = boards(lang, 'Register', 'new', 'validator')

  return {
    async uniqueAlias (alias) {
      try {
        const userID = await User.findOne({
          where: {alias: alias},
          attributes: ['id']
        })
        if (userID !== null) {
          if (userID.id) errors.alias.push(langData.regNewValidator.uniqueAlias.res)
        }
      } catch (error) {
        console.error(error)
        errors.alias.push(langData.regNewValidator.uniqueAlias.resError)
      }
    },
    async uniqueEmail (email) {
      try {
        const userID = await User.findOne({
          where: {email: email},
          attributes: ['id']
        })

        if (userID !== null) {
          if (userID.id) errors.email.push(langData.regNewValidator.uniqueEmail.res)
        }
      } catch (error) {
        console.error(error)
        errors.email.push(langData.regNewValidator.uniqueEmail.resError)
      }
    }
  }
}

module.exports = {
  newUser (req, res, next) {
    const {body} = req
    const valD = valDefault(req.serverLang)

    valD.name(body.name.value)
    valD.surnames(body.surnames.value)
    valD.alias(body.alias.value)
    valD.email(body.email.value)
    valD.password(body.password.value)
    valD.repeatPassword(body.repeatPassword.value, {name: body.password.title, data: body.password.value})
    valD.question1(body.question1.value, {name: body.question2.title, data: body.question2.value})
    valD.answer1(body.answer1.value)
    valD.question2(body.question2.value, {name: body.question1.title, data: body.question1.value})
    valD.answer2(body.answer2.value)
    valD.sign(body.sign.value)

    if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
    else {
      const vServer = new Promise(async resolve => {
        await funcErrors.resetErrors()

        const valS = valServer(req.serverLang)
        await valS.uniqueAlias(body.alias.value)
        await valS.uniqueEmail(body.email.value)

        resolve()
      })
      vServer.then(() => {
        if (funcErrors.checkErrors()) res.status(422).send({'errors': errors})
        else next()
      })
    }
  }
}
