<template lang="pug">
  div(class="form__head")
    h2(class="form__head__title") {{configFormHead.title}}
    div(class="form__head__buttons")
      button(
        class="button__lighten-color--gray button__hover-darken-color--red button--margin-right"
        type="button"
        @click="cleanerAction") {{configFormHead.buttons.cleaner}}
      transition(name="move-right")
        button(
          v-if="showButtonReady"
          class="button__lighten-color--gray button__hover-darken-color--blue"
          type="button"
          :disabled="disabledButtonReady"
          @click="readyAction")
          span(v-if="!disabledButtonReady") {{configFormHead.buttons.ready}}
          icon(
              v-else
              name="cog"
              scale="1.5"
              spin)
</template>

<script>
export default {
  props: [
    'configFormHead'
  ],

  mounted () {
    this.$busForm.$on('hsFormHead_showButtonReady', value => {
      if (typeof (value) === 'boolean') this.showButtonReady = value
    })

    this.$busForm.$on('hsFormHead_disabledButtonReady', value => {
      if (typeof (value) === 'boolean') this.disabledButtonReady = value
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsFormHead_showButtonReady')
    this.$busForm.$off('hsFormHead_disabledButtonReady')
  },

  data () {
    return {
      showButtonReady: false,
      disabledButtonReady: false
    }
  },

  methods: {
    cleanerAction () {
      this.$emit('cleanerAction', true)
    },
    readyAction () {
      this.$emit('readyAction', true)
    }
  }
}
</script>

