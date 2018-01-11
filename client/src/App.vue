<template lang="pug">
  main
    hs-header(:links="Components.hsHeader.links")
    hs-section
</template>


<script>
import hsHeader from '@/components/main/header/hsHeader'
import hsSection from '@/components/main/section/hsSection'

import {app} from '../../lang/client'

export default {
  components: {
    hsHeader,
    hsSection
  },
  mixins: [app],
  data () {
    return {
      Components: {
        hsHeader: {
          links: {
            logoutLinks: [],
            loginLinks: [],
            mainLink: {name: 'Hlymboo', page: 'home'}
          }
        }
      }
    }
  }
}
</script>

<style lang="sass">
  @import "./styles/main/__main.sass"
</style>

