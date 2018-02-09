const {validateData} = require('../../../_fixData/validateData')

class hsValidator extends validateData {
  constructor (data) {
    super()
    this.var_hsValidator()

    let regActivationValidator = typeof (data.regActivationValidator) === 'object'

    if (regActivationValidator) {
      let hsV_regActivationValidator_thereisAlias_res = this.validateText(data.regActivationValidator.thereisAlias.res, true)
      if (hsV_regActivationValidator_thereisAlias_res) this.hsValidator.regActivationValidator.thereisAlias.res = hsV_regActivationValidator_thereisAlias_res

      let hsV_regActivationValidator_thereisAlias_resError = this.validateText(data.regActivationValidator.thereisAlias.resError, true)
      if (hsV_regActivationValidator_thereisAlias_resError) this.hsValidator.regActivationValidator.thereisAlias.resError = hsV_regActivationValidator_thereisAlias_resError
    }
  }

  var_hsValidator () {
    this.hsValidator = {
      regActivationValidator: {
        thereisAlias: {
          res: null,
          resError: null
        }
      }
    }
  }

  get_hsValitador () {
    return this.hsValidator
  }
}

class hsServer extends validateData {
  constructor (data) {
    super()
    this.var_hsServer()

    let regActivationServer = typeof (data.regActivationServer) === 'object'

    if (regActivationServer) {
      let regActivationServer_defaultErrorUser = this.validateText(data.regActivationServer.defaultErrorUser, true)
      if (regActivationServer_defaultErrorUser) this.hsServer.regActivationServer.defaultErrorUser = regActivationServer_defaultErrorUser
    }
  }

  var_hsServer () {
    this.hsServer = {
      regActivationServer: {
        defaultErrorUser: null
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

    let regActivationEmail = typeof (data.regActivationEmail) === 'object'

    if (regActivationEmail) {
      let hsE_regActivationEmail_sendMasterKey_from = this.validateText(data.regActivationEmail.sendMasterKey.from, true)
      if (hsE_regActivationEmail_sendMasterKey_from) this.hsEmail.regActivationEmail.sendMasterKey.from = hsE_regActivationEmail_sendMasterKey_from

      let hsE_regActivationEmail_sendMasterKey_subject = this.validateText(data.regActivationEmail.sendMasterKey.subject, true)
      if (hsE_regActivationEmail_sendMasterKey_subject) this.hsEmail.regActivationEmail.sendMasterKey.subject = hsE_regActivationEmail_sendMasterKey_subject

      let hsE_regActivationEmail_sendMasterKey_text = this.validateText(data.regActivationEmail.sendMasterKey.text, true)
      if (hsE_regActivationEmail_sendMasterKey_text) this.hsEmail.regActivationEmail.sendMasterKey.text = hsE_regActivationEmail_sendMasterKey_text

      let hsE_regActivationEmail_sendMasterKey_html = this.validateText(data.regActivationEmail.sendMasterKey.html, true)
      if (hsE_regActivationEmail_sendMasterKey_html) this.hsEmail.regActivationEmail.sendMasterKey.html = hsE_regActivationEmail_sendMasterKey_html
    }
  }

  var_hsEmail () {
    this.hsEmail = {
      regActivationEmail: {
        sendMasterKey: {
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
