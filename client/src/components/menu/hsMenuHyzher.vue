<template lang="pug">
  div(class="hs-menu-hyzher")
    //- pre {{$data.selectedRank}}
    div(class="hs-menu-hyzher__head")
      div(class="hs-menu-hyzher__head__image")
        icon(
          name="user-secret"
          scale="5"
          class="hs-menu-hyzher__head__image__icon")
      div(class="hs-menu-hyzher__head__information")
        div(class="hs-menu-hyzher__head__information__fast-buttons")
          div(
            class="hs-menu-hyzher__head__information__fast-buttons__element"
            @click="logout")
            icon(
            name="sign-out"
            scale="1.5")
        div(class="hs-menu-hyzher__head__information__card")
          div(class="hs-menu-hyzher__head__information__card__hyzher") {{$store.state.hyzher.alias}}
          div(class="hs-menu-hyzher__head__information__card__rank") {{$store.state.hyzher.userRank.rank}}

        //- Elemento disponible, por default equivale a "cerrar sesion": {{lang.hsMenuHyzher.logout}}

    div(class="hs-menu-hyzher__pages")
      div(class="hs-menu-hyzher__pages__ranks")
        div(
          ref="rankButton"
          :id="rank + 'Button'"
          v-for="rank in getRanks"
          :class="{'hs-menu-hyzher__pages__ranks__rank--active': activeRank === rank}"
          class="hs-menu-hyzher__pages__ranks__rank"
          @click="chosenRank(rank)") {{rank | shortRank}}

      div(class="hs-menu-hyzher__boards")
        //- Elemento disponible, por default equivale a "Hyzher, Ryzher o Thryzher": {{selectedRank.rank}}
        transition-group(name="boards-transition" tag="span")
          div(
            ref="pageButton"
            :id="board.route + 'Button'"
            v-for="board in selectedRank.boards"
            :key="board.page"
            class="hs-menu-hyzher__boards__element"
            @click="sendBoard(board.route)")
            icon(
              :name="board.icon"
              scale="1.5")
</template>

<script>
import {components} from '../../../../lang/client'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  mixins: [components('Menu', 'hsMenuHyzher')],

  mounted () {
    this.$busForm.$on('hsMenuHyzher_clearActives', data => {
      if (data.ranks) this.clearActives(true, false)
      if (data.pages) this.clearActives(false, true)
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsMenuHyzher_clearActives')
  },

  created () {
    this.chosenRank('Hyzher')
  },

  data () {
    return {
      selectedRank: {},
      activeRank: 'Hyzher'
    }
  },

  filters: {
    shortRank (value) {
      return value.charAt(0) + '_' + value.charAt(2)
    }
  },

  computed: {
    getRanks () {
      return Object.keys(this.lang.hsMenuHyzher.ranks)
    }
  },

  methods: {
    chosenRank (selectedRank) {
      if (Array.isArray(this.lang.hsMenuHyzher.ranks[selectedRank])) {
        if (Object.keys(this.$refs).length) {
          this.$refs.rankButton.forEach(button => {
            if (button.id === `${selectedRank}Button`) {
              button.className = 'hs-menu-hyzher__pages__ranks__rank hs-menu-hyzher__pages__ranks__rank--active'
              this.clearActives(false, true)
            } else button.className = 'hs-menu-hyzher__pages__ranks__rank'
          })
        }

        this.selectedRank = {
          rank: selectedRank,
          boards: this.lang.hsMenuHyzher.ranks[selectedRank]
        }
      }
    },

    sendBoard (route) {
      this.$refs.pageButton.forEach(button => {
        if (button.id === `${route}Button`) {
          button.className = 'hs-menu-hyzher__boards__element hs-menu-hyzher__boards__element--active'
        } else button.className = 'hs-menu-hyzher__boards__element'
      })

      this.$router.push({name: route})

      this.$busForm.$emit('hsBoardMenu_pocket', false)
      this.$busForm.$emit('searchImage_imageChosen', {clear: true, data: null})
    },

    clearActives (ranks, pages) {
      if (ranks) {
        this.$refs.rankButton.forEach(button => {
          button.className = 'hs-menu-hyzher__pages__ranks__rank'
        })
      }

      if (pages) {
        this.$refs.pageButton.forEach(button => {
          button.className = 'hs-menu-hyzher__boards__element'
        })
      }
    },

    logout () {
      this.$store.dispatch('saveToken', null)
      this.$store.dispatch('saveHyzher', null)

      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="sass">
.boards-transition-enter-active
  transition: all 1000ms

.boards-transition-enter
  opacity: 0
  transform: rotateY(180deg)
</style>
