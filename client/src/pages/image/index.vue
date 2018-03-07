<template lang="pug">
  div
    hs-board-menu(
      :hsBM="lang.hsBoardMenu"
      @sendActionBM="actionBoardMenu")

    transition(name="router-transition")
      router-view
</template>

<script>
import {boards} from '../../../../lang/client'
import {_hsMenuHyzherIndex} from '@/components/_support/_hsMenuHyzherIndex'

import hsBoardMenu from '@/components/board/hsBoardMenu'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsBoardMenu
  },

  mixins: [boards('image', 'hsBoardMenu'), _hsMenuHyzherIndex],

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
      console.log(element)

      switch (element) {
        case 'Search':
          this.$busForm.$emit('searchImage_imageChosen', {clear: true, data: null})
          break
      }

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
