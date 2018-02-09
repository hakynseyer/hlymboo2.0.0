<template lang="pug">
  div(class="board-menu")
    transition(name="pocket-transition")
      div(
        v-if="pocket"
        class="board-menu__pocket")

        //- div(class="board-menu__pocket__information")
        //-   div(class="board-menu__pocket__information__dates")
        //-     div(class="board-menu__pocket__information__dates__title") Fecha Creacion
        //-     div(class="board-menu__pocket__information__dates__date") 20 Abril 2010
        //-   div(class="board-menu__pocket__information__title") Nueva Imagen DE USUARIO AQUI MISMOsasdasdas sdad
        //-   div(class="board-menu__pocket__information__dates")
        //-     div(class="board-menu__pocket__information__dates__title") Fecha Actualizacion
        //-     div(class="board-menu__pocket__information__dates__date") 20 Abril 2010

        div(class="board-menu__pocket__elements")
          div(
            v-for="element in hsBM"
            :key="element.config.key"
            class="board-menu__pocket__elements__element"
            @click="sendActionBM(element.config.key)")
            icon(
              :name="element.config.icon"
              class="board-menu__pocket__elements__element__icon")

    transition(name="main-transition")
      div(
        v-if="!pocket"
        class="board-menu__main")

        div(
          v-for="element in hsBM"
          :key="element.config.key"
          :class="{'board-menu__main__element--hover-move': checkChildren(element.config)}"
          class="board-menu__main__element"
          @click="sendActionBM(element.config.key)")
          icon(
            :name="element.config.icon"
            class="board-menu__main__element__icon")
          div(class="board-menu__main__element__text")
            div(class="board-menu__main__element__text__title") {{element.config.text.title}}
            div(
              v-if="checkChildren(element.config)"
              class="board-menu__main__element__text__children")
              div(class="board-menu__main__element__text__children__circle")
                div(
                  v-text="children(element.config)"
                  class="board-menu__main__element__text__children__circle__number")
            div(class="board-menu__main__element__text__description") {{element.config.text.description}}


</template>

<script>
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
  animation: pocket-transition 1000ms

@keyframes pocket-transition
  from
    transform: translateX(200%)
  to
    transform: translateX(0%)

.main-transition-enter-active
  animation: main-transition 1000ms

@keyframes main-transition
  from
    opacity: 0
  to
    opacity: 1
</style>
