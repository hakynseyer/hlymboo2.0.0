import {validateData} from '../../_fixData/validateData'

class hsValidator extends validateData {
  constructor (data) {
    super()
    this.var_hsValidator()

    let checkEmpty = typeof (data.checkEmpty) === 'object'
    let checkMin = typeof (data.checkMin) === 'object'
    let checkMax = typeof (data.checkMax) === 'object'
    let checkEmail = typeof (data.checkEmail) === 'object'
    let checkEqual = typeof (data.checkEqual) === 'object'
    let checkUnequal = typeof (data.checkUnequal) === 'object'
    let checkType = typeof (data.checkType) === 'object'

    if (checkEmpty && checkMin && checkMax && checkEmail && checkEqual && checkUnequal && checkType) {
      let hsV_checkEmpty_res = this.validateText(data.checkEmpty.res, true)
      if (hsV_checkEmpty_res) this.hsValidator.checkEmpty.res = hsV_checkEmpty_res

      let hsV_checkMin_res = this.validateText(data.checkMin.res, true)
      if (hsV_checkMin_res) this.hsValidator.checkMin.res = hsV_checkMin_res

      let hsV_checkMax_res = this.validateText(data.checkMax.res, true)
      if (hsV_checkMax_res) this.hsValidator.checkMax.res = hsV_checkMax_res

      let hsV_checkEmail_res = this.validateText(data.checkEmail.res, true)
      if (hsV_checkEmail_res) this.hsValidator.checkEmail.res = hsV_checkEmail_res

      let hsV_checkEqual_res = this.validateText(data.checkEqual.res, true)
      if (hsV_checkEqual_res) this.hsValidator.checkEqual.res = hsV_checkEqual_res

      let hsV_checkUnequal_res = this.validateText(data.checkUnequal.res, true)
      if (hsV_checkUnequal_res) this.hsValidator.checkUnequal.res = hsV_checkUnequal_res

      let hsV_checkType_boolean_resMain = this.validateText(data.checkType.boolean.resMain, true)
      if (hsV_checkType_boolean_resMain) this.hsValidator.checkType.boolean.resMain = hsV_checkType_boolean_resMain
      let hsV_checkType_boolean_resTrue = this.validateText(data.checkType.boolean.resTrue, true)
      if (hsV_checkType_boolean_resTrue) this.hsValidator.checkType.boolean.resTrue = hsV_checkType_boolean_resTrue
      let hsV_checkType_boolean_resFalse = this.validateText(data.checkType.boolean.resFalse, true)
      if (hsV_checkType_boolean_resFalse) this.hsValidator.checkType.boolean.resFalse = hsV_checkType_boolean_resFalse
    }
  }

  var_hsValidator () {
    this.hsValidator = {
      checkEmpty: {
        res: null
      },
      checkMin: {
        res: null
      },
      checkMax: {
        res: null
      },
      checkEmail: {
        res: null
      },
      checkEqual: {
        res: null
      },
      checkUnequal: {
        res: null
      },
      checkType: {
        boolean: {
          resMain: null,
          resTrue: null,
          resFalse: null
        }
      }
    }
  }

  get_hsValidator () {
    return {
      hsValidator: this.hsValidator
    }
  }
}

export {
  hsValidator
}
