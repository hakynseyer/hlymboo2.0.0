<template lang="pug">
  div(class="menu-hyzher")
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
        v-if="checkRank('Hyzher')"
        :class="{'menu-hyzher__ranks__rank--Hyzher-active': selectedRank.rank === 'Hyzher'}"
        class="menu-hyzher__ranks__rank"
        @click="chosenRank('Hyzher')") {{'Hyzher' | shortRank}}

      div(
        v-if="checkRank('Ryzher')"
        :class="{'menu-hyzher__ranks__rank--Ryzher-active': selectedRank.rank === 'Ryzher'}"
        class="menu-hyzher__ranks__rank"
        @click="chosenRank('Ryzher')") {{'Ryzher' | shortRank}}

      div(
        v-if="checkRank('Thryzher')"
        :class="{'menu-hyzher__ranks__rank--Thryzher-active': selectedRank.rank === 'Thryzher'}"
        class="menu-hyzher__ranks__rank"
        @click="chosenRank('Thryzher')") {{'Thryzher' | shortRank}}

    div(class="menu-hyzher__boards")
      span(class="menu-hyzher__boards__head") {{selectedRank.rank}}
      transition-group(name="boards-transition" tag="ul")
        router-link(
          v-for="board in selectedRank.boards"
          :key="board.page"
          :to="{name: board.route}"
          class="menu-hyzher__boards__element")
          icon(
            :name="board.icon"
            scale="1.5"
            class="menu-hyzher__boards__element__icon")
</template>

<script>
import {components} from '../../../../../lang/client'

export default {
  created () {
    this.chosenRank('Hyzher')
  },

  mixins: [components('hsMenuHyzher')],

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

  methods: {
    checkRank (checkRank) {
      let res = false

      for (var rank of this.lang.hsMenuHyzher.ranks) {
        if (rank.rank === checkRank) {
          res = true
          break
        }
      }

      return res
    },

    chosenRank (selectedRank) {
      this.selectedRank = {}
      for (var rank of this.lang.hsMenuHyzher.ranks) {
        if (rank.rank === selectedRank) {
          this.selectedRank = rank
        }
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
