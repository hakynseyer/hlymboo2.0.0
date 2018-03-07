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

            //- div(class="hs-board-menu__pocket__information")
            //-   div(class="hs-board-menu__pocket__information__title") Nueva Imagen DE USUARIO AQUI MISMOsasdasdas sdad
            //-   div(class="hs-board-menu__pocket__information__dates")
            //-     div(class="hs-board-menu__pocket__information__dates__group")
            //-       div(class="hs-board-menu__pocket__information__dates__group__title") Cambio
            //-       div(class="hs-board-menu__pocket__information__dates__group__date") 20 Abril 2010
            //-     div(class="hs-board-menu__pocket__information__dates__group")
            //-       div(class="hs-board-menu__pocket__information__dates__group__title") Cambio
            //-       div(class="hs-board-menu__pocket__information__dates__group__date") 20 Abril 2010


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
import {_text} from '@/pages/tools/customizedTools'

export default {
  props: [
    'hsBM'
  ],

  mounted () {
    this.$busForm.$on('hsBoardMenu_pocket', value => {
      if (typeof (value) === 'boolean') this.pocket = value
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsBoardMenu_pocket')
  },

  data () {
    return {
      pocket: false

    }
  },

  filters: {
    cutTitle (value) {
      return _text.cutText(value, 20)
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
</style>
