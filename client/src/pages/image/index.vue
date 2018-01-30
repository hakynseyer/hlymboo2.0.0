<template lang="pug">
  article(class="article--clean")
    hs-board-menu(
      :configBoardMenu="lang.hsBoardMenu.config"
      @sendActionBM="actionBoardMenu")

    transition(name="router-transition")
      router-view
</template>

<script>
import {boards} from '../../../../lang/client'

import hsBoardMenu from '@/components/main/board/hsBoardMenu'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsBoardMenu
  },

  mixins: [boards('image', 'hsBoardMenu')],

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$store.state.login) vm.$router.push({name: 'home'})

      if (to.name !== 'image') vm.$busForm.$emit('hsBoardMenu_pocket', true)
    })
  },

  data () {
    return {

    }
  },

  methods: {
    actionBoardMenu (element) {
      this.$router.push({name: `image${element}`})

      this.$busForm.$emit('hsBoardMenu_pocket', true)
    }
  }
}
</script>

<style lang="sass">
.router-transition-enter-active
  animation: router-transition 1000ms

@keyframes router-transition
  from
    opacity: 0
  to
    opacity: 1
</style>
