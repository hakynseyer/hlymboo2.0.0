<template lang="pug">
  div(
    :class="{'form__box__body__group--free-height': reactiveDataTextarea || activeTextarea, 'form__box__body__group--error': validateErrors}"
    class="form__box__body__group")

    label(
      :for="configTextarea.titleTextarea"
      :class="{'label--active': activeTextarea, 'label--error': validateErrors}"
      class="label"
      @click="stateTextarea()") {{configTextarea.titleTextarea}}

    hidden-message-inputs(
      :refMessage="configTextarea.id"
      :hiddenMessage="configTextarea.hiddenMessage")

    div(
      v-if="configTextarea.readOnly"
      :ref="configTextarea.id"
      :id="configTextarea.titleTextarea"
      :class="{'textarea--active': activeTextarea}"
      class="textarea") {{reactiveDataTextarea}}

    textarea(
      v-else
      :ref="configTextarea.id"
      :id="configTextarea.titleTextarea"
      :value="reactiveDataTextarea"
      :class="{'textarea--active': activeTextarea}"
      class="textarea"
      @keyup="sendTextarea($event)"
      @blur="sendTouch()")

    hs-error(:errors="errorTextarea")
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
    'configTextarea',
    'reactiveDataTextarea',
    'errorTextarea'
  ],

  mounted () {
    this.$busForm.$on('hsTextarea_activeTextarea', (data) => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeTextarea = data.state
      } else if (typeof (data.state) !== 'undefined') this.activeTextarea = data.state
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsTextarea_activeTextarea')
  },

  data () {
    return {
      activeTextarea: false,
      stateTouch: false
    }
  },

  computed: {
    validateErrors () {
      let res = false

      if (this.errorTextarea) {
        if (this.errorTextarea.length) {
          if (!this.activeTextarea) this.activeTextarea = true
          res = true
        }
      }

      return res
    }
  },

  methods: {
    stateTextarea () {
      if (this.reactiveDataTextarea === null && !this.activeTextarea) this.activeTextarea = true

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configTextarea.headboard, false)
    },

    sendTextarea (data) {
      if (!this.stateTouch && data.code !== 'Tab') this.stateTouch = true

      let textareaData = data.target.value

      if ((data.code === 'Tab') && !this.activeTextarea) this.activeTextarea = true

      this.$emit('textareaData', textareaData)
      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configTextarea.headboard, false)
    },

    sendTouch () {
      if (this.stateTouch) {
        if (this.reactiveDataTextarea === null || this.reactiveDataTextarea.length <= 0) this.activeTextarea = false
        this.$emit('textareaTouch', true)
        this.stateTouch = false
      }
    }
  }
}
</script>

