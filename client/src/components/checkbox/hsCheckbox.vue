<template lang="pug">
  div(
    :class="{'hs-frm__box__body__group--free-height': activeCheck, 'hs-frm__box__body__group--padding-bottom': activeCheck, 'hs-frm__box__body__group--error': validateErrors}"
    class="hs-frm__box__body__group")

    label(
      :class="{'hs-label--active' : activeCheck, 'hs-label--error': validateErrors}"
      class="hs-label"
      @click="stateCheck()") {{configCheck.titleCheck}}

    hidden-message-inputs(
      :refMessage="configCheck.id"
      :hiddenMessage="configCheck.hiddenMessage")

    div(
      v-for="checkElement in configCheck.checkList"
      :class="{'hs-checkbox--active': activeCheck}"
      class="hs-checkbox")
      input(
        :id="checkElement"
        type="checkbox"
        :value="checkElement"
        @change="sendCheck($event)")
      label(
        :ref="configCheck.id"
        :for="checkElement"
        class="hs-checkbox__element") {{checkElement}}
      div(
        :for="checkElement"
        class="hs-checkbox__square"
        @click="sendCheck(checkElement)")

    hs-error(:errors="errorCheck")
</template>

<script>
import hiddenMessageInputs from '@/components/hiddenMessageInputs/hsHiddenMessageInputs'

import hsError from '@/components/error/hsError'

export default {
  components: {
    hiddenMessageInputs,
    hsError
  },

  props: [
    'configCheck',
    'errorCheck'
  ],

  created () {
    if (this.configCheck.checkList.length) this.activeCheck = true
  },

  mounted () {
    this.$busForm.$on('hsCheckbox_activeCheck', (data) => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeCheck = data.state
      } else if (typeof (data.state) !== 'undefined') this.activeCheck = data.state
    })
    this.$busForm.$on('hsCheckbox_chosenCheck', (data) => {
      // console.log(data)
      if (typeof (data.id) !== 'undefined' && typeof (data.value) !== 'undefined') {
        if (typeof (this.$refs[data.id]) !== 'undefined') {

        }
      }
      // TODO: Completar este campo hasta su funcionamiento

      // NO FUNCIONA LO DE ABAJO ES UN EJEMPLO DEL RADIO BUTTON

      // if (valor && this.listaRadios.indexOf(valor) >= 0) {
      //   this.radioElegido = valor
      //   this.enviarRadioElegido()
      // }
    })
    this.$busForm.$on('hsCheckbox_cleanAll', (data) => {
      if (typeof (data.id) !== 'undefined' && typeof (data.value) !== 'undefined') {
        if (typeof (this.$refs[data.id]) !== 'undefined') {
          this.saveCheck = []
          this.$refs[data.id].forEach(check => {
            check.nextSibling.className = 'hs-checkbox__square'
          })
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsCheckbox_activeCheck')
    this.$busForm.$off('hsCheckbox_chosenCheck')
    this.$busForm.$off('hsCheckbox_cleanAll')
  },

  data () {
    return {
      activeCheck: false,
      saveCheck: [],
      stateTouch: false
    }
  },

  computed: {
    validateErrors () {
      let res = false

      if (this.errorCheck) {
        if (this.errorCheck.length) {
          if (!this.activeCheck) this.activeCheck = true
          res = true
        }
      }

      return res
    }
  },

  methods: {
    stateCheck () {
      if (this.configCheck.checkList.length) this.activeCheck = true

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configCheck.headboard, false)
    },
    sendCheck (data) {
      let checkData = null

      if (typeof (data.target) !== 'undefined') {
        if (!this.stateTouch && data.code !== 'Tab') this.stateTouch = true
        checkData = data.target.value
      } else {
        this.stateTouch = true
        checkData = data
      }

      let checkPosition = this.saveCheck.indexOf(checkData)
      if (checkPosition >= 0) this.saveCheck.splice(checkPosition, 1)
      else this.saveCheck.push(checkData)

      this.$refs[this.configCheck.id].forEach(check => {
        let checkPosition = this.saveCheck.indexOf(check.textContent)
        if (checkPosition >= 0) check.nextSibling.className = 'hs-checkbox__square hs-checkbox__square--chosen'
        else check.nextSibling.className = 'hs-checkbox__square'
      })

      this.$emit('checkData', this.saveCheck)
      if (this.configCheck.updateErrors) this.sendTouch()

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configCheck.headboard, false)
    },
    nextInput (key) {
      // TODO: Activar siguiente input no funciona. Necesario para activar el siguiente input al usar combinación de keys
      if ((key === 'Tab') && !this.activeCheck) this.activeCheck = true
    },
    sendTouch () {
      if (this.stateTouch) {
        if (this.configCheck.checkList.length <= 0) this.activeCheck = false
        this.$emit('checkTouch', true)
        this.stateTouch = false
      }
    }
  }
}
</script>

