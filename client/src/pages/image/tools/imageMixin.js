import {mainMachineData, updateMachineData, checkMachineData, resetMachineData, serverMachineData} from '../../tools/machineData'
import {valHS} from '../../tools/validator'
import imageRequest from './imageRequest'

const requestData = {
  uploadBasic: {
    async request_image_chest (response) {
      try {
        const chestData = await imageRequest.imageRequest_get_chest()
        let chestResponse = null

        switch (response) {
          case 'array_simple':
            chestResponse = chestData.data.map(chest => chest.chest)
            break
        }

        return chestResponse
      } catch (error) {
        if (typeof (error.response) !== 'undefined') {
          switch (error.response.status) {
            case 400:
              this.errorServer = error.response.data.errors
              break
          }
        } else console.error(error)
        return null
      }
    }
  }
}

const updatesData = {
  uploadBasic: {
    updateImage (data) {
      let updateMain = ['picture', 'image', data]

      this.updateMainObject(...updateMain)

      let prepareName = data.name.split('.')
      prepareName.pop()

      this.updateTitle(prepareName.toString(), true)
      this.$busForm.$emit('hsInput_activeInput', {id: 'titleInput', state: true})
    },

    updateTitle (data, error) {
      let updateMain = ['basic', 'title', data]

      this.updateMain(...updateMain)

      if (error) this.checkTitle()
    },

    updateCopyright (data) {
      let updateMain = ['basic', 'copyright', data]

      this.updateMain(...updateMain)
    },

    updateChest (data) {
      let updateMain = ['organization', 'chest', data]

      this.updateMainSelect(...updateMain)
    }
  }
}

const checksData = {
  uploadBasic: {
    checkImage () {
      let dataValue = this.form.picture.image.value
      let vm = this
      let err

      function sendError (err) {
        vm.form.picture.image.error[0] = err
        vm.$busForm.$emit('formMixins_successIcon', {id: 'imageImage', state: false})
      }

      this.form.picture.image.error = []

      err = valHS.checkEmpty(dataValue)
      if (err !== null) sendError(err)
      else {
        err = valHS.checkNumbers('lower', dataValue.size, 2097152, 'B')
        if (err !== null) sendError(err)
        else {
          const typeImg = ['jpg', 'jpeg', 'png', 'gif']
          const extension = dataValue.name.split('.').pop()
          err = valHS.checkExtensions('image', typeImg, extension)
          if (err !== null) sendError(err)
          else this.$busForm.$emit('formMixins_successIcon', {id: 'imageImage', state: true})
        }
      }
    },

    checkTitle () {
      let checkBasicTitle = ['basic', 'titleInput', 'title', 5, 40]

      this.checkBasicMain(...checkBasicTitle)
    },

    checkCopyright () {
      let checkBasicCopyright = ['basic', 'copyrightTextarea', 'copyright', 5, 255]

      this.checkBasicMain(...checkBasicCopyright)
    },

    checkChest () {
      let checkBasicChest = ['organization', 'chestChest', 'chest', 3, 25]

      this.checkBasicMain(...checkBasicChest)
    }
  }
}

const validateData = {
  uploadBasic: {
    validatePictureErrors () {
      if (this.form.picture.image.error.length) this.form.picture.status = true
    },

    validatePicture () {
      this.form.picture.status = false

      this.checkImage()

      this.validatePictureErrors()
    },

    validateBasicErrors () {
      if (this.form.basic.title.error.length || this.form.basic.copyright.error.length) this.form.basic.status = true
    },

    validateBasic () {
      this.form.basic.status = false

      this.checkTitle()
      this.checkCopyright()

      this.validateBasicErrors()
    },

    validateOrganizationErrors () {
      if (this.form.organization.chest.error.length) this.form.organization.status = true
    },

    validateOrganization () {
      this.form.organization.status = false

      this.checkChest()

      this.validateOrganizationErrors()
    }
  }
}

const cleanerData = {
  uploadBasic: {
    cleanerPicture (cleaner, errors) {
      let cleanerPicture = ['picture', 'image']
      if (cleaner) {
        this.resetMainData('string', ...cleanerPicture)
        this.$busForm.$emit('hsImage_changeImg', {id: 'imageImage', image: null})
      }
      if (errors) this.resetMainErrors(...cleanerPicture)
    },

    cleanerBasic (cleaner, errors) {
      let cleanerBasic = ['basic', 'title', 'copyright']
      if (cleaner) this.resetMainData('string', ...cleanerBasic)
      if (errors) this.resetMainErrors(...cleanerBasic)
    },

    cleanerOrganization (cleaner, errors) {
      let cleanerOrganization = ['organization', 'chest']
      if (cleaner) {
        this.resetMainData('string', ...cleanerOrganization)
        this.$busForm.$emit('hsChest_statusButton', {id: 'inputChestChest', direct: 'input'})
      }
      if (errors) this.resetMainErrors(...cleanerOrganization)
    },

    cleaner () {
      this.cleanerPicture(true, true)
      this.cleanerBasic(true, true)
      this.cleanerOrganization(true, true)
    }
  }
}

export const uploadBasicConstructor = {
  mixins: [mainMachineData, updateMachineData, checkMachineData, resetMachineData, serverMachineData],
  methods: Object.assign(requestData.uploadBasic, updatesData.uploadBasic, checksData.uploadBasic, validateData.uploadBasic, cleanerData.uploadBasic)
}
