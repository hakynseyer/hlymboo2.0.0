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

class hsTextarea extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsTextarea()

    let key = typeof (keyElement)  === 'string'
    let config = typeof (data.config) === 'object'

    if (key && config) {
      let hsTA_key = this.validateText(keyElement, true)
      if (hsTA_key) this.key = hsTA_key

      let hsTA_config_id = this.validateText(data.config.id, true)
      if (hsTA_config_id) this.hsTextarea.config.id = hsTA_config_id

      let hsTA_config_readOnly = this.validateBoolean(data.config.readOnly)
      if (hsTA_config_readOnly) this.hsTextarea.config.readOnly = hsTA_config_readOnly

      let hsTA_config_titleTextarea = this.validateText(data.config.titleTextarea, true)
      if (hsTA_config_titleTextarea) this.hsTextarea.config.titleTextarea = hsTA_config_titleTextarea

      let hsTA_config_headboard = this.validateText(data.config.headboard, true)
      if (hsTA_config_headboard) this.hsTextarea.config.headboard = hsTA_config_headboard

      let hsTA_config_hiddenMessage = this.validateText(data.config.hiddenMessage, true)
      if (hsTA_config_hiddenMessage) this.hsTextarea.config.hiddenMessage = hsTA_config_hiddenMessage
    }
  }

  var_hsTextarea () {
    this.key = null,
    this.hsTextarea = {
      config: {
        id: null,
        readOnly: false,
        titleTextarea: null,
        headboard: null,
        hiddenMessage: null
      }
    }
  }

  get_hsTextarea () {
    let hsTextarea = {
      hsTextarea: {}
    }
    hsTextarea.hsTextarea[this.key] = this.hsTextarea

    return hsTextarea
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

class hsChest extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsChest()

    let key = typeof (keyElement) === 'string'
    let config = typeof (data.config) === 'object'

    if (key && config) {
      let hsCh_key = this.validateText(keyElement, true)
      if (hsCh_key) this.key = hsCh_key

      let hsCh_config_id = this.validateText(data.config.id, true)
      if (hsCh_config_id) this.hsChest.config.id = hsCh_config_id

      let hsCh_config_idInput = this.validateText(data.config.idInput, true)
      if (hsCh_config_idInput) this.hsChest.config.idInput = hsCh_config_idInput

      let hsCh_config_idSelect = this.validateText(data.config.idSelect, true)
      if (hsCh_config_idSelect) this.hsChest.config.idSelect = hsCh_config_idSelect

      let hsCh_config_typeSelect = this.validateText(data.config.typeSelect, true)
      if (hsCh_config_typeSelect) this.hsChest.config.typeSelect = hsCh_config_typeSelect

      let hsCh_config_optionData = this.validateArray(data.config.optionData, 'array-simple')
      if (hsCh_config_optionData) this.hsChest.config.optionData = hsCh_config_optionData

      let hsCh_config_titleChest = this.validateText(data.config.titleChest, true)
      if (hsCh_config_titleChest) this.hsChest.config.titleChest = hsCh_config_titleChest

      let hsCh_config_headboard = this.validateText(data.config.headboard, true)
      if (hsCh_config_headboard) this.hsChest.config.headboard = hsCh_config_headboard

      let hsCh_config_hiddenMessage = this.validateText(data.config.hiddenMessage, true)
      if (hsCh_config_hiddenMessage) this.hsChest.config.hiddenMessage = hsCh_config_hiddenMessage
    }
  }

  var_hsChest () {
    this.key = null
    this.hsChest = {
      config: {
        id: null,
        idInput: null,
        idSelect: null,
        typeSelect: null,
        optionData: [],
        titleChest: null,
        headboard: null,
        hiddenMessage: null
      }
    }
  }

  get_hsChest () {
    let hsChest = {
      hsChest: {}
    }
    hsChest.hsChest[this.key] = this.hsChest

    return hsChest
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

      let hsIm_config_updateErrors = this.validateBoolean(data.config.updateErrors)
      if (hsIm_config_updateErrors) this.hsImage.config.updateErrors = hsIm_config_updateErrors

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
        updateErrors: false,
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

class hsSmallModal extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsSmallModal()

    let key = typeof (keyElement) === 'string'
    let configSmallModal = typeof (data.configSmallModal) === 'object'

    if (key && configSmallModal) {
      let hsSM_key = this.validateText(keyElement, true)
      if (hsSM_key) this.key = hsSM_key

      let hsSM_configSmallModal_id = this.validateText(data.configSmallModal.id, true)
      if (hsSM_configSmallModal_id) this.hsSmallModal.configSmallModal.id = hsSM_configSmallModal_id

      let hsSM_configSmallModal_type = this.validateText(data.configSmallModal.type, true)
      if (hsSM_configSmallModal_type) this.hsSmallModal.configSmallModal.type = hsSM_configSmallModal_type

      let hsSM_configSmallModal_title = this.validateText(data.configSmallModal.title, true)
      if (hsSM_configSmallModal_title) this.hsSmallModal.configSmallModal.title = hsSM_configSmallModal_title

      let hsSM_configSmallModal_body = this.validateText(data.configSmallModal.body, true)
      if (hsSM_configSmallModal_body) this.hsSmallModal.configSmallModal.body = hsSM_configSmallModal_body

      let hsSM_configSmallModal_timer_time = this.validateNumber(data.configSmallModal.timer.time)
      if (hsSM_configSmallModal_timer_time) this.hsSmallModal.configSmallModal.timer.time = hsSM_configSmallModal_timer_time
    }
  }

  var_hsSmallModal () {
    this.key = null
    this.hsSmallModal = {
      configSmallModal: {
        id: null,
        type: null,
        title: null,
        body: null,
        timer: {
          time: 0
        }
      }
    }
  }

  get_hsSmallModal () {
    let hsSmallModal = {
      hsSmallModal: {}
    }
    hsSmallModal.hsSmallModal[this.key] = this.hsSmallModal

    return hsSmallModal
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

class hsList extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsList()

    let key = typeof (keyElement === 'string')
    let configList = typeof (data.configList) === 'object'

    if (key && configList) {
      let hsL_key = this.validateText(keyElement, true)
      if (hsL_key) this.key = hsL_key

      let hsL_configList_sendList_mode = this.validateText(data.configList.sendList.mode, true)
      if (hsL_configList_sendList_mode) this.hsList.configList.sendList.mode = hsL_configList_sendList_mode

      let hsL_configList_sendList_nameEvent = this.validateText(data.configList.sendList.nameEvent, true)
      if (hsL_configList_sendList_nameEvent) this.hsList.configList.sendList.nameEvent = hsL_configList_sendList_nameEvent
      // [i] Monitorear si no llega a dar un conflicto con los datos Linea de Abajo
      let hsL_configList_dataList = this.validateArray(data.configList.dataList, 'array-object')
      if (hsL_configList_dataList) this.hsList.configList.dataList = hsL_configList_dataList
    }
  }

  var_hsList () {
    this.key = null
    this.hsList = {
      configList: {
        sendList: {
          mode: null,
          nameEvent: null
        },
        dataList: []
      }
    }
  }

  get_hsList () {
    let hsList = {
      hsList: {}
    }
    hsList.hsList[this.key] = this.hsList

    return hsList
  }
}

class hsFilter extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsFilter()

    let key = typeof (keyElement) === 'string'
    let configFilter = typeof (data.configFilter) === 'object'

    if (key, configFilter) {
      let hsF_key = this.validateText(keyElement, true)
      if (hsF_key) this.key = hsF_key

      let hsF_configFilter_ids_filterButton = this.validateText(data.configFilter.ids.filterButton, true)
      if (hsF_configFilter_ids_filterButton) this.hsFilter.configFilter.ids.filterButton = hsF_configFilter_ids_filterButton
      let hsF_configFilter_ids_orderButton = this.validateText(data.configFilter.ids.orderButton, true)
      if (hsF_configFilter_ids_orderButton) this.hsFilter.configFilter.ids.orderButton = hsF_configFilter_ids_orderButton

      let hsF_configFilter_select = this.validateArray(data.configFilter.select, 'array-object')
      if (hsF_configFilter_select) this.hsFilter.configFilter.select = hsF_configFilter_select

      let hsF_configFilter_text_placeholder = this.validateText(data.configFilter.text.placeholder, true)
      if (hsF_configFilter_text_placeholder) this.hsFilter.configFilter.text.placeholder = hsF_configFilter_text_placeholder
      let hsF_configFilter_text_key = this.validateArray(data.configFilter.text.key, 'array-simple')
      if (hsF_configFilter_text_key) this.hsFilter.configFilter.text.key = hsF_configFilter_text_key
      let hsF_configFilter_text_buttons = this.validateArray(data.configFilter.text.buttons, 'array-object')
      if (hsF_configFilter_text_buttons) this.hsFilter.configFilter.text.buttons = hsF_configFilter_text_buttons

      let hsF_configFilter_order = this.validateArray(data.configFilter.order, 'array-object')
      if (hsF_configFilter_order) this.hsFilter.configFilter.order = hsF_configFilter_order
    }
  }

  var_hsFilter () {
    this.key = null
    this.hsFilter = {
      configFilter: {
        ids: {
          filterButton: null,
          orderButton: null
        },
        select: [],
        text: {
          placeholder: null,
          key: [],
          buttons: []
        },
        order: []
      }
    }
  }

  get_hsFilter () {
    let hsFilter = {
      hsFilter: {}
    }
    hsFilter.hsFilter[this.key] = this.hsFilter

    return hsFilter
  }
}

class hsPagination extends validateData {
  constructor (keyElement, data) {
    super()
    this.var_hsPagination()

    let key = typeof (keyElement) === 'string'
    let configPagination = typeof (data.configPagination) === 'object'

    if (key && configPagination) {
      let hsP = this.validateText(keyElement, true)
      if (hsP) this.key = hsP

      let hsP_configPagination_id = this.validateText(data.configPagination.id, true)
      if (hsP_configPagination_id) this.hsPagination.configPagination.id = hsP_configPagination_id

      let hsP_configPagination_information_label = this.validateText(data.configPagination.information.label, true)
      if (hsP_configPagination_information_label) this.hsPagination.configPagination.information.label = hsP_configPagination_information_label
      let hsP_configPagination_information_limitImages = this.validateNumber(data.configPagination.information.limitImages)
      if (hsP_configPagination_information_limitImages) this.hsPagination.configPagination.information.limitImages = hsP_configPagination_information_limitImages
      let hsP_configPagination_information_total = this.validateNumber(data.configPagination.information.total)
      if (hsP_configPagination_information_total) this.hsPagination.configPagination.information.total = hsP_configPagination_information_total

      let hsP_configPagination_buttons_buttons = this.validateNumber(data.configPagination.buttons.buttons)
      if (hsP_configPagination_buttons_buttons) this.hsPagination.configPagination.buttons.buttons = hsP_configPagination_buttons_buttons
      let hsP_configPagination_buttons_currentPage = this.validateNumber(data.configPagination.buttons.currentPage)
      if (hsP_configPagination_buttons_currentPage) this.hsPagination.configPagination.buttons.currentPage = hsP_configPagination_buttons_currentPage
      let hsP_configPagination_buttons_pages = this.validateNumber(data.configPagination.buttons.pages)
      if (hsP_configPagination_buttons_pages) this.hsPagination.configPagination.buttons.pages = hsP_configPagination_buttons_pages
    }
  }

  var_hsPagination () {
    this.key = null
    this.hsPagination = {
      configPagination: {
        id: null,
        information: {
          label: null,
          limitImages: null,
          total: null
        },
        buttons: {
          buttons: null,
          currentPage: null,
          pages: null
        }
      }
    }
  }

  get_hsPagination () {
    let hsPagination = {
      hsPagination: {}
    }
    hsPagination.hsPagination[this.key] = this.hsPagination

    return hsPagination
  }
}

export {
  hsFormHead,
  hsFormHeadboard,
  hsInput,
  hsTextarea,
  hsSelect,
  hsChest,
  hsCheckbox,
  hsImage,
  hsAlertModal,
  hsSmallModal,
  hsSimpleMessage,
  hsBoardMenu,
  hsList,
  hsFilter,
  hsPagination
}
