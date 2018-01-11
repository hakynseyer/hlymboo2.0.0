import {valHS} from '../tools/validator'

const updateMachineData = {
  methods: {
    updateMain (headBoard, component, value) {
      if (value === null || value.length <= 0) this.form[headBoard][component].value = null
      else this.form[headBoard][component].value = value

      if (this.form[headBoard].status || this.form[headBoard][component].error.length) {
        let callFunction = 'check' + component.charAt(0).toUpperCase() + component.slice(1)
        this[callFunction]()
      }
    },

    updateMainSelect (headBoard, component, data) {
      if (data.value === null || data.value.length <= 0) this.form[headBoard][component].value = null
      else this.form[headBoard][component].value = data.value

      if (this.form[headBoard].status || this.form[headBoard][component].error.length) {
        let callFunction = 'check' + component.charAt(0).toUpperCase() + component.slice(1)
        this[callFunction]()
      }
    }
  }
}

const checkMachineData = {
  methods: {
    checkBasicMain (headBoard, id, component, min, max) {
      let dataValue = this.form[headBoard][component].value
      let vm = this
      let err

      function sendError (err) {
        vm.form[headBoard][component].error[0] = err
        vm.$busForm.$emit('formMixins_successIcon', {id: id, state: false})
      }

      this.form[headBoard][component].error = []

      err = valHS.checkEmpty(dataValue)
      if (err !== null) sendError(err)
      else {
        err = valHS.checkMin(dataValue, min)
        if (err !== null) sendError(err)
        else {
          err = valHS.checkMax(dataValue, max)
          if (err !== null) sendError(err)
          else this.$busForm.$emit('formMixins_successIcon', {id: id, state: true})
        }
      }
    }
  }
}

const resetMachineData = {
  methods: {
    resetMainData (type, headBoard, ...components) {
      switch (type) {
        case 'string':
          for (let component of components) {
            this.form[headBoard][component].value = null
          }
          break
        case 'booleanFalse':
          for (let component of components) {
            this.form[headBoard][component].value = false
          }
          break
        case 'booleanTrue':
          for (let component of components) {
            this.form[headBoard][component].value = true
          }
          break
      }
    },
    resetMainErrors (headBoard, ...components) {
      this.errorServer = null
      this.form[headBoard].status = false

      for (let component of components) {
        this.form[headBoard][component].error = []
      }
    }
  }
}

const serverMachineData = {
  methods: {
    addErrorToBoard (errors) {
      let getKeys = new Promise(resolve => {
        let errorsKeys = Object.keys(errors)
        let inputsServerKeys = []
        for (let key of errorsKeys) {
          if (errors[key].length) inputsServerKeys.push(key)
        }

        let headBoardsKeys = Object.keys(this.form)
        let inputsFormKeys = headBoardsKeys.map(hb => {
          let keys = Object.keys(this.form[hb])
          let noStatus = keys.indexOf('status')

          if (noStatus >= 0) keys.splice(noStatus, 1)

          keys.splice(0, 0, hb)

          return keys
        })

        resolve({inputsServerKeys, inputsFormKeys})
      })

      getKeys.then(keys => {
        keys.inputsServerKeys.forEach(serverKeys => {
          keys.inputsFormKeys.forEach(formKeys => {
            for (let i = 1; i < formKeys.length; i++) {
              if (formKeys[i] === serverKeys) {
                this.form[formKeys[0]][formKeys[i]].error = errors[serverKeys]
              }
            }
          })
        })
      })
    }
  }
}

export {updateMachineData, checkMachineData, resetMachineData, serverMachineData}
