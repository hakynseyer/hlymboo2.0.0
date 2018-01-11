<template lang="pug">
form(
  v-on:submit.prevent=""
  autocomplete="off"
  class="form")

  //- pre {{$data.form}}

  hs-alert-modal(
    :configModal="lang.hsAlertModal.configModal"
    :configAlertModal="lang.hsAlertModal.configAlertModal")

  div(class="form__head")
    h2(class="form__head__title") {{lang.form.head.title}}
    div(class="form__head__buttons")
      button(
        class="form__button form__button--marginRight form__button__color--red"
        type="button"
        @click="formCleaner") {{lang.form.head.buttons.cleaner}}
      transition(name="move-right")
        button(
          v-if="showButtonReady"
          class="form__button form__button__color--blue"
          type="button"
          :disabled="buttons.isDisabledReady"
          @click="formReady") {{lang.form.head.buttons.ready}}

  hs-form-error(
    simple=true
    :errors="errorServer"
  )

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :title="lang.hsFormHeadboard.personal.title"
        :message="lang.hsFormHeadboard.personal.message")
        button(
          slot="hsHeadboardButton"
          type="button"
          class="form__head-board__space-right__button"
          @click="formCleanerPersonal")
            icon(
              name="trash-o"
              scale="1.5"
              class="form__head-board__space-right__button__icon")

    div(class="form__box__body")
      hs-form-input(
        :configInput="lang.hsFormInput.name.config"
        :reactiveDataInput="form.personal.name.value"
        :errorInput="form.personal.name.error"
        @inputData="updateName"
        @inputTouch="checkName")

      hs-form-input(
        :configInput="lang.hsFormInput.surnames.config"
        :reactiveDataInput="form.personal.surnames.value"
        :errorInput="form.personal.surnames.error"
        @inputData="updateSurnames"
        @inputTouch="checkSurnames")

      hs-form-input(
        :configInput="lang.hsFormInput.alias.config"
        :reactiveDataInput="form.personal.alias.value"
        :errorInput="form.personal.alias.error"
        @inputData="updateAlias"
        @inputTouch="checkAlias")

      hs-form-input(
        :configInput="lang.hsFormInput.email.config"
        :reactiveDataInput="form.personal.email.value"
        :errorInput="form.personal.email.error"
        @inputData="updateEmail"
        @inputTouch="checkEmail")

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :title="lang.hsFormHeadboard.passwords.title"
        :message="lang.hsFormHeadboard.passwords.message")
        button(
          slot="hsHeadboardButton"
          type="button"
          class="form__head-board__space-right__button"
          @click="formCleanerPasswords")
            icon(
              name="trash-o"
              scale="1.5"
              class="form__head-board__space-right__button__icon")

    div(class="form__box__body")
      hs-form-input(
        :configInput="lang.hsFormInput.password.config"
        :reactiveDataInput="form.passwords.password.value"
        :errorInput="form.passwords.password.error"
        @inputData="updatePassword"
        @inputTouch="checkPassword")
      hs-form-input(
        :configInput="lang.hsFormInput.repeatPassword.config"
        :reactiveDataInput="form.passwords.repeatPassword.value"
        :errorInput="form.passwords.repeatPassword.error"
        @inputData="updateRepeatPassword"
        @inputTouch="checkRepeatPassword(lang.hsFormInput.password.config.titleInput)")

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :title="lang.hsFormHeadboard.security.title"
        :message="lang.hsFormHeadboard.security.message")
        button(
          slot="hsHeadboardButton"
          type="button"
          class="form__head-board__space-right__button"
          @click="formCleanerSecurity")
            icon(
              name="trash-o"
              scale="1.5"
              class="form__head-board__space-right__button__icon")

    div(class="form__box__body")
      hs-form-select(
        :configSelect="lang.hsFormSelect.question1.config"
        :reactiveDataSelect="form.security.question1.value"
        :errorSelect="form.security.question1.error"
        @selectData="updateQuestion1"
        @selectTouch="checkQuestion1(lang.hsFormSelect.question2.config.titleSelect)")

      hs-form-input(
        :configInput="lang.hsFormInput.answer1.config"
        :reactiveDataInput="form.security.answer1.value"
        :errorInput="form.security.answer1.error"
        @inputData="updateAnswer1"
        @inputTouch="checkAnswer1")

      hs-form-select(
        :configSelect="lang.hsFormSelect.question2.config"
        :reactiveDataSelect="form.security.question2.value"
        :errorSelect="form.security.question2.error"
        @selectData="updateQuestion2"
        @selectTouch="checkQuestion2(lang.hsFormSelect.question1.config.titleSelect)")

      hs-form-input(
        :configInput="lang.hsFormInput.answer2.config"
        :reactiveDataInput="form.security.answer2.value"
        :errorInput="form.security.answer2.error"
        @inputData="updateAnswer2"
        @inputTouch="checkAnswer2")

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :title="lang.hsFormHeadboard.sign.title"
        :message="lang.hsFormHeadboard.sign.message")
        button(
          slot="hsHeadboardButton"
          type="button"
          class="form__head-board__space-right__button"
          @click="formCleanerSign")
            icon(
              name="trash-o"
              scale="1.5"
              class="form__head-board__space-right__button__icon")

    div(class="form__box__body")
      hs-form-check(
        :configCheck="lang.hsFormCheck.sign.config"
        :errorCheck="form.sign.sign.error"
        @checkData="updateSign(lang.hsFormCheck.sign.config.checkChosen, ...arguments)"
        @checkTouch="checkSign")
</template>

<script>
import {boards} from '../../../../lang/client'
import {date} from '../tools/customizedTools'

import hsAlertModal from '@/components/main/modal/hsAlertModal'
import hsFormError from '@/components/main/form/hsFormError'

import hsFormHeadboard from '@/components/main/form/hsFormHeadboard'

import hsFormInput from '@/components/main/form/hsFormInput'
import hsFormSelect from '@/components/main/form/hsFormSelect'
import hsFormCheck from '@/components/main/form/hsFormCheck'

import {newConstructor} from './tools/registerMixin'

import serverRegisterRequest from './tools/registerRequest'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsAlertModal,
    hsFormError,

    hsFormHeadboard,

    hsFormInput,
    hsFormSelect,
    hsFormCheck
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.login) vm.$router.push({name: 'home'})
    })
  },

  mixins: [boards('register', 'new'), newConstructor],

  created () {
    this.form.security.question1.value = this.lang.hsFormSelect.question1.config.optionDataDefault
    this.form.security.question2.value = this.lang.hsFormSelect.question2.config.optionDataDefault
  },

  data () {
    return {
      errorServer: null,
      buttons: {
        isDisabledReady: false
      },
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

  computed: {
    checkErroresReady () {
      let res = false

      if (this.form.personal.name.error.length || this.form.personal.surnames.error.length || this.form.personal.alias.error.length || this.form.personal.email.error.length) res = true

      if (this.form.passwords.password.error.length || this.form.passwords.repeatPassword.error.length) res = true

      if (this.form.security.question1.error.length || this.form.security.answer1.error.length || this.form.security.question2.error.length || this.form.security.answer2.error.length) res = true

      if (this.form.sign.sign.error.length) res = true

      return res
    },
    showButtonReady () {
      let res = false

      if (!this.checkErroresReady) {
        const Personal = this.form.personal.name.value !== null && this.form.personal.surnames.value !== null && this.form.personal.alias.value !== null && this.form.personal.email.value !== null

        const Passwords = this.form.passwords.password.value !== null && this.form.passwords.repeatPassword.value !== null

        const Security = this.form.security.question1.value !== null && this.form.security.answer1.value !== null && this.form.security.question2.value !== null && this.form.security.answer2.value !== null

        if (Personal && Passwords && Security) res = true
      }

      return res
    }
  },

  methods: {
    async formReady () {
      this.buttons.isDisabledReady = false

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
          this.buttons.isDisabledReady = true

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
              title: this.lang.hsFormInput.password.config.titleInput
            },
            repeatPassword: {
              value: this.form.passwords.repeatPassword.value
            },
            question1: {
              value: this.form.security.question1.value,
              title: this.lang.hsFormSelect.question1.config.titleSelect
            },
            answer1: {
              value: this.form.security.answer1.value
            },
            question2: {
              value: this.form.security.question2.value,
              title: this.lang.hsFormSelect.question2.config.titleSelect
            },
            answer2: {
              value: this.form.security.answer2.value
            },
            sign: {
              value: this.form.sign.sign.value
            }
          })

          this.lang.hsAlertModal.configModal.head.subtitle = this.lang.hsAlertModal.configModal.head.subtitle.replace('#####', response.data.alias)
          this.lang.hsAlertModal.configAlertModal.body.body = this.lang.hsAlertModal.configAlertModal.body.body.replace('#####', response.data.alias)
          this.lang.hsAlertModal.configAlertModal.body.footer = this.lang.hsAlertModal.configAlertModal.body.footer.replace('#####', response.data.name + ' ' + response.data.surnames).replace('?????', date.fixDate()(response.data.createdAt, 'longDate'))

          this.$busForm.$emit('hsModal_showModal', true)

          this.buttons.isDisabledReady = false
        } catch (error) {
          if (typeof (error.response) !== 'undefined') {
            switch (error.response.status) {
              case 422:
                this.addErrorToBoard(error.response.data.errors)
                break
              case 400:
                this.errorServer = error.response.data.errors
                break
            }

            this.buttons.isDisabledReady = false
            // [?] Monitorear si a lo largo de la aplicacion es necesario agregar estas lineas para tener un mejor control de validacion (SI ES NECESARIO, DEBERÁ SER AGREGADO A TODOS LOS BOARDS)
              // this.validatePersonalErrors()
              // this.validatePasswordsErrors()
              // this.validateSecurityErrors()
              // this.validateSignErrors()
          } else console.error(error)
        }
      }
    }
  }
}
</script>