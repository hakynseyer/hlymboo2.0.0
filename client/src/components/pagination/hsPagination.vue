<template lang="pug">
  div(class="hs-pagination")
    div(class="hs-pagination__information")
      div(class="hs-pagination__information__text") {{configPagination.information.label}}
      div(class="hs-pagination__information__text") {{configPagination.information.total}}

    div(class="hs-pagination__buttons")
      div(class="hs-pagination__buttons__start")
        button(
          type="button"
          value="1"
          class="hs-pagination__buttons__start__origin-button"
          @click="sendPage($event)") {{lang.hsPagination.buttonStart}}
        button(
          type="button"
          class="hs-pagination__buttons__start__before-button"
          @click="decrease()")
            icon(
              name="caret-left"
              scale="1.5")

      div(
        v-show="showPages"
        class="hs-pagination__buttons__middle")
        button(
          :ref="configPagination.id"
          v-for="page in makingButtons"
          type="button"
          :value="page"
          class="hs-pagination__buttons__middle__central-button"
          @click="sendPage($event)") {{page}}

      div(class="hs-pagination__buttons__end")
        button(
          type="button"
          class="hs-pagination__buttons__end__after-button"
          @click="increase()")
            icon(
              name="caret-right"
              scale="1.5")
        button(
          type="button"
          :value="configPagination.buttons.pages"
          class="hs-pagination__buttons__end__final-button"
          @click="sendPage($event)") {{lang.hsPagination.buttonFinal}}
</template>

<script>
import {components} from '../../../../lang/client'

export default {
  props: [
    'configPagination'
  ],

  mixins: [components('Pagination', 'hsPagination')],

  data () {
    return {
      currentPage: 1,
      chainButtons: [],
      showPages: true
    }
  },

  watch: {
    chainButtons (data) {
      this.$refs[this.configPagination.id].forEach(button => {
        if (parseInt(button.value) === this.currentPage) {
          button.className = 'hs-pagination__buttons__middle__central-button hs-pagination__buttons__middle__central-button--active'
        } else button.className = 'hs-pagination__buttons__middle__central-button'
      })
    }
  },

  computed: {
    makingButtons () {
      if (this.configPagination.buttons.buttons > this.configPagination.buttons.pages) {
        this.showPages = false
      } else if ((this.configPagination.buttons.currentPage - 1) <= (this.configPagination.buttons.pages - this.configPagination.buttons.buttons)) {
        this.showPages = true
        this.chainButtons = []
        for (let i = 1; i <= this.configPagination.buttons.pages; i++) this.chainButtons.push(i)

        let startButton = this.chainButtons.indexOf(this.configPagination.buttons.currentPage)
        let endButton = this.configPagination.buttons.buttons + startButton

        if (endButton <= this.configPagination.buttons.pages) {
          this.chainButtons = this.chainButtons.slice(startButton, endButton)
        }
      } else if (this.configPagination.buttons.currentPage <= this.configPagination.buttons.pages) {
        this.chainButtons = []

        for (let i = 1; i <= this.configPagination.buttons.pages; i++) this.chainButtons.push(i)

        let endButton = this.configPagination.buttons.pages + 1
        let startButton = this.configPagination.buttons.pages - this.configPagination.buttons.buttons

        this.chainButtons = this.chainButtons.slice(startButton, endButton)
      }

      return this.chainButtons
    }
  },

  methods: {
    decrease () {
      if (this.currentPage > 1) this.currentPage--

      this.$emit('currentPage', this.currentPage)
    },

    increase () {
      if (this.currentPage < this.configPagination.buttons.pages) this.currentPage++

      this.$emit('currentPage', this.currentPage)
    },

    sendPage (data) {
      this.currentPage = parseInt(data.target.value)

      this.$emit('currentPage', this.currentPage)
    }
  }
}
</script>
