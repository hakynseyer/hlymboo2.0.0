import {validateData} from '../../_fixData/validateData'

class hsPagination extends validateData {
  constructor (data) {
    super()
    this.var_hsPagination()

    let buttonStart = typeof (data.buttonStart) === 'string'
    let buttonFinal = typeof (data.buttonFinal) === 'string'

    if (buttonStart && buttonFinal) {
      let hsP_buttonStart = this.validateText(data.buttonStart, true)
      if (hsP_buttonStart) this.hsPagination.buttonStart = hsP_buttonStart

      let hsP_buttonFinal = this.validateText(data.buttonFinal, true)
      if (hsP_buttonFinal) this.hsPagination.buttonFinal = hsP_buttonFinal
    }
  }

  var_hsPagination () {
    this.hsPagination = {
      buttonStart: null,
      buttonFinal: null
    }
  }

  get_hsPagination () {
    return {
      hsPagination: this.hsPagination
    }
  }
}

export {
  hsPagination
}
