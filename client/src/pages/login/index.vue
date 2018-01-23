<template lang="pug">
form(
  v-on:submit.prevent=""
  autocomplete="off"
  class="form")
  //- pre {{$data.form}}
  div(class="form__head")
    h2(class="form__head__title") {{lang.form.head.title}}
    div(class="form__head__buttons")
      button(
        class="button__lighten-color--gray button__hover-darken-color--red button--margin-right"
        type="button"
        @click="formCleaner") {{lang.form.head.buttons.cleaner}}
      transition(name="move-right")
        button(
          v-if="showButtonReady"
          class="button__lighten-color--gray button__hover-darken-color--blue"
          type="button"
          :disabled="buttons.isDisabledReady"
          @click="formReady")
          span(v-if="!buttons.isDisabledReady") {{lang.form.head.buttons.ready}}
          icon(
              v-else
              name="cog"
              scale="1.5"
              spin)

  hs-error(
    simple=true
    :errors="errorServer")

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :title="lang.hsFormHeadboard.hyzher.title"
        :message="lang.hsFormHeadboard.hyzher.message")
        button(
          slot="hsHeadboardButton"
          type="button"
          class="form__head-board__space-right__button"
          @click="formCleanerHyzher")
            icon(
              name="trash-o"
              scale="1.5"
              class="form__head-board__space-right__button__icon")

    div(class="form__box__body")
      hs-input(
        :configInput="lang.hsInput.email.config"
        :reactiveDataInput="form.hyzher.email.value"
        :errorInput="form.hyzher.email.error"
        @inputData="updateEmail"
        @inputTouch="checkEmail")

      hs-input(
        :configInput="lang.hsInput.password.config"
        :reactiveDataInput="form.hyzher.password.value"
        :errorInput="form.hyzher.password.error"
        @inputData="updatePassword"
        @inputTouch="checkPassword")
</template>

<script>
import {boards} from '../../../../lang/client'

import hsError from '@/components/main/error/hsError'

import hsFormHeadboard from '@/components/main/form/hsFormHeadboard'

import hsInput from '@/components/main/input/hsInput'

import {loginConstructor} from './tools/loginMixin'

import serverLoginRequest from './tools/loginRequest'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsError,

    hsFormHeadboard,

    hsInput
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.login) vm.$router.push({name: 'home'})
    })
  },

  mixins: [boards('login', 'login'), loginConstructor],

  data () {
    return {
      errorServer: null,
      buttons: {
        isDisabledReady: false
      },
      form: {
        hyzher: {
          status: false,
          email: {
            value: null,
            error: []
          },
          password: {
            value: null,
            error: []
          }
        }
      }
    }
  },

  computed: {
    checkErroresReady () {
      let res = false

      if (this.form.hyzher.email.error.length || this.form.hyzher.password.error.length) res = true

      return res
    },
    showButtonReady () {
      let res = false

      if (!this.checkErroresReady) {
        const Hyzher = this.form.hyzher.email.value !== null && this.form.hyzher.password.value !== null

        if (Hyzher) res = true
      }

      return res
    }
  },

  methods: {
    async formReady () {
      this.buttons.isDisabledReady = false

      this.formCleanerHyzher(false, true)

      this.validateHyzher()

      if (!this.form.hyzher.status) {
        try {
          this.buttons.isDisabledReady = true

          const response = await serverLoginRequest.loginUser({
            email: {
              value: this.form.hyzher.email.value
            },
            password: {
              value: this.form.hyzher.password.value
            }
          })

          if (response.data.token) {
            this.$store.dispatch('saveHyzher', response.data.hyzher)
            this.$store.dispatch('saveToken', response.data.token)
            this.$router.push({name: 'home'})
          }

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
          } else console.error(error)

          this.buttons.isDisabledReady = false
        }
      }
    }
  }
}
</script>

