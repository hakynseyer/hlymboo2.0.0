const {validateData} = require('../../../_fixData/validateData')

class hsValidator extends validateData {
  constructor (data) {
    super()
    this.var_hsValidator()

    let logLoginValidator = typeof (data.logLoginValidator) === 'object'

    if (logLoginValidator) {
      let hsV_logLoginValidator_thereisEmail_res = this.validateText(data.logLoginValidator.thereisEmail.res, true)
      if (hsV_logLoginValidator_thereisEmail_res) this.hsValidator.logLoginValidator.thereisEmail.res = hsV_logLoginValidator_thereisEmail_res

      let hsV_logLoginValidator_thereisEmail_resError = this.validateText(data.logLoginValidator.thereisEmail.resError, true)
      if (hsV_logLoginValidator_thereisEmail_resError) this.hsValidator.logLoginValidator.thereisEmail.resError = hsV_logLoginValidator_thereisEmail_resError

      let hsV_logLoginValidator_isActivated = this.validateText(data.logLoginValidator.isActivated, true)
      if (hsV_logLoginValidator_isActivated) this.hsValidator.logLoginValidator.isActivated = hsV_logLoginValidator_isActivated
    }
  }

  var_hsValidator () {
    this.hsValidator = {
      logLoginValidator: {
        thereisEmail: {
          res: null,
          resError: null
        },
        isActivated: null
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

    let logLoginServer = typeof (data.logLoginServer) === 'object'

    if (logLoginServer) {
      let hsS_logLoginServer_noPassword = this.validateText(data.logLoginServer.noPassword, true)
      if (hsS_logLoginServer_noPassword) this.hsServer.logLoginServer.noPassword = hsS_logLoginServer_noPassword

      let hsS_loLoginServer_defaultErrorUser = this.validateText(data.logLoginServer.defaultErrorUser, true)
      if (hsS_loLoginServer_defaultErrorUser) this.hsServer.logLoginServer.defaultErrorUser = hsS_loLoginServer_defaultErrorUser
    }
  }

  var_hsServer () {
    this.hsServer = {
      logLoginServer: {
        noPassword: null,
        defaultErrorUser: null
      }
    }
  }

  get_hsServer () {
    return this.hsServer
  }
}

module.exports = {
  hsValidator,
  hsServer
}
