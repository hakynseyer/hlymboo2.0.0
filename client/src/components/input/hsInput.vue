<template lang="pug">
  div(
    v-show="!configInput.hideInput"
    :class="{'hs-frm__box__body__group--free-height': reactiveDataInput, 'hs-frm__box__body__group--error': validateErrors}"
    class="hs-frm__box__body__group")

    label(
      :for="configInput.titleInput"
      :class="{'hs-label--active': activeInput, 'hs-label--error': validateErrors}"
      class="hs-label"
      @click="stateInput()") {{configInput.titleInput}}

    hidden-message-inputs(
      :refMessage="configInput.id"
      :hiddenMessage="configInput.hiddenMessage")

    input(
      :ref="configInput.id"
      :id="configInput.titleInput"
      :type="configInput.typeInput"
      :value="reactiveDataInput"
      :class="{'hs-input--active': activeInput}"
      class="hs-input"
      @keyup="sendInput($event)"
      @blur="sendTouch()")

    hs-error(:errors="errorInput")
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
    'configInput',
    'reactiveDataInput',
    'errorInput'
  ],

  mounted () {
    this.$busForm.$on('hsInput_activeInput', (data) => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeInput = data.state
      } else if (typeof (data.state) !== 'undefined') this.activeInput = data.state
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsInput_activeInput')
  },

  data () {
    return {
      activeInput: false,
      stateTouch: false
    }
  },

  computed: {
    validateErrors () {
      let res = false

      if (this.errorInput) {
        if (this.errorInput.length) {
          if (!this.activeInput) this.activeInput = true
          res = true
        }
      }

      return res
    }
  },

  methods: {
    stateInput () {
      if (this.reactiveDataInput === null && !this.activeInput) this.activeInput = true

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configInput.headboard, false)
    },
    sendInput (data) {
      if (!this.stateTouch && data.code !== 'Tab') this.stateTouch = true

      let inputData = data.target.value

      if ((data.code === 'Tab') && !this.activeInput) this.activeInput = true

      this.$emit('inputData', inputData)
      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configInput.headboard, false)
    },
    sendTouch () {
      if (this.stateTouch) {
        if (this.reactiveDataInput === null || this.reactiveDataInput.length <= 0) this.activeInput = false
        this.$emit('inputTouch', true)
        this.stateTouch = false
      }
    }
  }
}
</script>
