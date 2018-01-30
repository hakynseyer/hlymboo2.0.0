import {mainMachineData, updateMachineData, checkMachineData, resetMachineData, serverMachineData} from '../../tools/machineData'
import {valHS} from '../../tools/validator'

const updatesData = {
  basic: {
    updateName (data) {
      let updateMain = ['personal', 'name', data]

      this.updateMain(...updateMain)
    },
    updateSurnames (data) {
      let updateMain = ['personal', 'surnames', data]

      this.updateMain(...updateMain)
    },
    updateAlias (data) {
      let updateMain = ['personal', 'alias', data]

      this.updateMain(...updateMain)
    },
    updateEmail (data) {
      let updateMain = ['personal', 'email', data]

      this.updateMain(...updateMain)
    },
    updatePassword (data) {
      let updateMain = ['passwords', 'password', data]

      this.updateMain(...updateMain)
    },
    updateRepeatPassword (data) {
      let updateMain = ['passwords', 'repeatPassword', data]

      this.updateMain(...updateMain)
    },
    updateQuestion1 (data) {
      let updateMain = ['security', 'question1', data]

      this.updateMainSelect(...updateMain)
    },
    updateAnswer1 (data) {
      let updateMain = ['security', 'answer1', data]

      this.updateMain(...updateMain)
    },
    updateQuestion2 (data) {
      let updateMain = ['security', 'question2', data]

      this.updateMainSelect(...updateMain)
    },
    updateAnswer2 (data) {
      let updateMain = ['security', 'answer2', data]

      this.updateMain(...updateMain)
    },
    updateSign (checkChosen, data) {
      let checkSign = false

      if (data.length && data.length === 1) {
        data.forEach(check => {
          if (check === checkChosen) checkSign = true
        })
      }

      let updateMain = ['sign', 'sign', checkSign]

      this.updateMain(...updateMain)
    }
  }
}

var nameCompareComponent = {
  repeatPassword: null,
  question1: null,
  question2: null
}
const checksData = {
  basic: {
    checkName () {
      let checkBasicMain = ['personal', 'nameInput', 'name', 3, 10]

      this.checkBasicMain(...checkBasicMain)
    },
    checkSurnames () {
      let checkBasicMain = ['personal', 'surnamesInput', 'surnames', 5, 20]

      this.checkBasicMain(...checkBasicMain)
    },
    checkAlias () {
      let checkBasicMain = ['personal', 'aliasInput', 'alias', 4, 15]

      this.checkBasicMain(...checkBasicMain)
    },
    checkEmail () {
      let checkBasicMain = ['personal', 'emailInput', 'email', 5, 50]

      this.checkBasicMain(...checkBasicMain)

      let err = valHS.checkEmail(this.form.personal.email.value)
      if (err !== null) this.form.personal.email.error[0] = err
    },
    checkPassword () {
      let checkBasicMain = ['passwords', 'passwordInput', 'password', 7, 70]

      this.checkBasicMain(...checkBasicMain)
    },
    checkRepeatPassword (nameCompare) {
      let checkBasicMain = ['passwords', 'repeatPasswordInput', 'repeatPassword', 7, 70]

      this.checkBasicMain(...checkBasicMain)

      if (typeof (nameCompare) !== 'undefined') nameCompareComponent.repeatPassword = nameCompare

      let err = valHS.checkEqual(this.form.passwords.repeatPassword.value, {name: nameCompareComponent.repeatPassword, data: this.form.passwords.password.value})
      if (err !== null) {
        this.form.passwords.repeatPassword.error[0] = err
        this.$busForm.$emit('formMixins_successIcon', {id: 'repeatPasswordInput', state: false})
      } else this.$busForm.$emit('formMixins_successIcon', {id: 'repeatPasswordInput', state: true})
    },
    checkQuestion1 (nameCompare) {
      let checkBasicMain = ['security', 'question1Select', 'question1', 4, 100]

      this.checkBasicMain(...checkBasicMain)

      if (typeof (nameCompare) !== 'undefined') nameCompareComponent.question1 = nameCompare
      let err = valHS.checkUnequal(this.form.security.question1.value, {name: nameCompareComponent.question1, data: this.form.security.question2.value})
      if (err !== null) {
        this.form.security.question1.error[0] = err
        this.$busForm.$emit('formMixins_successIcon', {id: 'question1Select', state: false})
      } else {
        this.form.security.question2.error = []
        this.$busForm.$emit('formMixins_successIcon', {id: 'question1Select', state: true})
      }
    },
    checkAnswer1 () {
      let checkBasicMain = ['security', 'answer1Input', 'answer1', 5, 35]

      this.checkBasicMain(...checkBasicMain)
    },
    checkQuestion2 (nameCompare) {
      let checkBasicMain = ['security', 'question2Select', 'question2', 4, 100]

      this.checkBasicMain(...checkBasicMain)

      if (typeof (nameCompare) !== 'undefined') nameCompareComponent.question2 = nameCompare

      let err = valHS.checkUnequal(this.form.security.question2.value, {name: nameCompareComponent.question2, data: this.form.security.question1.value})
      if (err !== null) {
        this.form.security.question2.error[0] = err
        this.$busForm.$emit('formMixins_successIcon', {id: 'question2Select', state: false})
      } else {
        this.form.security.question1.error = []
        this.$busForm.$emit('formMixins_successIcon', {id: 'question2Select', state: true})
      }
    },
    checkAnswer2 () {
      let checkBasicMain = ['security', 'answer2Input', 'answer2', 5, 35]

      this.checkBasicMain(...checkBasicMain)
    },
    checkSign () {
      this.form.sign.sign.error = []

      let err = valHS.checkType({value: this.form.sign.sign.value, response: true}, 'boolean')
      if (err !== null) {
        this.form.sign.sign.error[0] = err
        this.$busForm.$emit('formMixins_successIcon', {id: 'signCheck', state: false})
      } else this.$busForm.$emit('formMixins_successIcon', {id: 'signCheck', state: true})
    }
  }
}

const validateData = {
  basic: {
    validatePersonalErrors () {
      if (this.form.personal.name.error.length || this.form.personal.surnames.error.length || this.form.personal.alias.error.length || this.form.personal.email.error.length) this.form.personal.status = true
    },
    validatePersonal () {
      this.form.personal.status = false

      this.checkName()
      this.checkSurnames()
      this.checkAlias()
      this.checkEmail()

      this.validatePersonalErrors()
    },

    validatePasswordsErrors () {
      if (this.form.passwords.password.error.length || this.form.passwords.repeatPassword.error.length) this.form.passwords.status = true
    },
    validatePasswords () {
      this.form.passwords.status = false

      this.checkPassword()
      this.checkRepeatPassword()

      this.validatePasswordsErrors()
    },

    validateSecurityErrors () {
      if (this.form.security.question1.error.length || this.form.security.answer1.error.length || this.form.security.question2.error.length || this.form.security.answer2.error.length) this.form.security.status = true
    },
    validateSecurity () {
      this.form.security.status = false

      this.checkQuestion1()
      this.checkAnswer1()
      this.checkQuestion2()
      this.checkAnswer2()

      this.validateSecurityErrors()
    },

    validateSignErrors () {
      if (this.form.sign.sign.error.length) this.form.sign.status = true
    },
    validateSign () {
      this.form.sign.status = false

      this.checkSign()

      this.validateSignErrors()
    }
  }
}

const cleanerData = {
  basic: {
    formCleanerPersonal (cleaner, errors) {
      let cleanerPersonal = ['personal', 'name', 'surnames', 'alias', 'email']
      if (cleaner) this.resetMainData('string', ...cleanerPersonal)
      if (errors) this.resetMainErrors(...cleanerPersonal)
    },

    formCleanerPasswords (cleaner, errors) {
      let cleanerPasswords = ['passwords', 'password', 'repeatPassword']
      if (cleaner) this.resetMainData('string', ...cleanerPasswords)
      if (errors) this.resetMainErrors(...cleanerPasswords)
    },

    formCleanerSecurity (cleaner, errors) {
      let cleanerSecurity = ['security', 'answer1', 'answer2']
      if (cleaner) this.resetMainData('string', ...cleanerSecurity)
      if (errors) this.resetMainErrors(...cleanerSecurity)
    },

    formCleanerSign (cleaner, errors) {
      let cleanerSign = ['sign', 'sign']
      if (cleaner) {
        this.resetMainData('booleanFalse', ...cleanerSign)
        this.$busForm.$emit('hsCheckbox_cleanAll', {id: 'signCheck', value: this.lang.hsCheckbox.sign.config.checkChosen})
      }
      if (errors) this.resetMainErrors(...cleanerSign)
    },

    formCleaner () {
      this.formCleanerPersonal(true, true)
      this.formCleanerPasswords(true, true)
      this.formCleanerSecurity(true, true)
      this.formCleanerSign(true, true)
    }
  }
}

export const newConstructor = {
  mixins: [mainMachineData, updateMachineData, checkMachineData, resetMachineData, serverMachineData],
  methods: Object.assign(updatesData.basic, checksData.basic, validateData.basic, cleanerData.basic)
}
