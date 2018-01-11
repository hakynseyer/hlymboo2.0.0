<template lang="pug">
  transition(name="skid-transition")
    div(
      v-if="showError"
      :class="{'form__error--simple': simple}"
      class="form__error")
      template(v-if="simple")
        span(
          v-html="errors"
          class="form__error__message")
      template(v-else)
        span(
          v-for="err in errors"
          v-html="err"
          class="form__error__message")
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
.skid-transition-enter-active
  animation: skid-transition 500ms

.skid-transition-leave-active
  animation: skid-transition 500ms reverse

@keyframes skid-transition
  from
    transform: translateX(-100%)
  to
    transform: translateX(0%)
</style>
