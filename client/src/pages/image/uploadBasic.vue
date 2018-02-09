<template lang="pug">
form(
  v-on:submit.prevent=""
  autocomplete="off"
  class="form")

  hs-form-head(
    :configFormHead="lang.hsFormHead"
    @cleanerAction=""
    @readyAction="")

  hs-error(
    simple=true
    :errors="errorServer")

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :configHeadboard="lang.hsFormHeadboard.picture"
        @buttonAction="a")
    div(class="form__box__body")
      hs-image(
        :configImage="lang.hsImage.image.config"
        :reactiveDataImage="form.picture.image.value"
        :errorImage="form.picture.image.error"
        @imageData=""
      )

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :configHeadboard="lang.hsFormHeadboard.basic"
        @buttonAction="")
    div(class="form__box__body")
      hs-input(
        :configInput="lang.hsInput.title.config"
        :reactiveDataInput="form.basic.title.value"
        :errorInput="form.basic.title.error"
        @inputData=""
        @inputTouch="")

  div(class="form__box")
    div(class="form__box__head-board")
      hs-form-Headboard(
        :configHeadboard="lang.hsFormHeadboard.organization"
        @buttonAction="")
    div(class="form__box__body")

</template>

<script>
import {boards} from '../../../../lang/client'

import hsFormHead from '@/components/form/hsFormHead'

import hsError from '@/components/error/hsError'

import hsFormHeadboard from '@/components/form/hsFormHeadboard'

import hsImage from '@/components/image/hsImage'
import hsInput from '@/components/input/hsInput'

export default {
  components: {
    hsFormHead,

    hsError,

    hsFormHeadboard,

    hsImage,
    hsInput
  },

  mixins: [boards('image', 'uploadBasic')],

  data () {
    return {
      errorServer: null,
      form: {
        picture: {
          status: false,
          image: {
            value: null,
            error: []
          }
        },
        basic: {
          status: false,
          title: {
            value: null,
            error: []
          },
          copyright: {
            value: null,
            error: []
          }
        },
        organization: {
          status: false,
          chest: {
            value: null,
            error: []
          }
        }
      }
    }
  },

  methods: {
    a () {
      console.log('HeadboardRecibido')
    }
  }
}
</script>

