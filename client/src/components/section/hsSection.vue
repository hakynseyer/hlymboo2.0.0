<template lang="pug">
  div(class="mother")
    hs-aside-left
    section
      router-view
    hs-aside-right
</template>

<script>
import hsAsideRight from '@/components/aside/hsAsideRight'
import hsAsideLeft from '@/components/aside/hsAsideLeft'

export default {
  components: {
    hsAsideRight,
    hsAsideLeft
  }
}
</script>
