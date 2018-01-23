import {_treatment} from '../../_treatment'

const formData = {
  data () {
    return {
      lang: {
        form: {
          head: {
            title: null,
            buttons: {
              cleaner: null,
              ready: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_form (dataLink) {
      this.lang.form.head.title = _treatment.dataTreatmentSimple(dataLink.f_title)
      this.lang.form.head.buttons.cleaner = _treatment.dataTreatmentSimple(dataLink.f_cleaner)
      this.lang.form.head.buttons.ready = _treatment.dataTreatmentSimple(dataLink.f_ready)
    }
  }
}

const hsFormHeadboardData = {
  data () {
    return {
      lang: {
        hsFormHeadboard: {
          hyzher: {
            title: null,
            message: []
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsFormHeadboard (dataLink) {
      this.lang.hsFormHeadboard.hyzher.title = _treatment.dataTreatmentSimple(dataLink.hsFH_hyzher_title)
      this.lang.hsFormHeadboard.hyzher.message = _treatment.dataTreatmentArray(dataLink.hsFH_hyzher_message)
    }
  }
}

const hsInputData = {
  data () {
    return {
      lang: {
        hsInput: {
          email: {
            config: {
              id: 'emailInput',
              hideInput: false,
              typeInput: 'email',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
          password: {
            config: {
              id: 'passwordInput',
              hideInput: false,
              typeInput: 'password',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsInput (dataLink) {
      this.lang.hsInput.email.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_email_titleInput)
      this.lang.hsInput.email.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_email_headBoard)
      this.lang.hsInput.email.config.hiddenMessage = _treatment.dataTreatmentSimple
      (dataLink.hsFI_email_hiddenMessage)

      this.lang.hsInput.password.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_password_titleInput)
      this.lang.hsInput.password.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_password_headBoard)
      this.lang.hsInput.password.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_password_hiddenMessage)
    }
  }
}

export {
  formData,
  hsFormHeadboardData,
  hsInputData
}
