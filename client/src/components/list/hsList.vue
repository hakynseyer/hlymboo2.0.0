<template lang="pug">
  div(class="hs-list")
    div(class="hs-list__container")
      div(
        v-for="bodyRow in configList.dataList"
        class="hs-list__container__element"
        @click="sendList(bodyRow)")
        slot(name="labelCard" :data="bodyRow")
        slot(name="contentCard" :data="bodyRow")
</template>

<script>
export default {
  props: [
    'configList'
  ],

  methods: {
    sendList (data) {
      switch (this.configList.sendList.mode) {
        case 'normal':
          this.$emit(this.configList.sendList.nameEvent, data)
          break
        case 'globalEvent':
          this.$busForm.$emit(this.configList.sendList.nameEvent, {clear: false, data: data})
          break
        default:
          this.$emit(this.configList.sendList.nameEvent, data)
      }
    }
  }
}
</script>
