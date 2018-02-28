<template lang="pug">
  div(
    :class="{'form__box__body__group--free-height': reactiveDataImage, 'form__box__body__group--error': validateErrors, 'form__box__body__group--free-height': activeImage}"
    class="form__box__body__group")

    label(
      :class="{'label--active' : activeImage, 'label--error': validateErrors}"
      class="label"
      @click="stateImage()") {{configImage.titleImage}}

    hidden-message-inputs(
      :refMessage="configImage.id"
      :hiddenMessage="configImage.hiddenMessage")

    div(
      :ref="configImage.id"
      :class="{'image--active': activeImage}"
      class="image__container")

      img(
        :src="fixChangeImg"
        class="image__container__frame"
        @click="loadImage")

      div(
        v-show="details.cellsA && details.cellsB"
        class="image__container__details")
        div(class="image__container__details__group")
          span(class="image__container__details__group__cells") {{lang.hsImage.details.cellType}}
          span(class="image__container__details__group__cells") {{details.cellsA}}
        div(class="image__container__details__group")
          span(class="image__container__details__group__cells") {{lang.hsImage.details.cellWeight}}
          span(class="image__container__details__group__cells") {{details.cellsB}}

      div(class="image__container__curtain")

      input(
        :id="configImage.titleImage"
        type="file"
        accept="image/*"
        class="image__container__input"
        @change="changeDefaultImage")

    hs-error(:errors="errorImage")
</template>

<script>
import {components} from '../../../../lang/client'

import hiddenMessageInputs from '@/components/hiddenMessageInputs/hsHiddenMessageInputs'

import hsError from '@/components/error/hsError'

export default {
  components: {
    hiddenMessageInputs,
    hsError
  },

  props: [
    'configImage',
    'reactiveDataImage',
    'errorImage'
  ],

  mixins: [components('Image', 'hsImage')],

  created () {
    if (typeof (this.reactiveDataImage) === 'string') {
      if (this.reactiveDataImage !== null) this.activeImage = true
    }
  },

  mounted () {
    this.$busForm.$on('hsImage_activeImage', data => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeImage = data.state
      } else if (typeof (data.state) === 'boolean') this.activeImage = data.state
    })

    this.$busForm.$on('hsImage_changeImg', data => {
      if (typeof (data.id) === 'string') {
        if (typeof (this.$refs[data.id]) !== 'undefined') {
          if (data.image !== null) this.changeImg = require(`@/assets/img/${data.image}`)
          else this.changeImg = null
          this.details.cellsA = null
          this.details.cellsB = null
        }
      }
    })
  },

  beforeDestroy () {
    this.$busForm.$off('hsImage_activeImage')
    this.$busForm.$off('hsImage_changeImg')
  },

  data () {
    return {
      activeImage: false,
      stateTouch: false,
      changeImg: null,
      details: {
        cellsA: null,
        cellsB: null
      }
    }
  },

  computed: {
    validateErrors () {
      let res = false

      if (this.errorImage) {
        if (this.errorImage.length) {
          if (!this.activeImage) this.activeImage = true
          res = true
        }
      }

      return res
    },

    fixChangeImg () {
      if (this.changeImg !== null) return this.changeImg
      else {
        if (typeof (this.reactiveDataImage) === 'string') {
          if (this.reactiveDataImage !== null) return require(`@/assets/img/${this.reactiveDataImage}`)
        } else if (this.configImage.defaultImage === 'HakynSeyer_Hpan503') return require(`@/assets/img/server/inputImg/subir_imagen.svg`)
      }
    }
  },
  methods: {
    stateImage () {
      if (this.reactiveDataImage === null && !this.activeImage) this.activeImage = true

      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configImage.headboard, false)
    },

    loadImage () {
      document.getElementById(this.configImage.titleImage).click()
    },

    changeDefaultImage (e) {
      this.$busForm.$emit('hsFormHeadboard_showMessage' + this.configImage.headboard, false)

      const img = e.target.files
      let readImg

      if (img.length) {
        readImg = new FileReader()
        readImg.readAsDataURL(img[0])

        readImg.onload = (e) => {
          this.changeImg = e.target.result
        }

        this.details.cellsA = img[0].type
        this.details.cellsB = ((img[0].size / 1048576).toFixed(2)) + ' MB'

        this.$emit('imageData', img[0])

        if (this.configImage.updateErrors) {
          this.stateTouch = true
          this.sendTouch()
        }
      }
    },

    sendTouch () {
      if (this.stateTouch) {
        if (typeof (this.reactiveDataImage) === 'string') {
          if (this.reactiveDataImage === null || this.reactiveDataImage.length <= 0) this.activeImage = false
        }
        this.$emit('imageTouch', true)
        this.stateTouch = false
      }
    }
  }
}
</script>

