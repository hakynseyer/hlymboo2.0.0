<template lang="pug">
  aside
    div(class="aside__left")
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

