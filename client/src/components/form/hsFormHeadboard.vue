<template lang="pug">
  div(class="hs-frm__headboard")
    div(
      v-if="!configHeadboard.hideHelp"
      class="hs-frm__headboard__information"
      @click="showMessage = !showMessage")
      icon(
        name="info-circle"
        scale="2"
        class="hs-frm__headboard__information__icon")
    transition(name="information-transition")
      div(
        v-show="showMessage"
        class="hs-frm__headboard__information__message")
        span(
          v-for="msg in configHeadboard.message"
          class="hs-frm__headboard__information__message__list") {{msg}}
    div(
      v-text="configHeadboard.title"
      class="hs-frm__headboard__title")

    div(class="hs-frm__headboard__space-right")
      slot(name="hsHeadboardButton")
      button(
          type="button"
          class="hs-frm__headboard__space-right__button"
          @click="buttonAction")
            icon(
              :name="configHeadboard.buttonIcon"
              scale="1.5"
              class="hs-frm__headboard__space-right__button__icon")
</template>

<script>
export default {
  props: [
    'configHeadboard'
  ],

  mounted () {
    this.$busForm.$on('hsFormHeadboard_showMessage' + this.configHeadboard.title, value => {
      if (this.showMessage) this.showMessage = value
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsFormHeadboard_showMessage' + this.configHeadboard.title)
  },

  data () {
    return {
      showMessage: false
    }
  },

  methods: {
    buttonAction () {
      this.$emit('buttonAction', true)
    }
  }
}
</script>

<style lang="sass">
.information-transition-enter-active
  animation: show-head-board 500ms

.information-transition-leave-active
  animation: show-head-board 500ms reverse

@keyframes show-head-board
  from
    opacity: 0
  to
    opacity: 1
</style>
