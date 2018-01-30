<template lang="pug">
  div(
    :class="{'form__box__body__group--free-height': reactiveDataSelect, 'form__box__body__group--error': validateErrors}"
    class="form__box__body__group")

    label(
      :class="{'label--active' : activeSelect, 'label--error': validateErrors}"
      class="label"
      @click="stateSelect()") {{configSelect.titleSelect}}

    hidden-message-inputs(:hiddenMessage="configSelect.hiddenMessage")

    template(v-if="configSelect.typeSelect === 'Array'")
      div(class="select__container")
        select(
          :ref="configSelect.id"
          :value="reactiveDataSelect"
          :class="{'select--active' : activeSelect}"
          class="select"
          @keyup="nextInput($event.code)"
          @change="sendSelect($event)"
          @blur="sendTouch()")
          option(
            v-for="data in configSelect.optionData"
            :value="data"
            :label="data")
        icon(
          name="sort-desc"
          scale="1.5"
          class="select__arrow")

    template(v-if="configSelect.typeSelect === 'Customized'")
      div(class="select__container")
        select(
          :ref="configSelect.id"
          :value="reactiveDataSelect"
          :class="{'select--active' : activeSelect}"
          class="select"
          @keyup="nextInput($event.code)"
          @change="sendSelect($event)"
          @blur="sendTouch()")
          slot(name="slotOptions")
        icon(
            name="sort-desc"
            scale="1.5"
            class="select__arrow")

    hs-error(:errors="errorSelect")
</template>

<script>
import hiddenMessageInputs from '@/components/main/_support/hiddenMessageInputs'

import hsError from '@/components/main/error/hsError'

export default {
  components: {
    hiddenMessageInputs,
    hsError
  },

  props: [
    'configSelect',
    'reactiveDataSelect',
    'errorSelect'
  ],

  created () {
    if (this.reactiveDataSelect !== null) this.activeSelect = true
  },

  mounted () {
    this.$busForm.$on('hsSelect_activeSelect', data => {
      if (typeof (data.id) !== 'undefined' && typeof (data.state) !== 'undefined') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeSelect = data.state
      } else if (typeof (data.state) !== 'undefined') this.activeSelect = data.state
    })

    this.$busForm.$on('hsSelect_selectOption', data => {
      if (typeof (this.$refs[data.id]) !== 'undefined') {
        for (let i = 0; i < this.$refs[data.id].children.length; i++) {
          let refsData = this.$refs[data.id].children[i].value

          if (refsData === data.option) this.$emit('selectData', {value: refsData, state: true})
          else if (parseInt(refsData) === data.option) this.$emit('selectData', {value: parseInt(refsData), state: true})
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsSelect_activeSelect')
    this.$busForm.$off('hsSelect_selectOption')
  },

  data () {
    return {
      activeSelect: false,
      stateTouch: false
    }
  },

  computed: {
    validateErrors () {
      let res = false

      if (this.errorSelect) {
        if (this.errorSelect.length) {
          if (!this.activeSelect) this.activeSelect = true
          res = true
        }
      }

      return res
    }
  },

  methods: {
    stateSelect () {
      if (this.reactiveDataSelect === null && !this.activeSelect) this.activeSelect = true

      this.$busForm.$emit('hsFormHeadBoard_showMessage' + this.configSelect.headBoard, false)
    },
    sendSelect (data) {
      if (!this.stateTouch && data.code !== 'Tab') this.stateTouch = true

      let selectData = data.target.value

      if (typeof (selectData) === 'string' && !isNaN(selectData)) this.$emit('selectData', {value: parseInt(selectData), state: true})
      else this.$emit('selectData', {value: selectData, state: true})

      this.$busForm.$emit('hsFormHeadBoard_showMessage' + this.configSelect.headBoard, false)
    },
    nextInput (key) {
      if ((key === 'Tab') && !this.activeSelect) this.activeSelect = true
    },
    sendTouch () {
      if (this.stateTouch) {
        if (this.reactiveDataSelect === null || this.reactiveDataSelect.length <= 0) this.activeSelect = false
        this.$emit('selectTouch', true)
        this.stateTouch = false
      }
    }
  }
}
</script>
