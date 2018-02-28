const {validateData} = require('../../_fixData/validateData')

class hsValidator extends validateData {
  constructor (data) {
    super()
    this.var_hsValidator()

    let valEmpty = typeof (data.valEmpty) === 'object'
    let valMin = typeof (data.valMin) === 'object'
    let valMax = typeof (data.valMax) === 'object'
    let valEqual = typeof (data.valEqual) === 'object'
    let valUnequal = typeof (data.valUnequal) === 'object'
    let valType = typeof (data.valType) === 'object'
    let valNumbers = typeof (data.valNumbers) === 'object'
    let valExtensions = typeof (data.valExtensions) === 'object'

    if (valEmpty && valMin && valMax && valEqual && valUnequal && valType && valNumbers && valExtensions) {
      let hsV_valEmpty_res = this.validateText(data.valEmpty.res, true)
      if (hsV_valEmpty_res) this.hsValidator.valEmpty.res = hsV_valEmpty_res

      let hsV_valMin_res = this.validateText(data.valMin.res, true)
      if (hsV_valMin_res) this.hsValidator.valMin.res = hsV_valMin_res

      let hsV_valMax_res = this.validateText(data.valMax.res, true)
      if (hsV_valMax_res) this.hsValidator.valMax.res = hsV_valMax_res

      let hsV_valEqual_res = this.validateText(data.valEqual.res, true)
      if (hsV_valEqual_res) this.hsValidator.valEqual.res = hsV_valEqual_res

      let hsV_valUnequal_res = this.validateText(data.valUnequal.res, true)
      if (hsV_valUnequal_res) this.hsValidator.valUnequal.res = hsV_valUnequal_res
      let hsV_valUnequal_resArray = this.validateText(data.valUnequal.resArray, true)
      if (hsV_valUnequal_resArray) this.hsValidator.valUnequal.resArray = hsV_valUnequal_resArray

      let hsV_valType_text_res = this.validateText(data.valType.text.res, true)
      if (hsV_valType_text_res) this.hsValidator.valType.text.res = hsV_valType_text_res
      let hsV_valType_number_res = this.validateText(data.valType.number.res, true)
      if (hsV_valType_number_res) this.hsValidator.valType.number.res = hsV_valType_number_res
      let hsV_valType_email_res = this.validateText(data.valType.email.res, true)
      if (hsV_valType_email_res) this.hsValidator.valType.email.res = hsV_valType_email_res
      let hsV_valType_password_resSpecial = this.validateText(data.valType.password.resSpecial, true)
      if (hsV_valType_password_resSpecial) this.hsValidator.valType.password.resSpecial = hsV_valType_password_resSpecial
      let hsV_valType_password_resLetter = this.validateText(data.valType.password.resLetter, true)
      if (hsV_valType_password_resLetter) this.hsValidator.valType.password.resLetter = hsV_valType_password_resLetter
      let hsV_valType_password_resNumber = this.validateText(data.valType.password.resNumber, true)
      if (hsV_valType_password_resNumber) this.hsValidator.valType.password.resNumber = hsV_valType_password_resNumber
      let hsV_valType_boolean_resMain = this.validateText(data.valType.boolean.resMain, true)
      if (hsV_valType_boolean_resMain) this.hsValidator.valType.boolean.resMain = hsV_valType_boolean_resMain
      let hsV_valType_boolean_resTrue = this.validateText(data.valType.boolean.resTrue, true)
      if (hsV_valType_boolean_resTrue) this.hsValidator.valType.boolean.resTrue = hsV_valType_boolean_resTrue
      let hsV_valType_boolean_resFalse = this.validateText(data.valType.boolean.resFalse, true)
      if (hsV_valType_boolean_resFalse) this.hsValidator.valType.boolean.resFalse = hsV_valType_boolean_resFalse

      let hsV_valNumbers_resBigger = this.validateText(data.valNumbers.resBigger, true)
      if (hsV_valNumbers_resBigger) this.hsValidator.valNumbers.resBigger = hsV_valNumbers_resBigger
      let hsV_valNumbers_resLower = this.validateText(data.valNumbers.resLower, true)
      if (hsV_valNumbers_resLower) this.hsValidator.valNumbers.resLower = hsV_valNumbers_resLower

      let hsV_valExtensions_resImage = this.validateText(data.valExtensions.resImage, true)
      if (hsV_valExtensions_resImage) this.hsValidator.valExtensions.resImage = hsV_valExtensions_resImage
    }
  }

  var_hsValidator () {
    this.hsValidator = {
      valEmpty: {
        res: null
      },
      valMin: {
        res: null
      },
      valMax: {
        res: null
      },
      valEqual: {
        res: null
      },
      valUnequal: {
        res: null,
        resArray: null
      },
      valType: {
        text: {
          res: null
        },
        number: {
          res: null
        },
        email: {
          res: null
        },
        password: {
          resSpecial: null,
          resLetter: null,
          resNumber: null
        },
        boolean: {
          resMain: null,
          resTrue: null,
          resFalse: null
        }
      },
      valNumbers: {
        resBigger: null,
        resLower: null
      },
      valExtensions: {
        resImage: null
      }
    }
  }

  get_hsValidator () {
    return {
      hsValidator: this.hsValidator
    }
  }
}

module.exports = {
  hsValidator
}
