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
        if (!data.clear) {
          this.imageChosen = data.data

          this.$busForm.$emit('hsBoardMenu_pocketInformation', {
            title: data.data.title,
            created: data.data.createdAt,
            updated: data.data.updatedAt
          })
        } else {
          this.imageChosen = {}

          this.$busForm.$emit('hsBoardMenu_pocketInformation', {clear: true})
        }
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

