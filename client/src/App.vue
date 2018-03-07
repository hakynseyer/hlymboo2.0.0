<template lang="pug">
  main
    hs-header-main
    hs-section
    //- hs-grid
</template>


<script>
import hsGrid from '@/components/grid/hsGrid'
import hsHeaderMain from '@/components/header/hsHeaderMain'

import hsSection from '@/components/section/hsSection'

export default {
  components: {
    hsHeaderMain,
    hsSection,
    hsGrid
  }
}
</script>

<style lang="sass">
  @import "./styles/__main.sass"
</style>

