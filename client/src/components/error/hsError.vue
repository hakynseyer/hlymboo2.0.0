<template lang="pug">
  transition(name="error-transition")
    div(
      v-if="showError"
      :class="{'hs-error--simple': simple}"
      class="hs-error")
      template(v-if="simple")
        span(
          v-html="errors"
          class="hs-error__message")
      template(v-else)
        span(
          v-for="err in errors"
          v-html="err"
          class="hs-error__message")
</template>

<script>
export default {
  props: [
    'simple',
    'errors'
  ],
  computed: {
    showError () {
      let show = false

      if (this.errors) {
        if (this.errors.length) show = true
      }

      return show
    }
  }
}
</script>

<style lang="sass">
.error-transition-enter-active
  animation: error-transition 500ms

.error-transition-leave-active
  animation: error-transition 500ms reverse

@keyframes error-transition
  from
    transform: translateX(-100%)
  to
    transform: translateX(0%)
</style>
