<template lang="pug">
  div(:ref="refMessage")
    span(
      class="hs-label__status"
      @mousedown="enableHiddenMessage"
      @mouseup="disableHiddenMessage")
      icon(
        v-if="!successIcon"
        name="asterisk"
        scale="1.5"
        class="hs-label__status__icon-error")
      icon(
        v-else
        name="check"
        scale="1.5"
        class="hs-label__status__icon-success")
    transition(name="hiddenMessage-transition")
      span(
        v-show="showHiddenMessage.status"
        class="hs-label__status__msg") {{hiddenMessage}}
</template>

<script>
export default {
  props: [
    'refMessage',
    'hiddenMessage'
  ],

  mounted () {
    this.$busForm.$on('formMixins_successIcon', (data) => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.successIcon = data.state
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('formMixins_successIcon')
  },

  data () {
    return {
      successIcon: false,
      showHiddenMessage: {
        status: false,
        timer: null
      }
    }
  },

  methods: {
    enableHiddenMessage () {
      this.showHiddenMessage.timer = setTimeout(() => {
        this.showHiddenMessage.status = true
      }, 500)
    },
    disableHiddenMessage () {
      if (this.showHiddenMessage.status) this.showHiddenMessage.status = false
      clearTimeout(this.showHiddenMessage.timer)
    }
  }
}
</script>

<style lang="sass">
.hiddenMessage-transition-enter-active
  animation: hiddenMessage-transition-transition 750ms

.hiddenMessage-transition-leave-active
  animation: hiddenMessage-transition-transition 750ms reverse

@keyframes hiddenMessage-transition-transition
  0%
    transform: translateX(-100%)
  50%
    transform: translateX(51%)
  100%
    transform: translateX(0)
</style>
