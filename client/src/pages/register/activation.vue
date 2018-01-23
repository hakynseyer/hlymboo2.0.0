<template lang="pug">
  article
    hs-alert-modal(
    :configModal="lang.hsAlertModal.configModal"
    :configAlertModal="lang.hsAlertModal.configAlertModal")

    div(class="div--width-100")
      h2(class="h2--margin-right") {{lang.h2ActivationMessage.h2Message}}
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

import hsAlertModal from '@/components/main/modal/hsAlertModal'
import hsError from '@/components/main/error/hsError'

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

    if (checkCode !== null && checkAlias !== null) {
      const langAlertModal = new Promise(resolve => {
        this.errorAlertModal()

        this.lang.hsAlertModal.configAlertModal.body.footer = this.lang.hsAlertModal.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))

        resolve()
      })
      langAlertModal.then(() => {
        this.activationModal()
      })
    } else {
      try {
        const response = await serverRegisterRequest.activationUser({
          code: {
            value: this.code
          },
          alias: {
            value: this.alias
          }
        })

        this.stateSpinner = false

        if (response.data.mode === 'success') {
          this.successAlertModal()

          this.lang.hsAlertModal.configModal.head.subtitle = this.lang.hsAlertModal.configModal.head.subtitle.replace('#####', response.data.hyzher)
          this.lang.hsAlertModal.configAlertModal.body.body = this.lang.hsAlertModal.configAlertModal.body.body.replace('#####', response.data.hyzher)
          this.lang.hsAlertModal.configAlertModal.body.footer = this.lang.hsAlertModal.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))
        } else if (response.data.mode === 'hyzher') {
          this.hyzherAlertModal()

          this.lang.hsAlertModal.configModal.head.subtitle = this.lang.hsAlertModal.configModal.head.subtitle.replace('#####', response.data.hyzher)
          this.lang.hsAlertModal.configAlertModal.body.head = this.lang.hsAlertModal.configAlertModal.body.head.replace('#####', response.data.hyzher)
          this.lang.hsAlertModal.configAlertModal.body.footer = this.lang.hsAlertModal.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))
        }

        this.$busForm.$emit('hsModal_showModal', true)
      } catch (error) {
        if (typeof (error.response) !== 'undefined') {
          switch (error.response.status) {
            case 422:
              this.errorServer = error.response.data.errors.alias[0]
              break
            case 403:
              if (error.response.data.errors) {
                this.errorAlertModal()

                this.lang.hsAlertModal.configAlertModal.body.footer = this.lang.hsAlertModal.configAlertModal.body.footer.replace('#####', date.fixDate()(new Date(), 'longDate'))

                this.$busForm.$emit('hsModal_showModal', true)
              }
              break
            case 400:
              this.errorServer = error.response.data.errors
              break
          }
        } else console.error(error)

        this.stateSpinner = false
      }
    }
  },

  methods: {
    activationModal () {
      this.$busForm.$emit('hsModal_showModal', true)
    }
  }
}
</script>

