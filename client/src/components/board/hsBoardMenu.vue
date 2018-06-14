<template lang="pug">
  div(class="hs-board-menu")
    div(class="hs-row hs-row__fixed-maria hs-row__fixed-maria--board-menu hs-row__maria")
      div(class="hs-col-center-right-three")
        transition(name="pocket-transition")
          div(
            v-if="pocket"
            class="hs-board-menu__pocket")

            div(class="hs-board-menu__pocket__elements")
              div(
                v-for="element in hsBM"
                :key="element.config.key"
                class="hs-board-menu__pocket__elements__element"
                @click="sendActionBM(element.config.key)")
                icon(
                  :name="element.config.icon"
                  class="hs-board-menu__pocket__elements__element__icon")

            transition(name="pocketInformation-transition")
              div(
                v-show="pocketInformation.state"
                class="hs-board-menu__pocket__information")
                div(class="hs-board-menu__pocket__information__title") {{pocketInformation.data.title | cutTitle}}
                div(class="hs-board-menu__pocket__information__dates")
                  div(class="hs-board-menu__pocket__information__dates__group")
                    div(class="hs-board-menu__pocket__information__dates__group__title") {{lang.hsBoardMenu.pocketInformation.created}}
                    div(class="hs-board-menu__pocket__information__dates__group__date") {{pocketInformation.data.created | fixDate}}
                  div(class="hs-board-menu__pocket__information__dates__group")
                    div(class="hs-board-menu__pocket__information__dates__group__title") {{lang.hsBoardMenu.pocketInformation.updated}}
                    div(class="hs-board-menu__pocket__information__dates__group__date") {{pocketInformation.data.updated | fixDate}}

            transition(name="modifiers-transition")
              div(
                v-show="pocketInformation.state"
                class="hs-board-menu__pocket__modifiers")
                  div(
                    v-for="modifier in modifiersButtons"
                    class="hs-board-menu__pocket__modifiers__element"
                    @click="sendActionBM(modifier.key)")
                    icon(
                      :name="modifier.icon"
                      class="hs-board-menu__pocket__modifiers__element__icon")

    transition(name="main-transition")
      div(
        v-if="!pocket"
        class="hs-board-menu__main")

        div(
          v-for="element in hsBM"
          :key="element.config.key"
          :class="{'hs-board-menu__main__element--hover-move': checkChildren(element.config)}"
          class="hs-board-menu__main__element"
          @click="sendActionBM(element.config.key)")
          icon(
            :name="element.config.icon"
            class="hs-board-menu__main__element__icon")
          div(class="hs-board-menu__main__element__text")
            div(class="hs-board-menu__main__element__text__title") {{element.config.text.title}}
            div(
              v-if="checkChildren(element.config)"
              class="hs-board-menu__main__element__text__children")
              div(class="hs-board-menu__main__element__text__children__circle")
                div(
                  v-text="children(element.config)"
                  class="hs-board-menu__main__element__text__children__circle__number")
            div(class="hs-board-menu__main__element__text__description") {{element.config.text.description}}


</template>

<script>
import {components} from '../../../../lang/client'

import {_text, _date} from '@/pages/tools/customizedTools'

export default {
  props: [
    'hsBM'
  ],

  mixins: [components('Board', 'hsBoardMenu')],

  mounted () {
    this.$busForm.$on('hsBoardMenu_pocket', value => {
      if (typeof (value) === 'boolean') this.pocket = value
    })

    this.$busForm.$on('hsBoardMenu_pocketInformation', data => {
      if (typeof (data) === 'object') {
        if (typeof (data.clear) === 'boolean') {
          if (data.clear) {
            this.pocketInformation.data.title = null
            this.pocketInformation.data.created = null
            this.pocketInformation.data.updated = null

            this.pocketInformation.state = false
          }
        }
        if (typeof (data.title) === 'string') {
          this.pocketInformation.data.title = data.title
          this.pocketInformation.data.created = data.created
          this.pocketInformation.data.updated = data.updated

          this.pocketInformation.state = true
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsBoardMenu_pocket')
    this.$busForm.$off('hsBoardMenu_pocketInformation')
  },

  data () {
    return {
      pocket: false,
      pocketInformation: {
        state: false,
        data: {
          title: null,
          created: null,
          updated: null
        }
      }
    }
  },

  filters: {
    cutTitle (value) {
      if (value !== null) return _text.cutText(value, 20)
    },

    fixDate (value) {
      return _date.fixDate()(value, 'mediumDate')
    }
  },

  computed: {
    modifiersButtons () {
      let modifiersButtons = []

      Object.keys(this.hsBM).forEach(menu => {
        if (this.hsBM[menu].config.children) {
          this.hsBM[menu].config.children.forEach(modifier => {
            modifiersButtons.push(modifier)
          })
        }
      })

      return modifiersButtons
    }
  },

  methods: {
    checkChildren (element) {
      let res = false

      if (typeof (element.children) === 'object' && element.children.length) res = true

      return res
    },

    children (element) {
      if (typeof (element.children) === 'object') return element.children.length
    },

    sendActionBM (element) {
      this.$emit('sendActionBM', element)
    }
  }
}
</script>

<style lang="sass">
.pocket-transition-enter-active
  animation: pocket-transition 500ms

@keyframes pocket-transition
  from
    transform: translateY(-100%)
  to
    transform: translateY(0%)

.main-transition-enter-active
  animation: main-transition 1000ms

@keyframes main-transition
  from
    opacity: 0
  to
    opacity: 1

.pocketInformation-transition-enter-active
  animation: pocketInformation-transition 500ms

.pocketInformation-transition-leave-active
  animation: pocketInformation-transition 500ms reverse

@keyframes pocketInformation-transition
  from
    opacity: 0
  to
    opacity: 1

.modifiers-transition-enter-active
  animation: modifiers-transition 500ms

.modifiers-transition-leave-active
  animation: modifiers-transition 500ms reverse

@keyframes modifiers-transition
  from
    opacity: 0
  to
    opacity: 1

.modifier-transition-enter-active
  transition: all 1000ms

.modifier-transition-enter
  opacity: 0
  transform: rotateY(180deg)
</style>
