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
import hiddenMessageInputs from '@/components/_support/hiddenMessageInputs'

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

  created () {
    if (this.reactiveDataImage !== null) this.activeImage = true
  },

  mounted () {
    this.$busForm.$on('hsImage_activeImage', data => {
      if (typeof (data.id) === 'string' && typeof (data.state) === 'boolean') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.activeImage = data.state
      } else if (typeof (data.state) === 'boolean') this.activeImage = data.state
    })

    this.$busForm.$on('hsImage_changeImg', image => {
      let changeImage = new Promise(resolve => {
        if (image !== null) {
          this.changeImg = require(`@/assets/img/${image}`)
        }
        resolve()
      })
      changeImage.then(() => {
        this.fixChangeImg()
      })
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
      changeImg: null
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
        if (this.reactiveDataImage !== null) {
          return require(`@/assets/img/${this.reactiveDataImage}`)
        } else if (this.configImage.defaultImage === 'HakynSeyer_Hpan503') return require(`@/assets/img/server/inputImg/subir_imagen.svg`)
      }
    }
  },
  methods: {
    stateImage () {
      if (this.reactiveDataImage === null && !this.activeImage) this.activeImage = true

      this.$busForm.$emit('hsFormHeadBoard_showMessage' + this.configImage.headboard, false)
    },

    loadImage () {
      document.getElementById(this.configImage.titleImage).click()
    },

    changeDefaultImage (e) {
      this.$busForm.$emit('hsFormHeadBoard_showMessage' + this.configImage.headboard, false)

      const img = e.target.files
      let readImg

      if (img.length) {
        readImg = new FileReader()
        readImg.readAsDataURL(img[0])

        readImg.onload = (e) => {
          this.changeImg = e.target.result
        }

        this.$emit('imageData', img[0])
      }
    }
  }
}
</script>

