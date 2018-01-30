import {_treatment} from '../../_treatment'

const hsBoardMenuData = {
  data () {
    return {
      lang: {
        hsBoardMenu: {
          config: {
            elements: {
              new: {
                text: {
                  title: null,
                  description: null
                },
                key: 'UploadBasic',
                icon: 'picture-o'
              },
              search: {
                text: {
                  title: null,
                  description: null
                },
                key: 'Add',
                icon: 'search',
                children: [
                  {title: null, icon: 'camera', key: 'editImageBasic'}
                ]
              }
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsBoardMenu (dataLink) {
      this.lang.hsBoardMenu.config.elements.new.text.title = _treatment.dataTreatmentSimple(dataLink.hsBM_new_title)
      this.lang.hsBoardMenu.config.elements.new.text.description = _treatment.dataTreatmentSimple(dataLink.hsBM_new_description)

      this.lang.hsBoardMenu.config.elements.search.text.title = _treatment.dataTreatmentSimple(dataLink.hsBM_search_title)
      this.lang.hsBoardMenu.config.elements.search.text.description = _treatment.dataTreatmentSimple(dataLink.hsBM_search_description)
      this.lang.hsBoardMenu.config.elements.search.children[0].title = _treatment.dataTreatmentSimple(dataLink.hsBM_search_children_0_title)
    }
  }
}

const hsFormHeadData = {
  data () {
    return {
      lang: {
        hsFormHead: {
          title: null,
          buttons: {
            cleaner: null,
            ready: null
          },
          showReady: {}
        }
      }
    }
  },
  methods: {
    dataLink_hsFormHead (dataLink) {
      this.lang.hsFormHead.title = _treatment.dataTreatmentSimple(dataLink.hsFH_title)

      this.lang.hsFormHead.buttons.cleaner = _treatment.dataTreatmentSimple(dataLink.hsFH_buttons_cleaner)
      this.lang.hsFormHead.buttons.ready = _treatment.dataTreatmentSimple(dataLink.hsFH_buttons_ready)

      this.lang.hsFormHead.showReady = dataLink.hsFH_showReady
    }
  }
}

const hsFormHeadboardData = {
  data () {
    return {
      lang: {
        hsFormHeadboard: {
          picture: {
            hideHelp: false,
            title: null,
            message: [],
            buttonIcon: 'trash-o'
          },
          basic: {
            hideHelp: false,
            title: null,
            message: [],
            buttonIcon: 'trash-o'
          },
          organization: {
            hideHelp: false,
            title: null,
            message: [],
            buttonIcon: 'trash-o'
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsFormHeadboard (dataLink) {
      this.lang.hsFormHeadboard.picture.title = _treatment.dataTreatmentSimple(dataLink.hsFH_picture_title)
      this.lang.hsFormHeadboard.picture.message = _treatment.dataTreatmentArray(dataLink.hsFH_picture_message)

      this.lang.hsFormHeadboard.basic.title = _treatment.dataTreatmentSimple(dataLink.hsFH_basic_title)
      this.lang.hsFormHeadboard.basic.message = _treatment.dataTreatmentArray(dataLink.hsFH_basic_message)

      this.lang.hsFormHeadboard.organization.title = _treatment.dataTreatmentSimple(dataLink.hsFH_organization_title)
      this.lang.hsFormHeadboard.organization.message = _treatment.dataTreatmentArray(dataLink.hsFH_organization_message)
    }
  }
}

const hsInputData = {
  data () {
    return {
      lang: {
        hsInput: {
          title: {
            config: {
              id: 'titleInput',
              hideInput: false,
              typeInput: 'text',
              titleInput: null,
              headBoard: null,
              hiddenMessage: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsInput (dataLink) {
      this.lang.hsInput.title.config.titleInput = _treatment.dataTreatmentSimple(dataLink.hsI_title_titleInput)
      this.lang.hsInput.title.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsI_title_headBoard)
      this.lang.hsInput.title.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsI_title_hiddenMessage)
    }
  }
}

const hsImageData = {
  data () {
    return {
      lang: {
        hsImage: {
          image: {
            config: {
              id: 'imageImage',
              defaultImage: null,
              titleImage: null,
              headBoard: null,
              hiddenMessage: null
            }
          }
        }
      }
    }
  },
  methods: {
    dataLink_hsImage (dataLink) {
      this.lang.hsImage.image.config.defaultImage = _treatment.dataTreatmentSimple(dataLink.hsI_image_defaultImage)
      this.lang.hsImage.image.config.titleImage = _treatment.dataTreatmentSimple(dataLink.hsI_image_titleImage)
      this.lang.hsImage.image.config.headBoard = _treatment.dataTreatmentSimple(dataLink.hsI_image_headBoard)
      this.lang.hsImage.image.config.hiddenMessage = _treatment.dataTreatmentSimple(dataLink.hsI_image_hiddenMessage)
    }
  }
}

export {
  hsBoardMenuData,
  hsFormHeadData,
  hsFormHeadboardData,
  hsInputData,
  hsImageData
}
