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
          personal: {
            title: null,
            message: []
          },
          passwords: {
            title: null,
            message: []
          },
          security: {
            title: null,
            message: []
          },
          sign: {
            title: null,
            message: []
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsFormHeadboard (dataLink) {
      this.lang.hsFormHeadboard.personal.title = _treatment.dataTreatmentSimple(dataLink.hsFH_personal_title)
      this.lang.hsFormHeadboard.personal.message = _treatment.dataTreatmentArray(dataLink.hsFH_personal_message)

      this.lang.hsFormHeadboard.passwords.title = _treatment.dataTreatmentSimple(dataLink.hsFH_passwords_title)
      this.lang.hsFormHeadboard.passwords.message = _treatment.dataTreatmentArray(dataLink.hsFH_passwords_message)

      this.lang.hsFormHeadboard.security.title = _treatment.dataTreatmentSimple(dataLink.hsFH_security_title)
      this.lang.hsFormHeadboard.security.message = _treatment.dataTreatmentArray(dataLink.hsFH_security_message)

      this.lang.hsFormHeadboard.sign.title = _treatment.dataTreatmentSimple(dataLink.hsFH_sign_title)
      this.lang.hsFormHeadboard.sign.message = _treatment.dataTreatmentArray(dataLink.hsFH_sign_message)
    }
  }
}

const hsInputData = {
  data () {
    return {
      lang: {
        hsInput: {
          name: {
            config: {
              id: 'nameInput',
              hideInput: false,
              typeInput: 'text',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
          surnames: {
            config: {
              id: 'surnamesInput',
              hideInput: false,
              typeInput: 'text',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
          alias: {
            config: {
              id: 'aliasInput',
              hideInput: false,
              typeInput: 'text',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
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
          },
          repeatPassword: {
            config: {
              id: 'repeatPasswordInput',
              hideInput: false,
              typeInput: 'password',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
          answer1: {
            config: {
              id: 'answer1Input',
              hideInput: false,
              typeInput: 'text',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
          answer2: {
            config: {
              id: 'answer2Input',
              hideInput: false,
              typeInput: 'text',
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
      this.lang.hsInput.name.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_name_titleInput)
      this.lang.hsInput.name.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_name_headBoard)
      this.lang.hsInput.name.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_name_hiddenMessage)

      this.lang.hsInput.surnames.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_surnames_titleInput)
      this.lang.hsInput.surnames.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_surnames_headBoard)
      this.lang.hsInput.surnames.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_surnames_hiddenMessage)

      this.lang.hsInput.alias.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_alias_titleInput)
      this.lang.hsInput.alias.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_alias_headBoard)
      this.lang.hsInput.alias.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_alias_hiddenMessage)

      this.lang.hsInput.email.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_email_titleInput)
      this.lang.hsInput.email.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_email_headBoard)
      this.lang.hsInput.email.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_email_hiddenMessage)

      this.lang.hsInput.password.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_password_titleInput)
      this.lang.hsInput.password.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_password_headBoard)
      this.lang.hsInput.password.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_password_hiddenMessage)

      this.lang.hsInput.repeatPassword.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_repeatPassword_titleInput)
      this.lang.hsInput.repeatPassword.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_repeatPassword_headBoard)
      this.lang.hsInput.repeatPassword.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_repeatPassword_hiddenMessage)

      this.lang.hsInput.answer1.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_answer1_titleInput)
      this.lang.hsInput.answer1.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_answer1_headBoard)
      this.lang.hsInput.answer1.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_answer1_hiddenMessage)

      this.lang.hsInput.answer2.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsFI_answer2_titleInput)
      this.lang.hsInput.answer2.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFI_answer2_headBoard)
      this.lang.hsInput.answer2.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFI_answer2_hiddenMessage)
    }
  }
}

const hsSelectData = {
  data () {
    return {
      lang: {
        hsSelect: {
          question1: {
            config: {
              id: 'question1Select',
              typeSelect: 'Array',
              optionDataDefault: null,
              optionData: [],
              titleSelect: null,
              headBoard: null,
              hiddenMessage: null
            }
          },
          question2: {
            config: {
              id: 'question2Select',
              typeSelect: 'Array',
              optionDataDefault: null,
              optionData: [],
              titleSelect: null,
              headBoard: null,
              hiddenMessage: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsSelect (dataLink) {
      this.lang.hsSelect.question1.config.optionDataDefault = _treatment.dataTreatmentSimple(dataLink.hsFS_question1_optionDataDefault)
      this.lang.hsSelect.question1.config.optionData = _treatment.dataTreatmentArray(dataLink.hsFS_question1_optionData)
      this.lang.hsSelect.question1.config.titleSelect = _treatment.dataTreatmentSimple(dataLink.hsFS_question1_titleSelect)
      this.lang.hsSelect.question1.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFS_question1_headBoard)
      this.lang.hsSelect.question1.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFS_question1_hiddenMessage)

      this.lang.hsSelect.question2.config.optionDataDefault = _treatment.dataTreatmentSimple(dataLink.hsFS_question2_optionDataDefault)
      this.lang.hsSelect.question2.config.optionData = _treatment.dataTreatmentArray(dataLink.hsFS_question2_optionData)
      this.lang.hsSelect.question2.config.titleSelect = _treatment.dataTreatmentSimple(dataLink.hsFS_question2_titleSelect)
      this.lang.hsSelect.question2.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFS_question2_headBoard)
      this.lang.hsSelect.question2.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFS_question2_hiddenMessage)
    }
  }
}

const hsCheckboxData = {
  data () {
    return {
      lang: {
        hsCheckbox: {
          sign: {
            config: {
              id: 'signCheck',
              checkUpdateShowErrors: true,
              checkChosen: null,
              checkList: [],
              titleCheck: null,
              headBoard: null,
              hiddenMessage: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsCheckbox (dataLink) {
      this.lang.hsCheckbox.sign.config.checkChosen = _treatment.dataTreatmentSimple(dataLink.hsFC_checkChosen)
      this.lang.hsCheckbox.sign.config.checkList = _treatment.dataTreatmentArray(dataLink.hsFC_checkList)
      this.lang.hsCheckbox.sign.config.titleCheck = _treatment.dataTreatmentSimple(dataLink.hsFC_titleCheck)
      this.lang.hsCheckbox.sign.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsFC_headBoard)
      this.lang.hsCheckbox.sign.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsFC_hiddenMessage)
    }
  }
}

const hsAlertModalData = {
  data () {
    return {
      lang: {
        hsAlertModal: {
          configModal: {
            transition: 'hsModal_Center',
            disableExit: true,
            head: {
              headAlign: null,
              title: null,
              subtitle: null
            },
            timer: {
              time: 30,
              redirect: {
                name: null,
                route: 'home'
              }
            }
          },
          configAlertModal: {
            type: null,
            body: {
              head: null,
              body: null,
              footer: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsAlertModal (dataLink) {
      this.lang.hsAlertModal.configModal.head.headAlign = _treatment.dataTreatmentSimple(dataLink.hsAM_headAlign)
      this.lang.hsAlertModal.configModal.head.title = _treatment.dataTreatmentSimple(dataLink.hsAM_title)
      this.lang.hsAlertModal.configModal.head.subtitle = _treatment.dataTreatmentSimple(dataLink.hsAM_subtitle)

      this.lang.hsAlertModal.configModal.timer.time = dataLink.hsAM_time
      this.lang.hsAlertModal.configModal.timer.redirect.name = _treatment.dataTreatmentSimple(dataLink.hsAM_name)
      this.lang.hsAlertModal.configModal.timer.redirect.route = _treatment.dataTreatmentSimple(dataLink.hsAM_route)

      this.lang.hsAlertModal.configAlertModal.type = _treatment.dataTreatmentSimple(dataLink.hsAM_type)
      this.lang.hsAlertModal.configAlertModal.body.head = _treatment.dataTreatmentSimple(dataLink.hsAM_head)
      this.lang.hsAlertModal.configAlertModal.body.body = dataLink.hsAM_body
      this.lang.hsAlertModal.configAlertModal.body.footer = _treatment.dataTreatmentSimple(dataLink.hsAM_footer)
    }
  }
}

const h2ActivationMessageData = {
  data () {
    return {
      lang: {
        h2ActivationMessage: {
          h2Message: null
        }
      }
    }
  },
  methods: {
    dataLink_h2ActivationMessage (dataLink) {
      this.lang.h2ActivationMessage.h2Message = _treatment.dataTreatmentSimple(dataLink.h2AM_h2Message)
    }
  }
}

export {
  formData,
  hsFormHeadboardData,
  hsInputData,
  hsSelectData,
  hsCheckboxData,
  hsAlertModalData,
  h2ActivationMessageData
}
