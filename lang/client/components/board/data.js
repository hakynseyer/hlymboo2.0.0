import {validateData} from '../../_fixData/validateData'

class hsBoardMenu extends validateData {
  constructor (data) {
    super()
    this.var_hsBoardMenu()

    let pocketInformation = typeof (data.pocketInformation) === 'object'

    if (pocketInformation) {
      let hsBM_pocketInformation_created = this.validateText(data.pocketInformation.created, true)
      if (hsBM_pocketInformation_created) this.hsBoardMenu.pocketInformation.created = hsBM_pocketInformation_created

      let hsBM_pocketInformation_updated = this.validateText(data.pocketInformation.updated, true)
      if (hsBM_pocketInformation_updated) this.hsBoardMenu.pocketInformation.updated = hsBM_pocketInformation_updated
    }
  }

  var_hsBoardMenu () {
    this.hsBoardMenu = {
      pocketInformation: {
        created: null,
        updated: null
      }
    }
  }

  get_hsBoardMenu () {
    return {
      hsBoardMenu: this.hsBoardMenu
    }
  }
}

export {
  hsBoardMenu
}
