<template lang="pug">
  div(class="search")
    pre {{$data}}
    hs-list-image
</template>

<script>
import hsListImage from '@/components/list/hsListImage'

export default {
  components: {
    hsListImage
  },

  mounted () {
    this.$busForm.$on('searchImage_imageChosen', data => {
      if (typeof (data) === 'object') {
        if (!data.clear) this.imageChosen = data.data
        else this.imageChosen = {}
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('searchImage_imageChosen')
  },

  data () {
    return {
      imageChosen: {}
    }
  }
}
</script>

