<template lang="pug">
  div(class="mother")
    hs-aside-left
    section
      router-view
    hs-aside-right
</template>

<script>
import hsAsideRight from '@/components/main/aside/hsAsideRight'
import hsAsideLeft from '@/components/main/aside/hsAsideLeft'

export default {
  components: {
    hsAsideRight,
    hsAsideLeft
  }
}
</script>
