<template lang="pug">
  div(class="menu-hyzher")
    //- pre {{$data.selectedRank}}
    div(class="menu-hyzher__head")
      div(
        @click="logout"
        class="menu-hyzher__head__logout") {{lang.hsMenuHyzher.logout}}
      div(class="menu-hyzher__head__profile")
        span(class="menu-hyzher__head__profile__hyzher") {{$store.state.hyzher.alias}}
        icon(
          name="user-circle-o"
          scale="2"
          class="menu-hyzher__head__profile__icon")

    div(class="menu-hyzher__ranks")
      div(
        v-for="rank in getRanks"
        :class="{'menu-hyzher__ranks__rank--Hyzher-active': selectedRank.rank === 'Hyzher', 'menu-hyzher__ranks__rank--Ryzher-active': selectedRank.rank === 'Ryzher', 'menu-hyzher__ranks__rank--Thryzher-active': selectedRank.rank === 'Thryzher'}"
        class="menu-hyzher__ranks__rank"
        @click="chosenRank(rank)") {{rank | shortRank}}

    div(class="menu-hyzher__boards")
      span(class="menu-hyzher__boards__head") {{selectedRank.rank}}
      transition-group(name="boards-transition" tag="ul")
        div(
          v-for="board in selectedRank.boards"
          :key="board.page"
          class="menu-hyzher__boards__element"
          @click="sendBoard(board.route)")
          icon(
            :name="board.icon"
            scale="1.5"
            class="menu-hyzher__boards__element__icon")
</template>

<script>
import {components} from '../../../../lang/client'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  created () {
    this.chosenRank('Hyzher')
  },

  mixins: [components('Menu', 'hsMenuHyzher')],

  data () {
    return {
      selectedRank: {}
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
        this.selectedRank = {
          rank: selectedRank,
          boards: this.lang.hsMenuHyzher.ranks[selectedRank]
        }
      }
    },

    sendBoard (route) {
      this.$router.push({name: route})
      this.$busForm.$emit('hsBoardMenu_pocket', false)
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
