<template lang="pug">
  div(
    v-show="!configInput.hideInput"
    :class="{'form__box__body__group--free-height': reactiveDataInput, 'form__box__body__group--error': validateErrors}"
    class="form__box__body__group")

    label(
      :for="configInput.titleInput"
      :class="{'label--active': activeInput, 'label--error': validateErrors}"
      class="label"
      @click="stateInput()") {{configInput.titleInput}}
    span(
      class="label__status"
      @mousedown="enableHiddenMessage"
      @mouseup="disableHiddenMessage")
      icon(
        v-if="!successIcon"
        name="asterisk"
        scale="1.5"
        class="label__status__icon")
      icon(
        v-else
        name="check"
        scale="1.5"
        class="label__status__icon")
    transition(name="skid-left")
      span(
        v-show="showHiddenMessage.status"
        class="label__status__msg") {{configInput.hiddenMessage}}
    input(
      :ref="configInput.id"
      :id="configInput.titleInput"
      :type="configInput.typeInput"
      :value="reactiveDataInput"
      :class="{'input--active': activeInput}"
      class="input"
      @keyup="sendInput($event)"
      @blur="sendTouch()")

    hs-error(:errors="errorInput")
</template>

<script>
import hsError from '@/components/main/error/hsError'

import {hiddenMessage} from '../_mixins/formMixins'

export default {
  components: {
    hsError
  },

  props: [
    'configInput',
    'reactiveDataInput',
    'errorInput'
  ],

  mixins: [hiddenMessage],

  mounted () {
    this.$busForm.$on('hsInput_activeInput', (data) => {
      if (typeof (data.id) !== 'undefined' && typeof (data.state) !== 'undefined') {
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
