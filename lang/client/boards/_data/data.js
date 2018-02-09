import {validateData} from '../../_fixData/validateData'

class hsFormHead extends validateData {
  constructor (data) {
    super()
    this.var_hsFormHead()

    let title = typeof (data.title) === 'string'
    let buttons = typeof (data.buttons) === 'object'
    let showReady = typeof (data.showReady) === 'object'

    if (title && buttons && showReady) {
      let hsFH_title = this.validateText(data.title, true)
      if (hsFH_title) this.hsFormHead.title = hsFH_title

      let hsFH_buttons_cleaner = this.validateText(data.buttons.cleaner, true)
      if (hsFH_buttons_cleaner) this.hsFormHead.buttons.cleaner = hsFH_buttons_cleaner
      let hsFH_buttons_ready = this.validateText(data.buttons.ready, true)
      if (hsFH_buttons_ready) this.hsFormHead.buttons.ready = hsFH_buttons_ready

      let hsFH_showReady = this.validateObject(data.showReady, 'object-array')
      if (hsFH_showReady) this.hsFormHead.showReady = hsFH_showReady
    }

  }

  var_hsFormHead () {
    this.hsFormHead = {
      title: null,
      buttons: {
        cleaner: null,
        ready: null
      },
      showReady: {}
    }
  }

  get_hsFormHead () {
    return {
      hsFormHead: this.hsFormHead
    }
  }
}

class hsFormHeadboard extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsFormHeadboard()

    let key = typeof (keyElement) === 'string'
    let hideHelp = typeof (data.hideHelp) === 'boolean'
    let title = typeof (data.title) === 'string'
    let message = typeof (data.message) === 'object'
    let buttonIcon = typeof (data.buttonIcon) === 'string'

    if (key && hideHelp && title && message && buttonIcon) {
      let hsFHb_key = this.validateText(keyElement, true)
      if (hsFHb_key) this.key = hsFHb_key

      let hsFHb_hideHelp = this.validateBoolean(data.hideHelp)
      if (hsFHb_hideHelp) this.hsFormHeadboard.hideHelp = hsFHb_hideHelp

      let hsFHb_title = this.validateText(data.title, true)
      if (hsFHb_title) this.hsFormHeadboard.title = hsFHb_title

      let hsFHb_message = this.validateArray(data.message, 'array-simple')
      if (hsFHb_message) this.hsFormHeadboard.message = hsFHb_message

      let hsFHb_buttonIcon = this.validateText(data.buttonIcon, true)
      if (hsFHb_buttonIcon) this.hsFormHeadboard.buttonIcon = hsFHb_buttonIcon
    }
  }

  var_hsFormHeadboard () {
    this.key = null,
    this.hsFormHeadboard = {
      hideHelp: false,
      title: null,
      message: [],
      buttonIcon: null
    }
  }

  get_hsFormHeadboard () {
    let hsFormHeadboard = {
      hsFormHeadboard: {}
    }
    hsFormHeadboard.hsFormHeadboard[this.key] = this.hsFormHeadboard

    return hsFormHeadboard
  }
}

class hsBoardMenu extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsBoardMenu()

    let key = typeof (keyElement) === 'string'
    let config = typeof (data.config) === 'object'

    if (key && config) {
      let hsBM_key = this.validateText(keyElement, true)
      if (hsBM_key) this.key = hsBM_key

      let hsBM_config_text_title = this.validateText(data.config.text.title, true)
      if (hsBM_config_text_title) this.hsBoardMenu.config.text.title = hsBM_config_text_title
      let hsBM_config_text_description = this.validateText(data.config.text.description, true)
      if (hsBM_config_text_description) this.hsBoardMenu.config.text.description = hsBM_config_text_description

      let hsBM_config_key = this.validateText(data.config.key, true)
      if (hsBM_config_key) this.hsBoardMenu.config.key = hsBM_config_key

      let hsBM_config_icon = this.validateText(data.config.icon, true)
      if (hsBM_config_icon) this.hsBoardMenu.config.icon = hsBM_config_icon

      let hsBM_config_children = this.validateArray(data.config.children, 'array-object')
      if (hsBM_config_children) this.hsBoardMenu.config.children = hsBM_config_children
    }
  }

  var_hsBoardMenu () {
    this.key = null
    this.hsBoardMenu = {
      config: {
        text: {
          title: null,
          description: null
        },
        key: null,
        icon: null,
        // children: [{title: null, icon: null, key: null}]
        children: []
      }
    }
  }

  get_hsBoardMenu () {
    let hsBoardMenu = {
      hsBoardMenu: {}
    }
    hsBoardMenu.hsBoardMenu[this.key] = this.hsBoardMenu

    return hsBoardMenu
  }
}

class hsInput extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsInput()

    let key = typeof (keyElement) === 'string'
    let config = typeof (data.config) === 'object'

    if (key && config) {
      let hsI_key = this.validateText(keyElement, true)
      if (hsI_key) this.key = hsI_key

      let hsI_config_id = this.validateText(data.config.id, true)
      if (hsI_config_id) this.hsInput.config.id = hsI_config_id

      let hsI_config_hideInput = this.validateBoolean(data.config.hideInput)
      if (hsI_config_hideInput) this.hsInput.config.hideInput = hsI_config_hideInput

      let hsI_config_typeInput = this.validateText(data.config.typeInput, true)
      if (hsI_config_typeInput) this.hsInput.config.typeInput = hsI_config_typeInput

      let hsI_config_titleInput = this.validateText(data.config.titleInput, true)
      if (hsI_config_titleInput) this.hsInput.config.titleInput = hsI_config_titleInput

      let hsI_config_headboard = this.validateText(data.config.headboard, true)
      if (hsI_config_headboard) this.hsInput.config.headboard = hsI_config_headboard

      let hsI_config_hiddenMessage = this.validateText(data.config.hiddenMessage, true)
      if (hsI_config_hiddenMessage) this.hsInput.config.hiddenMessage = hsI_config_hiddenMessage
    }
  }

  var_hsInput () {
    this.key = null,
    this.hsInput = {
      config: {
        id: null,
        hideInput: false,
        typeInput: null,
        titleInput: null,
        headboard: null,
        hiddenMessage: null
      }
    }
  }

  get_hsInput () {
    let hsInput = {
      hsInput: {}
    }
    hsInput.hsInput[this.key] = this.hsInput

    return hsInput
  }
}

class hsSelect extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsSelect()

    let key = typeof (keyElement) === 'string'
    let config = typeof(data.config) === 'object'

    if (key && config) {
      let hsS_key = this.validateText(keyElement, true)
      if (hsS_key) this.key = hsS_key

      let hsS_config_id = this.validateText(data.config.id, true)
      if (hsS_config_id) this.hsSelect.config.id = hsS_config_id

      let hsS_config_typeSelect = this.validateText(data.config.typeSelect, true)
      if (hsS_config_typeSelect) this.hsSelect.config.typeSelect = hsS_config_typeSelect

      let hsS_config_optionDataDefault = this.validateText(data.config.optionDataDefault, true)
      if (hsS_config_optionDataDefault) this.hsSelect.config.optionDataDefault = hsS_config_optionDataDefault

      let hsS_config_optionData = this.validateArray(data.config.optionData, 'array-simple')
      if (hsS_config_optionData) this.hsSelect.config.optionData = hsS_config_optionData

      let hsS_config_titleSelect = this.validateText(data.config.titleSelect, true)
      if (hsS_config_titleSelect) this.hsSelect.config.titleSelect = hsS_config_titleSelect

      let hsS_config_headboard = this.validateText(data.config.headboard, true)
      if (hsS_config_headboard) this.hsSelect.config.headboard = hsS_config_headboard

      let hsS_config_hiddenMessage = this.validateText(data.config.hiddenMessage, true)
      if (hsS_config_hiddenMessage) this.hsSelect.config.hiddenMessage = hsS_config_hiddenMessage
    }
  }

  var_hsSelect () {
    this.key = null
    this.hsSelect = {
      config: {
        id: null,
        typeSelect: null,
        optionDataDefault: null,
        optionData: [],
        titleSelect: null,
        headboard: null,
        hiddenMessage: null
      }
    }
  }

  get_hsSelect () {
    let hsSelect = {
      hsSelect: {}
    }
    hsSelect.hsSelect[this.key] = this.hsSelect

    return hsSelect
  }
}

class hsCheckbox extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsCheckbox()

    let key = typeof (keyElement) === 'string'
    let config = typeof (data.config) === 'object'

    if (key && config) {
      let hsC_key = this.validateText(keyElement, true)
      if (hsC_key) this.key = hsC_key

      let hsC_config_id = this.validateText(data.config.id, true)
      if (hsC_config_id) this.hsCheckbox.config.id = hsC_config_id

      let hsC_config_updateErrors = this.validateBoolean(data.config.updateErrors)
      if (hsC_config_updateErrors) this.hsCheckbox.config.updateErrors = hsC_config_updateErrors

      let hsC_config_checkChosen = this.validateText(data.config.checkChosen, true)
      if (hsC_config_checkChosen) this.hsCheckbox.config.checkChosen = hsC_config_checkChosen

      let hsC_config_checkList = this.validateArray(data.config.checkList, 'array-simple')
      if (hsC_config_checkList) this.hsCheckbox.config.checkList = hsC_config_checkList

      let hsC_config_titleCheck = this.validateText(data.config.titleCheck, true)
      if (hsC_config_titleCheck) this.hsCheckbox.config.titleCheck = hsC_config_titleCheck

      let hsC_config_headboard = this.validateText(data.config.headboard, true)
      if (hsC_config_headboard) this.hsCheckbox.config.headboard = hsC_config_headboard

      let hsC_config_hiddenMessage = this.validateText(data.config.hiddenMessage, true)
      if (hsC_config_hiddenMessage) this.hsCheckbox.config.hiddenMessage = hsC_config_hiddenMessage
    }
  }

  var_hsCheckbox () {
    this.key = null
    this.hsCheckbox = {
      config: {
        id: null,
        updateErrors: false,
        checkChosen: null,
        checkList: [],
        titleCheck: null,
        headboard: null,
        hiddenMessage: null
      }
    }
  }

  get_hsCheckbox () {
    let hsCheckbox = {
      hsCheckbox: {}
    }
    hsCheckbox.hsCheckbox[this.key] = this.hsCheckbox

    return hsCheckbox
  }
}

class hsImage extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsImage()

    let key = typeof (keyElement) === 'string'
    let config = typeof (data.config) === 'object'

    if (key && config) {
      let hsIm_key = this.validateText(keyElement, true)
      if (hsIm_key) this.key = hsIm_key

      let hsIm_config_id = this.validateText(data.config.id, true)
      if (hsIm_config_id) this.hsImage.config.id = hsIm_config_id

      let hsIm_config_defaultImage = this.validateText(data.config.defaultImage, true)
      if (hsIm_config_defaultImage) this.hsImage.config.defaultImage = hsIm_config_defaultImage

      let hsIm_config_titleImage = this.validateText(data.config.titleImage, true)
      if (hsIm_config_titleImage) this.hsImage.config.titleImage = hsIm_config_titleImage

      let hsIm_config_headboard = this.validateText(data.config.headboard, true)
      if (hsIm_config_headboard) this.hsImage.config.headboard = hsIm_config_headboard

      let hsIm_config_hiddenMessage = this.validateText(data.config.hiddenMessage, true)
      if (hsIm_config_hiddenMessage) this.hsImage.config.hiddenMessage = hsIm_config_hiddenMessage
    }
  }

  var_hsImage () {
    this.key = null
    this.hsImage = {
      config: {
        id: null,
        defaultImage: null,
        titleImage: null,
        headboard: null,
        hiddenMessage: null
      }
    }
  }

  get_hsImage () {
    let hsImage = {
      hsImage: {}
    }
    hsImage.hsImage[this.key] = this.hsImage

    return hsImage
  }
}

class hsAlertModal extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsAlertModal()

    let key = typeof (keyElement) === 'string'
    let configModal = typeof (data.configModal) === 'object'
    let configAlertModal = typeof (data.configAlertModal) === 'object'

    if (key && configModal && configAlertModal) {
      let hsAM_key = this.validateText(keyElement, true)
      if (hsAM_key) this.key = hsAM_key

      let hsAM_configModal_id = this.validateText(data.configModal.id, true)
      if (hsAM_configModal_id) this.hsAlertModal.configModal.id = hsAM_configModal_id

      let hsAM_configModal_transition = this.validateText(data.configModal.transition, true)
      if (hsAM_configModal_transition) this.hsAlertModal.configModal.transition = hsAM_configModal_transition

      let hsAM_configModal_disableExit = this.validateBoolean(data.configModal.disableExit)
      if (hsAM_configModal_disableExit) this.hsAlertModal.configModal.disableExit = hsAM_configModal_disableExit

      let hsAM_configModal_head_headAlign = this.validateText(data.configModal.head.headAlign, true)
      if (hsAM_configModal_head_headAlign) this.hsAlertModal.configModal.head.headAlign = hsAM_configModal_head_headAlign
      let hsAM_configModal_head_title = this.validateText(data.configModal.head.title, true)
      if (hsAM_configModal_head_title) this.hsAlertModal.configModal.head.title = hsAM_configModal_head_title
      let hsAM_configModal_head_subtitle = this.validateText(data.configModal.head.subtitle, true)
      if (hsAM_configModal_head_subtitle) this.hsAlertModal.configModal.head.subtitle = hsAM_configModal_head_subtitle

      let hsAM_configModal_timer_time = this.validateNumber(data.configModal.timer.time)
      if (hsAM_configModal_timer_time) this.hsAlertModal.configModal.timer.time = hsAM_configModal_timer_time
      let hsAM_configModal_timer_redirect_name = this.validateText(data.configModal.timer.redirect.name, true)
      if (hsAM_configModal_timer_redirect_name) this.hsAlertModal.configModal.timer.redirect.name = hsAM_configModal_timer_redirect_name
      let hsAM_configModal_timer_redirect_route = this.validateText(data.configModal.timer.redirect.route, true)
      if (hsAM_configModal_timer_redirect_route) this.hsAlertModal.configModal.timer.redirect.route = hsAM_configModal_timer_redirect_route

      let hsAM_configAlertModal_type = this.validateText(data.configAlertModal.type, true)
      if (hsAM_configAlertModal_type) this.hsAlertModal.configAlertModal.type = hsAM_configAlertModal_type

      let hsAM_configAlertModal_body_head = this.validateText(data.configAlertModal.body.head, true)
      if (hsAM_configAlertModal_body_head) this.hsAlertModal.configAlertModal.body.head = hsAM_configAlertModal_body_head
      let hsAM_configAlertModal_body_body = this.validateText(data.configAlertModal.body.body, true)
      if (hsAM_configAlertModal_body_body) this.hsAlertModal.configAlertModal.body.body = hsAM_configAlertModal_body_body
      let hsAM_configAlertModal_body_footer = this.validateText(data.configAlertModal.body.footer, true)
      if (hsAM_configAlertModal_body_footer) this.hsAlertModal.configAlertModal.body.footer = hsAM_configAlertModal_body_footer
    }
  }

  var_hsAlertModal () {
    this.key = null
    this.hsAlertModal = {
      configModal: {
        id: null,
        transition: null,
        disableExit: false,
        head: {
          headAlign: null,
          title: null,
          subtitle: null
        },
        timer: {
          time: 0,
          redirect: {
            name: null,
            route: null
          }
        }
      },
      configAlertModal: {
        type: null,
        body: {
          head: null,
          body: null,
          footer: null
        }
      }
    }
  }

  get_hsAlertModal () {
    let hsAlertModal = {
      hsAlertModal: {}
    }
    hsAlertModal.hsAlertModal[this.key] = this.hsAlertModal

    return hsAlertModal
  }
}

class hsSimpleMessage extends validateData {
  constructor (data) {
    super()
    this.var_hsSimpleMessage()

    let message = typeof (data) === 'object'

    if (message) {
      let hsSM_message = this.validateText(data.message, true)
      if (hsSM_message) this.hsSimpleMessage.message = hsSM_message
    }
  }

  var_hsSimpleMessage () {
    this.hsSimpleMessage = {
      message: null
    }
  }

  get_hsSimpleMessage () {
    return {
      hsSimpleMessage: this.hsSimpleMessage
    }
  }
}

export {
  hsFormHead,
  hsFormHeadboard,
  hsBoardMenu,
  hsInput,
  hsSelect,
  hsCheckbox,
  hsImage,
  hsAlertModal,
  hsSimpleMessage
}
