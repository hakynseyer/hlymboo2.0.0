<template lang="pug">
  main
    hs-header-main
    hs-section
</template>


<script>
import hsHeaderMain from '@/components/header/hsHeaderMain'

import hsSection from '@/components/section/hsSection'

export default {
  components: {
    hsHeaderMain,
    hsSection
  }
}
</script>

<style lang="sass">
  @import "./styles/__main.sass"
</style>

