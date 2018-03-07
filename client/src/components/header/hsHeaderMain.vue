<template lang="pug">
  header(class="hs-row hs-row__header")
    div(class="hs-col")
      hs-header-left
    div(class="hs-col")
      div(class="hs-hdr__middle")
        div(class="hs-hdr__middle__text") loremId Lorem sunt commodo deserunt amet ad. Ea ipsum eiusmod officia cupidatat officia labore est sint occaecat velit anim eu ea ea. Reprehenderit cillum anim sunt nostrud pariatur dolore commodo mollit nostrud qui enim.
    div(class="hs-col")
      hs-header-right
</template>

<script>
import hsHeaderLeft from '@/components/header/hsHeaderLeft'
import hsHeaderRight from '@/components/header/hsHeaderRight'

export default {
  components: {
    hsHeaderLeft,
    hsHeaderRight
  }
}
</script>
