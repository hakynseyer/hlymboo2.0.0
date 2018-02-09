import {validateData} from '../../_fixData/validateData'

class hsModal extends validateData {
  constructor (data) {
    super()
    this.var_hsModal()

    let redirectDefault = typeof (data.msgRedirectDefault) === 'string'
    let redirectCustomized = typeof (data.msgRedirectCustomized) === 'string'

    if (redirectDefault && redirectCustomized) {
      let hsM_redirectDefault = this.validateText(data.msgRedirectDefault, true)
      if (hsM_redirectDefault) this.hsModal.msgRedirectDefault = hsM_redirectDefault

      let hsM_redirectCustomized = this.validateText(data.msgRedirectCustomized, true)
      if (hsM_redirectCustomized) this.hsModal.msgRedirectCustomized = hsM_redirectCustomized
    }

  }

  var_hsModal () {
    this.hsModal = {
      msgRedirectDefault: null,
      msgRedirectCustomized: null
    }
  }

  get_hsModal () {
    return {
      hsModal: this.hsModal
    }
  }
}

export {
  hsModal
}
