<template lang="pug">
  div(class="hs-row hs-row__fixed-maria hs-row__fixed-maria--small-modal hs-row__maria")
    div(class="hs-col-small-modal")
      transition(name="smallModal-transition")
        div(
          v-show="showModal"
          :ref="configSmallModal.id"
          :class="{'hs-small_modal--normal': typeModal === 'normal', 'hs-small_modal--error': typeModal === 'error', 'hs-small_modal--success': typeModal === 'success'}"
          class="hs-small_modal")
          div(class="hs-small_modal__title") {{configSmallModal.title}}
          div(
            v-html="configSmallModal.body"
            class="hs-small_modal__body")
</template>

<script>
export default {
  props: [
    'configSmallModal'
  ],

  mounted () {
    this.$busForm.$on('hsSmallModal_showModal', data => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') {
          this.showModal = data.state
          this.runTimer()
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsSmallModal_showModal')
  },

  computed: {
    typeModal () {
      return this.configSmallModal.type
    }
  },

  data () {
    return {
      showModal: false,
      timer: {
        time: null,
        countdown: null
      }
    }
  },

  methods: {
    closeModal () {
      clearInterval(this.timer.countdown)
      this.showModal = false
    },

    runTimer () {
      this.timer.time = this.configSmallModal.timer.time

      this.timer.countdown = setInterval(() => {
        this.timer.time--
        if (this.timer.time === 0) this.closeModal()
      }, 1000)
    }
  }
}
</script>

<style lang="sass">
  .smallModal-transition-enter-active
    animation: smallModal-enter-transition 750ms
  .smallModal-transition-leave-active
    animation: smallModal-leave-transition 750ms

  @keyframes smallModal-enter-transition
    from
      transform: translateX(-100%)
    to
      transform: translateX(0)

  @keyframes smallModal-leave-transition
    from
      transform: translateY(0)
    to
      transform: translateY(100%)
</style>
