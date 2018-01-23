<template lang="pug">
  header
    hs-header-left
    div(class="header__main")
      div(class="header__main__text") loremId Lorem sunt commodo deserunt amet ad. Ea ipsum eiusmod officia cupidatat officia labore est sint occaecat velit anim eu ea ea. Reprehenderit cillum anim sunt nostrud pariatur dolore commodo mollit nostrud qui enim.
    hs-header-right
</template>

<script>
import hsHeaderLeft from '@/components/main/header/hsHeaderLeft'
import hsHeaderRight from '@/components/main/header/hsHeaderRight'

export default {
  components: {
    hsHeaderLeft,
    hsHeaderRight
  }
}
</script>
