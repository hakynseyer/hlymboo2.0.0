<template lang="pug">
  div(class="form__head-board")
    div(
      v-if="!hideHelp"
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
          v-for="msg in message"
          class="form__head-board__help__message__list") {{msg}}
    div(
      v-text="title"
      class="form__head-board__title")

    div(class="form__head-board__space-right")
      slot(name="hsHeadboardButton")
</template>

<script>
export default {
  props: [
    'hideHelp',
    'message',
    'title'
  ],
  mounted () {
    this.$busForm.$on('hsFormHeadBoard_showMessage' + this.title, value => {
      if (this.showMessage) this.showMessage = value
    })
  },
  beforeDestroy () {
    this.$busForm.$off('hsFormHeadBoard_showMessage' + this.title)
  },
  data () {
    return {
      showMessage: false
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
