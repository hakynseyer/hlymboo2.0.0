<template lang="pug">
  article
    hs-alert-modal(
    :configModal="lang.hsAlertModal.fail.configModal"
    :configAlertModal="lang.hsAlertModal.fail.configAlertModal")

    hs-alert-modal(
    :configModal="lang.hsAlertModal.hyzher.configModal"
    :configAlertModal="lang.hsAlertModal.hyzher.configAlertModal")

    hs-alert-modal(
    :configModal="lang.hsAlertModal.new.configModal"
    :configAlertModal="lang.hsAlertModal.new.configAlertModal")

    div(class="div--width-100")
      h2(class="h2--margin-right") {{lang.hsSimpleMessage.message}}
      icon(
        v-if="stateSpinner"
        name="cog"
        scale="1.5"
        spin)

    hs-error(
      simple=true
      :errors="errorServer")
</template>

<script>
import {boards} from '../../../../lang/client'
import {date} from '../tools/customizedTools'

import hsAlertModal from '@/components/modal/hsAlertModal'
import hsError from '@/components/error/hsError'

import {valHS} from '../tools/validator'

import serverRegisterRequest from './tools/registerRequest'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsAlertModal,
    hsError
  },

  props: [
    'code',
    'alias'
  ],

  mixins: [boards('register', 'activation')],

  data () {
    return {
      errorServer: null,
      stateSpinner: true
    }
  },

  async created () {
    const checkCode = valHS.checkEmpty(this.code)
    const checkAlias = valHS.checkEmpty(this.alias)

    if (checkCode !== null && checkAlias !== null) this.fixFailAM()
    else {
      try {
        const response = await serverRegisterRequest.activationUser({
          code: {
            value: this.code
          },
          alias: {
            value: this.alias
          }
        })

        if (response.data.mode === 'success') this.fixNewAM(response.data.hyzher)
        else if (response.data.mode === 'hyzher') this.fixHyzherAM(response.data.hyzher)
      } catch (error) {
        if (typeof (error.response) !== 'undefined') {
          switch (error.response.status) {
            case 422:
              this.errorServer = error.response.data.errors.alias[0]
              break
            case 403:
              if (error.response.data.errors) this.fixFailAM()
              break
            case 400:
              this.errorServer = error.response.data.errors
              break
          }
        } else console.error(error)
      }
    }
  },

  methods: {
    fixFailAM () {
      let addInfo = new Promise(resolve => {
        this.lang.hsAlertModal.fail.configAlertModal.body.footer = this.lang.hsAlertModal.fail.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))
        resolve()
      })
      addInfo.then(() => {
        this.stateSpinner = false
        this.$busForm.$emit('hsModal_showModal', {id: 'failAlertModal', state: true})
      })
    },

    fixHyzherAM (hyzher) {
      let addInfo = new Promise(resolve => {
        this.lang.hsAlertModal.hyzher.configModal.head.subtitle = this.lang.hsAlertModal.hyzher.configModal.head.subtitle.replace('#####', hyzher)
        this.lang.hsAlertModal.hyzher.configAlertModal.body.head = this.lang.hsAlertModal.hyzher.configAlertModal.body.head.replace('#####', hyzher)
        this.lang.hsAlertModal.hyzher.configAlertModal.body.footer = this.lang.hsAlertModal.hyzher.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))
        resolve()
      })
      addInfo.then(() => {
        this.stateSpinner = false
        this.$busForm.$emit('hsModal_showModal', {id: 'hyzherAlertModal', state: true})
      })
    },

    fixNewAM (hyzher) {
      let addInfo = new Promise(resolve => {
        this.lang.hsAlertModal.new.configModal.head.subtitle = this.lang.hsAlertModal.new.configModal.head.subtitle.replace('#####', hyzher)
        this.lang.hsAlertModal.new.configAlertModal.body.head = this.lang.hsAlertModal.new.configAlertModal.body.head.replace('#####', hyzher)
        this.lang.hsAlertModal.new.configAlertModal.body.footer = this.lang.hsAlertModal.new.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))
        resolve()
      })
      addInfo.then(() => {
        this.stateSpinner = false
        this.$busForm.$emit('hsModal_showModal', {id: 'newAlertModal', state: true})
      })
    }
  }
}
</script>

