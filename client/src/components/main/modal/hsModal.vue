<template lang="pug">
  transition(:name="configModal.transition")
    div(
      v-show="showModal"
      class="modal")
      div(
        v-if="!configModal.disableExit"
        class="modal__exit"
        @click="closeModal")
        icon(
          name="times-circle"
          scale="3"
          class="modal__exit__icon")
      div(
        :class="{'modal__head--center': configModal.head.headAlign === 'center'}"
        class="modal__head modal__head--color-white")
        div(
          v-if="configModal.head.title"
          class="modal__head__titles")
          h2(class="modal__head__titles__main") {{configModal.head.title}}
          h3(
            v-show="configModal.head.subtitle"
            class="modal__head__titles__secondary") {{configModal.head.subtitle}}
      div(class="modal__body")
        slot(name="modalBody")
        div(
          v-if="configModal.timer.time"
          class="modal__body__timer")
          span(v-if="!configModal.timer.redirect") {{fixMsgRedirectDefault}}
          span(v-else) {{timer.msgRedirect}}
</template>

<script>
import {components} from '../../../../../lang/client'

export default {
  props: [
    'configModal'
  ],

  mixins: [components('hsModal')],

  mounted () {
    this.$busForm.$on('hsModal_showModal', value => {
      if (typeof (value) === 'boolean') this.showModal = value

      if (this.configModal.timer.time) this.runTimer()
    })
  },
  beforeDestroy () {
    this.$busForm.$off('hsModal_showModal')
  },

  data () {
    return {
      showModal: false,
      timer: {
        time: null,
        msgRedirect: null,
        countdown: null
      }
    }
  },

  watch: {
    showModal: function (value) {
      if (value) document.body.style.overflow = 'hidden'
    }
  },

  computed: {
    fixMsgRedirectDefault () {
      return this.lang.hsModal.msgRedirectDefault.replace('#####', this.timer.time)
    }
  },

  methods: {
    closeModal () {
      clearInterval(this.timer.countdown)
      this.showModal = false
      document.body.style.overflowY = 'visible'
    },
    updateMsgRedirect () {
      if (typeof (this.configModal.timer.redirect) !== 'undefined') {
        this.timer.msgRedirect = this.lang.hsModal.msgRedirectCustomized.replace('#####', this.configModal.timer.redirect.name).replace('?????', this.timer.time)
      }
    },
    runTimer () {
      this.timer.time = this.configModal.timer.time

      this.updateMsgRedirect()

      this.timer.countdown = setInterval(() => {
        this.timer.time--

        this.updateMsgRedirect()

        if (this.timer.time === 0) {
          clearInterval(this.timer.countdown)

          if (typeof (this.configModal.timer.redirect) !== 'undefined') this.$router.push({name: this.configModal.timer.redirect.route})

          this.closeModal()
        }
      }, 1000)
    }
  }
}
</script>

<style lang="sass">
  .hsModal_Center-enter-active
    animation: hsModal_Center-transition 750ms
  .hsModal_Center-leave-active
    animation: hsModal_Center-transition 750ms reverse

  @keyframes hsModal_Center-transition
    from
      transform: scale(0)
    to
      transform: scale(1)

  .hsModal_Left-enter-active
    animation: hsModal_Left-transition 750ms
  .hsModal_Left-leave-active
    animation: hsModal_Left-transition 750ms reverse

  @keyframes hsModal_Left-transition
    from
      transform: translateX(-100%)
    to
      transform: translateX(0)
</style>
