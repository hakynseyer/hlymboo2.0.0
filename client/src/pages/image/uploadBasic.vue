<template lang="pug">
article(class="hs-art--frm")
  hs-form-head(
    :configFormHead="lang.hsFormHead"
    @cleanerAction="cleaner"
    @readyAction="Ready")

  hs-error(
    simple=true
    :errors="errorServer")

  hs-small-modal(:configSmallModal="lang.hsSmallModal.uploadBasic.configSmallModal")

  form(
    v-on:submit.prevent=""
    enctype="multipart/form-data"
    autocomplete="off")
    //- pre {{$data.form}}

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.picture"
          @buttonAction="cleanerPicture")
      div(class="hs-frm__box__body")
        hs-image(
          :configImage="lang.hsImage.image.config"
          :reactiveDataImage="form.picture.image.value"
          :errorImage="form.picture.image.error"
          @imageData="updateImage"
          @imageTouch="checkImage")

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.basic"
          @buttonAction="cleanerBasic")
      div(class="hs-frm__box__body")
        hs-input(
          :configInput="lang.hsInput.title.config"
          :reactiveDataInput="form.basic.title.value"
          :errorInput="form.basic.title.error"
          @inputData="updateTitle"
          @inputTouch="checkTitle")

        hs-textarea(
          :configTextarea="lang.hsTextarea.copyright.config"
          :reactiveDataTextarea="form.basic.copyright.value"
          :errorTextarea="form.basic.copyright.error"
          @textareaData="updateCopyright"
          @textareaTouch="checkCopyright")

    div(class="hs-frm__box")
      div(class="hs-frm__box__headboard")
        hs-form-Headboard(
          :configHeadboard="lang.hsFormHeadboard.organization"
          @buttonAction="cleanerOrganization")
      div(class="hs-frm__box__body")
        hs-chest(
          :configChest="lang.hsChest.chest.config"
          :reactiveDataChest="form.organization.chest.value"
          :errorChest="form.organization.chest.error"
          @chestData="updateChest"
          @chestTouch="checkChest")
</template>

<script>
import {boards} from '../../../../lang/client'
import {_date} from '../tools/customizedTools'

import hsFormHead from '@/components/form/hsFormHead'

import hsSmallModal from '@/components/modal/hsSmallModal'
import hsError from '@/components/error/hsError'

import hsFormHeadboard from '@/components/form/hsFormHeadboard'

import hsImage from '@/components/image/hsImage'
import hsInput from '@/components/input/hsInput'
import hsTextarea from '@/components/textarea/hsTextarea'
import hsChest from '@/components/chest/hsChest'

import {uploadBasicConstructor} from './tools/imageMixin'

import serverImageServer from './tools/imageServer'

import Vue from 'vue'
Vue.prototype.$busForm = new Vue()

export default {
  components: {
    hsFormHead,

    hsSmallModal,
    hsError,

    hsFormHeadboard,

    hsImage,
    hsInput,
    hsTextarea,
    hsChest
  },

  mixins: [boards('image', 'uploadBasic'), uploadBasicConstructor],

  async created () {
    let chestData = await this.request_image_chest('array_simple')
    this.lang.hsChest.chest.config.optionData = chestData
    if (chestData.length) {
      this.$busForm.$emit('hsChest_statusButton', {id: 'selectChestChest', direct: 'select'})
      this.$busForm.$emit('hsChest_activeChest', {id: 'selectChestChest', state: true})
    }
  },

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
    async Ready () {
      this.$busForm.$emit('hsFormHead_disabledButtonReady', false)

      this.cleanerPicture(false, true)
      this.cleanerBasic(false, true)
      this.cleanerOrganization(false, true)

      this.validatePicture()
      this.validateBasic()
      this.validateOrganization()

      if (!this.form.picture.status && !this.form.basic.status && !this.form.organization.status) {
        try {
          this.$busForm.$emit('hsFormHead_disabledButtonReady', true)

          const formData = new FormData()

          formData.append('image', this.form.picture.image.value)
          formData.append('title', this.form.basic.title.value)
          formData.append('copyright', this.form.basic.copyright.value)
          formData.append('chest', this.form.organization.chest.value)

          const response = await serverImageServer.uploadBasicImage(formData)

          this.cleaner()

          let chestData = await this.request_image_chest('array_simple')
          this.lang.hsChest.chest.config.optionData = chestData

          this.lang.hsSmallModal.uploadBasic.configSmallModal.title = this.lang.hsSmallModal.uploadBasic.configSmallModal.title.replace('#####', response.data.title)
          this.lang.hsSmallModal.uploadBasic.configSmallModal.body = this.lang.hsSmallModal.uploadBasic.configSmallModal.body.replace('#####', response.data.title).replace('?????', _date.fixDate()(response.data.createdAt, 'mediumDate'))

          this.$busForm.$emit('hsSmallModal_showModal', {id: 'up_ImageSuccess_SM', state: true})

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

