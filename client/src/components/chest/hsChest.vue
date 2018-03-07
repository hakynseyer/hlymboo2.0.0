<template lang="pug">
  div(
    :class="{'hs-frm__box__body__group--free-height': reactiveDataChest || activeChest, 'hs-frm__box__body__group--error': validateErrors}"
    class="hs-frm__box__body__group")

    label(
      :for="configChest.titleChest"
      :class="{'hs-label--active': activeChest, 'hs-label--error': validateErrors}"
      class="hs-label"
      @click="stateChest()") {{configChest.titleChest}}

    hidden-message-inputs(
      :refMessage="configChest.id"
      :hiddenMessage="configChest.hiddenMessage")

    div(
      :class="{'hs-chest--active': activeChest}"
      class="hs-chest")

      input(
        v-show="showInput"
        :ref="configChest.idInput"
        :id="configChest.titleChest"
        :value="reactiveDataChest"
        class="hs-chest__input"
        @keyup="sendChest($event, 'input')"
        @blur="sendTouch()")

      div(
        v-show="!showInput"
        class="hs-chest__select")

        template(v-if="configChest.typeSelect === 'array'")
          div(class="hs-chest__select hs-select__container")
            select(
              :ref="configChest.idSelect"
              class="hs-select hs-select--active"
              @keyup="nextInput($event.code)"
              @change="sendChest($event, 'select')"
              @blur="sendTouch()")
              option(
                v-for="data in configChest.optionData"
                :value="data") {{data}}
            icon(
              name="sort-desc"
              scale="1.5"
              class="hs-select__arrow")

      button(
        type="button"
        :class="{'hs-chest__button--coincidence': coincidence}"
        class="hs-chest__button"
        @click="statusButton(false)")

        icon(
          :name="icon"
          scale="1.3"
          class="hs-chest__button--icon")

    hs-error(:errors="errorChest")
</template>

<script>
import hiddenMessageInputs from '@/components/hiddenMessageInputs/hsHiddenMessageInputs'

import hsError from '@/components/error/hsError'

export default {
  components: {
    hiddenMessageInputs,
    hsError
  },

  props: [
    'configChest',
    'reactiveDataChest',
    'errorChest'
  ],

  created () {
    if (this.reactiveDataChest !== null || this.configChest.optionData.length) {
      this.activeChest = true
      this.statusButton(true)
    }
  },

  mounted () {
    this.$busForm.$on('hsChest_activeChest', (data) => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeChest = data.state
      } else if (typeof (data.state) !== 'undefined') this.activeChest = data.state
    })

    this.$busForm.$on('hsChest_statusButton', (data) => {
      if (typeof (data.id) === 'string') {
        if (typeof (this.$refs[data.id]) !== 'undefined') {
          if (data.direct === 'input') {
            this.showInput = false
            this.statusButton(false)
          } else if (data.direct === 'select') {
            this.showInput = true
            this.statusButton(true)
          }
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsChest_activeChest')
    this.$busForm.$off('hsChest_statusButton')
  },

  data () {
    return {
      activeChest: null,
      stateTouch: false,
      showInput: true,
      coincidence: false,
      icon: 'archive'
    }
  },

  computed: {
    validateErrors () {
      let res = false

      if (this.errorChest) {
        if (this.errorChest.length) {
          if (!this.activeChest) this.activeChest = true
          res = true
        }
      }

      return res
    }
  },

  methods: {
    stateChest () {
      if (this.reactiveDataChest === null && !this.activeChest) this.activeChest = true

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configChest.headboard, false)
    },

    sendChest (data, recived) {
      if (!this.stateTouch && data.code !== 'Tab') this.stateTouch = true

      let chestData = data.target.value

      if (recived === 'input') {
        let existsData = this.configChest.optionData.includes(chestData)

        if (existsData) this.coincidence = true
        else this.coincidence = false

        if ((data.code === 'Tab') && !this.activeChest) this.activeChest = true

        this.$emit('chestData', {value: chestData, state: true})
      } else if (recived === 'select') {
        if (typeof (chestData) === 'string' && !isNaN(chestData)) this.$emit('chestData', {value: parseInt(chestData), state: true})
        else this.$emit('chestData', {value: chestData, state: true})
      }

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configChest.headboard, false)
    },

    sendTouch () {
      if (this.stateTouch) {
        if (this.reactiveDataChest === null || this.reactiveDataChest.length <= 0) this.activeChest = false
        this.$emit('chestTouch', true)
        this.stateTouch = false
      }
    },

    statusButton (rewind) {
      if (this.configChest.optionData.length) {
        if (this.showInput) {
          // Show Select
          let moveSelect = new Promise(resolve => {
            this.showInput = false
            this.icon = 'pencil'
            resolve()
          })
          moveSelect.then(() => {
            let existsData = this.configChest.optionData.includes(this.reactiveDataChest)

            if (!existsData) {
              if (rewind && this.reactiveDataChest !== null) this.statusButton()
              else {
                this.$refs[this.configChest.idSelect].children[0].selected = true

                let chestData = this.$refs[this.configChest.idSelect].children[0].value

                if (typeof (chestData) === 'string' && !isNaN(chestData)) this.$emit('chestData', {value: parseInt(chestData), state: true})
                else this.$emit('chestData', {value: chestData, state: true})
              }
            } else {
              for (let option of this.$refs[this.configChest.idSelect].children) {
                if (option.value === this.reactiveDataChest) option.selected = true
              }
            }

            if (!rewind) this.$nextTick(() => this.$refs[this.configChest.idSelect].focus())
          })
        } else {
          // Show Input
          let moveInput = new Promise(resolve => {
            this.showInput = true
            this.icon = 'archive'
            resolve()
          })
          moveInput.then(() => {
            this.coincidence = false
            this.$emit('chestData', {value: null, state: true})

            if (!rewind) this.$nextTick(() => this.$refs[this.configChest.idInput].focus())
          })
        }
      }
    },

    nextInput (key) {
      if ((key === 'Tab') && !this.activeChest) this.activeChest = true
    }
  }
}
</script>

