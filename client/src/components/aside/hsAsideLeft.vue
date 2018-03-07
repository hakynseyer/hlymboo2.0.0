<template lang="pug">
  aside
    div(class="hs-row hs-row__fixed-maria hs-row__fixed-maria--aside-left hs-row__maria")
      div(class="hs-col-aside-left")
        hs-menu-hyzher(v-if="$store.state.login")
</template>

<script>
import hsMenuHyzher from '@/components/menu/hsMenuHyzher'

export default {
  components: {
    hsMenuHyzher
  }
}
</script>

