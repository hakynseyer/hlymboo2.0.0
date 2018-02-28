<template lang="pug">
  div(class="filter")
    //- pre {{$data}}
    div(class="filter__filters")
      h2(class="filter__title") {{lang.hsFilter.filter.title}}
      div(class="filter__filters__group")
        button(
          :ref="configFilter.ids.filterButton"
          v-for="selectMode in configFilter.select"
          type="button"
          class="filter__filters__group__button"
          @click="chosenFilter(selectMode.name, selectMode.key)") {{selectMode.name}}
      div(class="filter__filters__select")
        div(
          v-for="selectMode in configFilter.select"
          v-show="activatedFilter === selectMode.key"
          class="select__container")
          select(
            class="select select--active select--background-default select--font-size-small select--cursor select--multiple"
            v-model="chosenFilters"
            multiple)
            option(
              v-for="data in selectMode.optionData"
              :value="data"
              class="select--font-size-small") {{data}}
      div(class="filter__filters__lauch")
        button(
          type="button"
          class="filter__filters__lauch__button"
          @click="sendFilter()") {{lang.hsFilter.filter.button}}

    div(class="filter__text")
      h2(class="filter__title") {{lang.hsFilter.text.title}}
      div(class="filter__text__group")
        input(
          :placeholder="configFilter.text.placeholder"
          type="input"
          v-model="searchText"
          class="input input--active input--background input--font-size-small filter__text__group__input"
          @keyup="sendText($event.keyCode)")
        button(
          type="button"
          class="filter__text__group__button"
          @click="sendText")
          icon(
            name="search"
            scale="1.5")
      div(class="filter__text__buttons")
        button(
          v-for="textButton in configFilter.text.buttons"
          type="button"
          class="filter__text__buttons__button"
          @click="sendTextButton(textButton.key)")
          icon(
            :name="textButton.icon"
            scale="1.5")

    div(class="filter__order")
      h2(class="filter__title") {{lang.hsFilter.order.title}}
      div(class="filter__order__group")
        button(
          :ref="configFilter.ids.orderButton"
          v-for="orderMode in configFilter.order"
          type="button"
          value="normal"
          class="filter__order__group__button"
          @click="sendOrder(orderMode)") {{orderMode.name}}
</template>

<script>
import {components} from '../../../../lang/client'

export default {
  props: [
    'configFilter'
  ],

  mixins: [components('Filter', 'hsFilter')],

  mounted () {
    this.$busForm.$on('hsFilter_resetOrder', () => {
      this.resetOrder()
    })

    this.$busForm.$on('hsFilter_chosenFilters', data => {
      if (typeof (data) === 'object') {
        if (data.mode === 'cleaner') this.chosenFilters = []
        else if (data.mode === 'add') {
          this.chosenFilters = data.array.slice(0)
        }
      }
    })

    this.$busForm.$on('hsFilter_searchText', data => {
      if (typeof (data) === 'object') {
        if (data.mode === 'cleaner') this.searchText = null
        else if (data.mode === 'add') {
          this.searchText = data.array
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsFilter_resetOrder')
    this.$busForm.$off('hsFilter_chosenFilters')
    this.$busForm.$off('hsFilter_searchText')
  },

  data () {
    return {
      activatedFilter: null,
      chosenFilters: [],
      searchText: null
    }
  },

  methods: {
    chosenFilter (filter, key) {
      this.activatedFilter = key
      this.$refs[this.configFilter.ids.filterButton].forEach(button => {
        if (button.textContent === filter) button.className = 'filter__filters__group__button filter__filters__group__button--active'
        else button.className = 'filter__filters__group__button'
      })
    },

    sendFilter () {
      if (this.activatedFilter !== null && this.chosenFilters.length) {
        this.$emit('filterData', {filter: this.activatedFilter, data: this.chosenFilters})
      }
    },

    sendText (key) {
      if (typeof (key) === 'number') {
        if (key === 13 && this.searchText !== null) this.$emit('textData', {text: this.configFilter.text.key, data: this.searchText})
      } else if (this.searchText !== null) this.$emit('textData', {text: this.configFilter.text.key, data: this.searchText})
    },

    sendTextButton (key) {
      if (typeof (key) === 'string') this.$emit('textDataButton', key)
    },

    sendOrder (order) {
      if (typeof (order.reverse) === 'boolean') {
        this.$refs[this.configFilter.ids.orderButton].forEach(button => {
          let texto = button.textContent.split(' ')[0]

          if (texto === order.name) {
            let previousValue = button.value
            this.resetOrder()

            if (button.value === 'normal') {
              this.$emit('orderData', {type: order.type, order: order.key, mode: button.value})
              button.innerHTML = texto + ' &#x2191;'
              button.value = 'reverse'
            } else if (button.value === 'reverse') {
              this.$emit('orderData', {type: order.type, order: order.key, mode: button.value})
              button.innerHTML = texto + ' &#x2193;'
              button.value = 'normal'
            }

            if (previousValue !== button.value) button.className = 'filter__order__group__button filter__order__group__button--purple'
          }
        })
      } else {
        this.$emit('orderData', {type: order.type, order: order.key, mode: 'normal'})

        switch (order.type) {
          case 'cleaner':
            this.resetOrder()
            break
        }
      }
    },

    resetOrder () {
      this.$refs[this.configFilter.ids.orderButton].forEach(button => {
        button.className = 'filter__order__group__button'
        let texto = button.textContent.split(' ')[0]
        button.innerHTML = texto
      })
    }
  }
}
</script>
