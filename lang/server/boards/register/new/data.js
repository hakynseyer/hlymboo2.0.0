const {validateData} = require('../../../_fixData/validateData')

class hsValidator extends validateData {
  constructor (data) {
    super()
    this.var_hsValidator()

    let regNewValidator = typeof (data.regNewValidator) === 'object'

    if (regNewValidator) {
      let hsV_regNewValidator_uniqueAlias_res = this.validateText(data.regNewValidator.uniqueAlias.res, true)
      if (hsV_regNewValidator_uniqueAlias_res) this.hsValidator.regNewValidator.uniqueAlias.res = hsV_regNewValidator_uniqueAlias_res
      let hsV_regNewValidator_uniqueAlias_resError = this.validateText(data.regNewValidator.uniqueAlias.resError, true)
      if (hsV_regNewValidator_uniqueAlias_resError) this.hsValidator.regNewValidator.uniqueAlias.resError

      let hsV_regNewValidator_uniqueEmail_res = this.validateText(data.regNewValidator.uniqueEmail.res, true)
      if (hsV_regNewValidator_uniqueEmail_res) this.hsValidator.regNewValidator.uniqueEmail.res = hsV_regNewValidator_uniqueEmail_res
      let hsV_regNewValidator_uniqueEmail_resError = this.validateText(data.regNewValidator.uniqueEmail.resError, true)
      if (hsV_regNewValidator_uniqueEmail_resError) this.hsValidator.regNewValidator.uniqueEmail.resError = hsV_regNewValidator_uniqueEmail_resError
    }

  }

  var_hsValidator () {
    this.hsValidator = {
      regNewValidator: {
        uniqueAlias: {
          res: null,
          resError: null
        },
        uniqueEmail: {
          res: null,
          resError: null
        }
      }
    }
  }

  get_hsValidator () {
    return this.hsValidator
  }
}

class hsServer extends validateData {
  constructor (data) {
    super()
    this.var_hsServer()

    let regNewServer = typeof (data.regNewServer) === 'object'

    if (regNewServer) {
      let hsS_regNewServer_createUser = this.validateText(data.regNewServer.createUser, true)
      if (hsS_regNewServer_createUser) this.hsServer.regNewServer.createUser = hsS_regNewServer_createUser
    }
  }

  var_hsServer () {
    this.hsServer = {
      regNewServer: {
        createUser: null
      }
    }
  }

  get_hsServer () {
    return this.hsServer
  }
}

class hsEmail extends validateData {
  constructor (data) {
    super()
    this.var_hsEmail()

    let regNewEmail = typeof (data.regNewEmail) === 'object'

    if (regNewEmail) {
      let hsE_regNewEmail_confirmRegister_from = this.validateText(data.regNewEmail.confirmRegister.from, true)
      if (hsE_regNewEmail_confirmRegister_from) this.hsEmail.regNewEmail.confirmRegister.from = hsE_regNewEmail_confirmRegister_from

      let hsE_regNewEmail_confirmRegister_subject = this.validateText(data.regNewEmail.confirmRegister.subject, true)
      if (hsE_regNewEmail_confirmRegister_subject) this.hsEmail.regNewEmail.confirmRegister.subject = hsE_regNewEmail_confirmRegister_subject

      let hsE_regNewEmail_confirmRegister_text = this.validateText(data.regNewEmail.confirmRegister.text, true)
      if (hsE_regNewEmail_confirmRegister_text) this.hsEmail.regNewEmail.confirmRegister.text = hsE_regNewEmail_confirmRegister_text

      let hsE_regNewEmail_confirmRegister_html = this.validateText(data.regNewEmail.confirmRegister.html, true)
      if (hsE_regNewEmail_confirmRegister_html) this.hsEmail.regNewEmail.confirmRegister.html = hsE_regNewEmail_confirmRegister_html
    }
  }

  var_hsEmail () {
    this.hsEmail = {
      regNewEmail: {
        confirmRegister: {
          from: null,
          subject: null,
          text: null,
          html: null
        }
      }
    }
  }

  get_hsEmail () {
    return this.hsEmail
  }
}

module.exports = {
  hsValidator,
  hsServer,
  hsEmail
}
