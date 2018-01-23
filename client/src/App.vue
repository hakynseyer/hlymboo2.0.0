<template lang="pug">
  main
    hs-header-main
    hs-section
</template>


<script>
import hsHeaderMain from '@/components/main/header/hsHeaderMain'

import hsSection from '@/components/main/section/hsSection'

export default {
  components: {
    hsHeaderMain,
    hsSection
  }
}
</script>

<style lang="sass">
  @import "./styles/main/__main.sass"
</style>

