<template lang="pug">
  div(class="hs-maria")
    div(class="hs-row hs-row--no-padding hs-row__maria")
      div(class="hs-col")
        hs-aside-left
      div(class="hs-col")
        section
          router-view
      div(class="hs-col")
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
