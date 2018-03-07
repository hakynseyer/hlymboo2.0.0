<template lang="pug">
  hsModal(:configModal="configModal")
    template(
      v-if="configAlertModal.type"
      slot="modalBody")
      div(
        v-if="configAlertModal.body"
        :class="{'hs-modal__body__alert--normal': typeModal === 'normal', 'hs-modal__body__alert--error': typeModal === 'error', 'hs-modal__body__alert--success': typeModal === 'success'}"
        class="hs-modal__body__alert")
        h2(class="hs-modal__body__alert__head") {{configAlertModal.body.head}}
        div(
          v-html="configAlertModal.body.body"
          class="hs-modal__body__alert__body")
        div(
          v-html="configAlertModal.body.footer"
          class="hs-modal__body__alert__footer")
</template>

<script>
import hsModal from '@/components/modal/hsModal'

export default {
  components: {
    hsModal
  },

  props: [
    'configModal',
    'configAlertModal'
  ],

  computed: {
    typeModal () {
      return this.configAlertModal.type
    }
  }
}
</script>
