<template lang="pug">
article(class="hs-art--frm")
  hs-form-head(
    :configFormHead="lang.hsFormHead"
    @cleanerAction="formCleaner"
    @readyAction="formReady")

  hs-error(
    simple=true
    :errors="errorServer")

  form(
    v-on:submit.prevent=""
    autocomplete="off")

    //- pre {{$data.form}}

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.hyzher"
          @buttonAction="formCleanerHyzher")
      div(class="hs-frm__box__body")
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

import hsFormHead from '@/components/form/hsFormHead'

import hsError from '@/components/error/hsError'

import hsFormHeadboard from '@/components/form/hsFormHeadboard'

import hsInput from '@/components/input/hsInput'

import {loginConstructor} from './tools/loginMixin'

import serverLoginRequest from './tools/loginRequest'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsFormHead,

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

  methods: {
    async formReady () {
      this.$busForm.$emit('hsFormHead_disabledButtonReady', false)

      this.formCleanerHyzher(false, true)

      this.validateHyzher()

      if (!this.form.hyzher.status) {
        try {
          this.$busForm.$emit('hsFormHead_disabledButtonReady', true)

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

          this.$busForm.$emit('hsFormHead_disabledButtonReady', false)
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

          this.$busForm.$emit('hsFormHead_disabledButtonReady', false)
        }
      }
    }
  }
}
</script>

