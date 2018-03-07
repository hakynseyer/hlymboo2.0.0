<template lang="pug">
article(class="hs-art--frm")
  hs-form-head(
    :configFormHead="lang.hsFormHead"
    @cleanerAction="formCleaner"
    @readyAction="formReady")

  hs-error(
    simple=true
    :errors="errorServer")

  hs-alert-modal(
    :configModal="lang.hsAlertModal.register.configModal"
    :configAlertModal="lang.hsAlertModal.register.configAlertModal")

  form(
    v-on:submit.prevent=""
    autocomplete="off")

    //- pre {{$data.form}}

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.personal"
          @buttonAction="formCleanerPersonal")
      div(class="hs-frm__box__body")
        hs-input(
          :configInput="lang.hsInput.name.config"
          :reactiveDataInput="form.personal.name.value"
          :errorInput="form.personal.name.error"
          @inputData="updateName"
          @inputTouch="checkName")

        hs-input(
          :configInput="lang.hsInput.surnames.config"
          :reactiveDataInput="form.personal.surnames.value"
          :errorInput="form.personal.surnames.error"
          @inputData="updateSurnames"
          @inputTouch="checkSurnames")

        hs-input(
          :configInput="lang.hsInput.alias.config"
          :reactiveDataInput="form.personal.alias.value"
          :errorInput="form.personal.alias.error"
          @inputData="updateAlias"
          @inputTouch="checkAlias")

        hs-input(
          :configInput="lang.hsInput.email.config"
          :reactiveDataInput="form.personal.email.value"
          :errorInput="form.personal.email.error"
          @inputData="updateEmail"
          @inputTouch="checkEmail")

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.passwords"
          @buttonAction="formCleanerPasswords")
      div(class="hs-frm__box__body")
        hs-input(
          :configInput="lang.hsInput.password.config"
          :reactiveDataInput="form.passwords.password.value"
          :errorInput="form.passwords.password.error"
          @inputData="updatePassword"
          @inputTouch="checkPassword")
        hs-input(
          :configInput="lang.hsInput.repeatPassword.config"
          :reactiveDataInput="form.passwords.repeatPassword.value"
          :errorInput="form.passwords.repeatPassword.error"
          @inputData="updateRepeatPassword"
          @inputTouch="checkRepeatPassword(lang.hsInput.password.config.titleInput)")

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.security"
          @buttonAction="formCleanerSecurity")
      div(class="hs-frm__box__body")
        hs-select(
          :configSelect="lang.hsSelect.question1.config"
          :reactiveDataSelect="form.security.question1.value"
          :errorSelect="form.security.question1.error"
          @selectData="updateQuestion1"
          @selectTouch="checkQuestion1(lang.hsSelect.question2.config.titleSelect)")

        hs-input(
          :configInput="lang.hsInput.answer1.config"
          :reactiveDataInput="form.security.answer1.value"
          :errorInput="form.security.answer1.error"
          @inputData="updateAnswer1"
          @inputTouch="checkAnswer1")

        hs-select(
          :configSelect="lang.hsSelect.question2.config"
          :reactiveDataSelect="form.security.question2.value"
          :errorSelect="form.security.question2.error"
          @selectData="updateQuestion2"
          @selectTouch="checkQuestion2(lang.hsSelect.question1.config.titleSelect)")

        hs-input(
          :configInput="lang.hsInput.answer2.config"
          :reactiveDataInput="form.security.answer2.value"
          :errorInput="form.security.answer2.error"
          @inputData="updateAnswer2"
          @inputTouch="checkAnswer2")

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.sign"
          @buttonAction="formCleanerSign")
      div(class="hs-frm__box__body")
        hs-checkbox(
          :configCheck="lang.hsCheckbox.sign.config"
          :errorCheck="form.sign.sign.error"
          @checkData="updateSign(lang.hsCheckbox.sign.config.checkChosen, ...arguments)"
          @checkTouch="checkSign")
</template>

<script>
import {boards} from '../../../../lang/client'
import {_date} from '../tools/customizedTools'

import hsFormHead from '@/components/form/hsFormHead'

import hsAlertModal from '@/components/modal/hsAlertModal'
import hsError from '@/components/error/hsError'

import hsFormHeadboard from '@/components/form/hsFormHeadboard'

import hsInput from '@/components/input/hsInput'
import hsSelect from '@/components/select/hsSelect'
import hsCheckbox from '@/components/checkbox/hsCheckbox'

import {newConstructor} from './tools/registerMixin'

import serverRegisterRequest from './tools/registerRequest'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsFormHead,

    hsAlertModal,
    hsError,

    hsFormHeadboard,

    hsInput,
    hsSelect,
    hsCheckbox
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.login) vm.$router.push({name: 'home'})
    })
  },

  mixins: [boards('register', 'new'), newConstructor],

  created () {
    this.form.security.question1.value = this.lang.hsSelect.question1.config.optionDataDefault
    this.form.security.question2.value = this.lang.hsSelect.question2.config.optionDataDefault
  },

  data () {
    return {
      errorServer: null,
      form: {
        personal: {
          status: false,
          name: {
            value: null,
            error: []
          },
          surnames: {
            value: null,
            error: []
          },
          alias: {
            value: null,
            error: []
          },
          email: {
            value: null,
            error: []
          }
        },
        passwords: {
          status: false,
          password: {
            value: null,
            error: []
          },
          repeatPassword: {
            value: null,
            error: []
          }
        },
        security: {
          status: false,
          question1: {
            value: null,
            error: []
          },
          answer1: {
            value: null,
            error: []
          },
          question2: {
            value: null,
            error: []
          },
          answer2: {
            value: null,
            error: []
          }
        },
        sign: {
          status: false,
          sign: {
            value: false,
            error: []
          }
        }
      }
    }
  },

  methods: {
    async formReady () {
      this.$busForm.$emit('hsFormHead_disabledButtonReady', false)

      this.formCleanerPersonal(false, true)
      this.formCleanerPasswords(false, true)
      this.formCleanerSecurity(false, true)
      this.formCleanerSign(false, true)

      this.validatePersonal()
      this.validatePasswords()
      this.validateSecurity()
      this.validateSign()

      if (!this.form.personal.status && !this.form.passwords.status && !this.form.security.status && !this.form.sign.status) {
        try {
          this.$busForm.$emit('hsFormHead_disabledButtonReady', true)

          const response = await serverRegisterRequest.newUser({
            name: {
              value: this.form.personal.name.value
            },
            surnames: {
              value: this.form.personal.surnames.value
            },
            alias: {
              value: this.form.personal.alias.value
            },
            email: {
              value: this.form.personal.email.value
            },
            password: {
              value: this.form.passwords.password.value,
              title: this.lang.hsInput.password.config.titleInput
            },
            repeatPassword: {
              value: this.form.passwords.repeatPassword.value
            },
            question1: {
              value: this.form.security.question1.value,
              title: this.lang.hsSelect.question1.config.titleSelect
            },
            answer1: {
              value: this.form.security.answer1.value
            },
            question2: {
              value: this.form.security.question2.value,
              title: this.lang.hsSelect.question2.config.titleSelect
            },
            answer2: {
              value: this.form.security.answer2.value
            },
            sign: {
              value: this.form.sign.sign.value
            }
          })

          this.lang.hsAlertModal.register.configModal.head.subtitle = this.lang.hsAlertModal.register.configModal.head.subtitle.replace('#####', response.data.alias)
          this.lang.hsAlertModal.register.configAlertModal.body.body = this.lang.hsAlertModal.register.configAlertModal.body.body.replace('#####', response.data.alias)
          this.lang.hsAlertModal.register.configAlertModal.body.footer = this.lang.hsAlertModal.register.configAlertModal.body.footer.replace('#####', response.data.name + ' ' + response.data.surnames).replace('?????', _date.fixDate()(response.data.createdAt, 'longDate'))

          this.$busForm.$emit('hsModal_showModal', {id: 'registerAlertModal', state: true})

          this.$busForm.$emit('hsFormHead_disabledButtonReady', false)
        } catch (error) {
          if (typeof (error.response) !== 'undefined') {
            switch (error.response.status) {
              case 422:
                this.addErrorToBoard(error.response.data.errors)
                this.showButtonReadyMain(this.lang.hsFormHead.showReady)
                break
              case 400:
                this.errorServer = error.response.data.errors
                break
            }
          } else console.error(error)

          this.$busForm.$emit('hsFormHead_disabledButtonReady', false)
        }
      }
    }
  }
}
</script>
