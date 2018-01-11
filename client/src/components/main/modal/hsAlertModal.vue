<template lang="pug">
  hsModal(:configModal="configModal")
    template(
      v-if="configAlertModal.type === 'centered'"
      slot="modalBody")
      div(
        v-if="configAlertModal.body"
        class="modal__body__alert")
        h2(class="modal__body__alert__head") {{configAlertModal.body.head}}
        div(
          v-html="configAlertModal.body.body"
          class="modal__body__alert__body")
        div(
          v-html="configAlertModal.body.footer"
          class="modal__body__alert__footer")
</template>

<script>
import hsModal from '@/components/main/modal/hsModal'

export default {
  components: {
    hsModal
  },
  props: [
    'configModal',
    'configAlertModal'
  ]
}
</script>
