<template lang="pug">
  div(class="form__head-board")
    div(
      v-if="!configHeadboard.hideHelp"
      @click="showMessage = !showMessage"
      class="form__head-board__help")
      icon(
        name="info-circle"
        scale="2"
        class="form__head-board__help__icon")
    transition(name="show-head-board")
      div(
        v-show="showMessage"
        class="form__head-board__help__message")
        span(
          v-for="msg in configHeadboard.message"
          class="form__head-board__help__message__list") {{msg}}
    div(
      v-text="configHeadboard.title"
      class="form__head-board__title")

    div(class="form__head-board__space-right")
      slot(name="hsHeadboardButton")
      button(
          type="button"
          class="form__head-board__space-right__button"
          @click="buttonAction")
            icon(
              :name="configHeadboard.buttonIcon"
              scale="1.5"
              class="form__head-board__space-right__button__icon")
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
.show-head-board-enter-active
  animation: show-head-board 500ms

.show-head-board-leave-active
  animation: show-head-board 500ms reverse

@keyframes show-head-board
  from
    opacity: 0
  to
    opacity: 1
</style>
