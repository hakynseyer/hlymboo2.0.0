import {updateMachineData, checkMachineData, resetMachineData, serverMachineData} from '../../tools/machineData'
import {valHS} from '../../tools/validator'

const updatesData = {
  basic: {
    updateEmail (data) {
      let updateMain = ['hyzher', 'email', data]

      this.updateMain(...updateMain)
    },
    updatePassword (data) {
      let updateMain = ['hyzher', 'password', data]

      this.updateMain(...updateMain)
    }
  }
}

const checksData = {
  basic: {
    checkEmail () {
      let checkBasicMain = ['hyzher', 'emailInput', 'email', 5, 50]

      this.checkBasicMain(...checkBasicMain)

      let err = valHS.checkEmail(this.form.hyzher.email.value)
      if (err !== null) this.form.hyzher.email.error[0] = err
    },
    checkPassword () {
      let checkBasicMain = ['hyzher', 'passwordInput', 'password', 7, 70]

      this.checkBasicMain(...checkBasicMain)
    }
  }
}

const validateData = {
  basic: {
    validateHyzherErrors () {
      if (this.form.hyzher.email.error.length || this.form.hyzher.password.error.length) this.form.hyzher.status = true
    },
    validateHyzher () {
      this.form.hyzher.status = false

      this.checkEmail()
      this.checkPassword()

      this.validateHyzherErrors()
    }
  }
}

const cleanerData = {
  basic: {
    formCleanerHyzher (data, errors) {
      let cleanerHyzher = ['hyzher', 'email', 'password']
      if (data) this.resetMainData('string', ...cleanerHyzher)
      if (errors) this.resetMainErrors(...cleanerHyzher)
    },
    formCleaner () {
      this.formCleanerHyzher(true, true)
    }
  }
}

export const loginConstructor = {
  mixins: [updateMachineData, checkMachineData, resetMachineData, serverMachineData],
  methods: Object.assign(updatesData.basic, checksData.basic, validateData.basic, cleanerData.basic)
}
