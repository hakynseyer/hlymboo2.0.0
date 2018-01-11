<template lang="pug">
  div(
    v-show="!configInput.hideInput"
    :class="{'form__box__body__group--free-height': reactiveDataInput, 'form__box__body__group--error': validateErrors}"
    class="form__box__body__group")

    label(
      :for="configInput.titleInput"
      :class="{'form__label--active': activeInput, 'form__label--error': validateErrors}"
      class="form__label"
      @click="stateInput()") {{configInput.titleInput}}
    span(
      class="form__label__status"
      @mousedown="enableHiddenMessage"
      @mouseup="disableHiddenMessage")
      icon(
        v-if="!successIcon"
        name="asterisk"
        scale="1.5"
        class="form__label__status__icon")
      icon(
        v-else
        name="check"
        scale="1.5"
        class="form__label__status__icon")
    transition(name="skid-left")
      span(
        v-show="showHiddenMessage.status"
        class="form__label__status__msg") {{configInput.hiddenMessage}}
    input(
      :ref="configInput.id"
      :id="configInput.titleInput"
      :type="configInput.typeInput"
      :value="reactiveDataInput"
      :class="{'form__input--active': activeInput}"
      class="form__input"
      @keyup="sendInput($event)"
      @blur="sendTouch()")

    hs-form-error(:errors="errorInput")
</template>

<script>
import hsFormError from '@/components/main/form/hsFormError'

import {hiddenMessage} from './mixins/formMixins'

export default {
  components: {
    hsFormError
  },

  props: [
    'configInput',
    'reactiveDataInput',
    'errorInput'
  ],

  mixins: [hiddenMessage],

  mounted () {
    this.$busForm.$on('hsFormInput_activeInput', (data) => {
      if (typeof (data.id) !== 'undefined' && typeof (data.state) !== 'undefined') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeInput = data.state
      } else if (typeof (data.state) !== 'undefined') this.activeInput = data.state
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsFormInput_activeInput')
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

      this.$busForm.$emit('hsFormHeadBoard_showMessage' + this.configInput.headBoard, false)
    },
    sendInput (data) {
      if (!this.stateTouch && data.code !== 'Tab') this.stateTouch = true

      let inputData = data.target.value

      if ((data.code === 'Tab') && !this.activeInput) this.activeInput = true

      this.$emit('inputData', inputData)
      this.$busForm.$emit('hsFormHeadBoard_showMessage' + this.configInput.headBoard, false)
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
