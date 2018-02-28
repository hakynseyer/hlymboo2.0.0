const {validateData} = require('../../../_fixData/validateData')

class hsServer extends validateData {
  constructor (data) {
    super()
    this.var_hsServer()

    let imgRequestServer = typeof (data.imgRequestServer) === 'object'

    if (imgRequestServer) {
      let hsS_imgRequestServer_errorRequest = this.validateText(data.imgRequestServer.errorRequest, true)
      if (hsS_imgRequestServer_errorRequest) this.hsServer.imgRequestServer.errorRequest = hsS_imgRequestServer_errorRequest
    }
  }

  var_hsServer () {
    this.hsServer = {
      imgRequestServer: {
        errorRequest: null
      }
    }
  }

  get_hsServer () {
    return this.hsServer
  }
}

module.exports = {
  hsServer
}
