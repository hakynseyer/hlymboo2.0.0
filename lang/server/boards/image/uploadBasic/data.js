const {validateData} = require('../../../_fixData/validateData')

class hsValidator extends validateData {
  constructor (data) {
    super()
    this.var_hsValidator()

    let imgUploadBasicValidator = typeof (data.imgUploadBasicValidator) === 'object'

    if (imgUploadBasicValidator) {
      let hsV_imgUploadBasicValidator_uniqueRoute_res = this.validateText(data.imgUploadBasicValidator.uniqueRoute.res, true)
      if (hsV_imgUploadBasicValidator_uniqueRoute_res) this.hsValidator.imgUploadBasicValidator.uniqueRoute.res = hsV_imgUploadBasicValidator_uniqueRoute_res
      let hsV_imgUploadBasicValidator_uniqueRoute_resError = this.validateText(data.imgUploadBasicValidator.uniqueRoute.resError, true)
      if (hsV_imgUploadBasicValidator_uniqueRoute_resError) this.hsValidator.imgUploadBasicValidator.uniqueRoute.resError = hsV_imgUploadBasicValidator_uniqueRoute_resError
    }
  }

  var_hsValidator () {
    this.hsValidator = {
      imgUploadBasicValidator: {
        uniqueRoute: {
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

    let imgUploadBasicServer = typeof (data.imgUploadBasicServer) === 'object'

    if (imgUploadBasicServer) {
      let hsS_imgUploadBasicServer_uploadImage = this.validateText(data.imgUploadBasicServer.uploadImage, true)
      if (hsS_imgUploadBasicServer_uploadImage) this.hsServer.imgUploadBasicServer.uploadImage = hsS_imgUploadBasicServer_uploadImage
    }
  }

  var_hsServer () {
    this.hsServer = {
      imgUploadBasicServer: {
        uploadImage: null
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
