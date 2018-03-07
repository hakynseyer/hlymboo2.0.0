<template lang="pug">
  div(class="hs-row hs-row__fixed-maria hs-row__fixed-maria--form-head hs-row__maria")
    div(class="hs-col-center-left-half")
      div(class="hs-frm__head")
        h2 {{configFormHead.title}}
        div(class="hs-frm__head__buttons")
          button(
            class="hs-btn--b-violet-L1 hs-btn--margin-right hs-btn--hb-red"
            type="button"
            @click="cleanerAction") {{configFormHead.buttons.cleaner}}
          transition(name="ready-transition")
            button(
              v-if="showButtonReady"
              class="hs-btn--b-violet-L1 hs-btn--margin-right hs-btn--hb-blue"
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

