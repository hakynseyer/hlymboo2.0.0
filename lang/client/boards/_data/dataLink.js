import {hsFormHead, hsFormHeadboard, hsInput, hsSelect, hsCheckbox, hsImage, hsAlertModal, hsSimpleMessage, hsBoardMenu} from './data'

export const dataLink = (data) => {
  switch(data.HS) {
    case 'hsFormHead':
      delete data.HS

      return {
        data () {
          return {
            lang: new hsFormHead(data).get_hsFormHead()
          }
        }
      }
      break
    case 'hsFormHeadboard':
      delete data.HS
      let keys_hsFHb = Object.keys(data)
      let data_hsFHb = {hsFormHeadboard: {}}

      keys_hsFHb.forEach(key => {
        data_hsFHb.hsFormHeadboard[key] = new hsFormHeadboard(key, data[key]).get_hsFormHeadboard().hsFormHeadboard[key]
      })

      return {
        data () {
          return {
            lang: data_hsFHb
          }
        }
      }
      break
    case 'hsInput':
      delete data.HS
      let keys_hsI = Object.keys(data)
      let data_hsI = {hsInput: {}}

      keys_hsI.forEach(key => {
        data_hsI.hsInput[key] = new hsInput(key, data[key]).get_hsInput().hsInput[key]
      })

      return {
        data () {
          return {
            lang: data_hsI
          }
        }
      }
      break
    case 'hsSelect':
      delete data.HS
      let keys_hsS = Object.keys(data)
      let data_hsS = {hsSelect: {}}

      keys_hsS.forEach(key => {
        data_hsS.hsSelect[key] = new hsSelect(key, data[key]).get_hsSelect().hsSelect[key]
      })

      return {
        data () {
          return {
            lang: data_hsS
          }
        }
      }
      break
    case 'hsCheckbox':
      delete data.HS
      let keys_hsC = Object.keys(data)
      let data_hsC = {hsCheckbox: {}}

      keys_hsC.forEach(key => {
        data_hsC.hsCheckbox[key] = new hsCheckbox(key, data[key]).get_hsCheckbox().hsCheckbox[key]
      })

      return {
        data () {
          return {
            lang: data_hsC
          }
        }
      }
      break
    case 'hsImage':
      delete data.HS
      let keys_hsIm = Object.keys(data)
      let data_hsIm = {hsImage: {}}

      keys_hsIm.forEach(key => {
        data_hsIm.hsImage[key] = new hsImage(key, data[key]).get_hsImage().hsImage[key]
      })

      return {
        data () {
          return {
            lang: data_hsIm
          }
        }
      }
      break
    case 'hsAlertModal':
      delete data.HS
      let keys_hsAM = Object.keys(data)
      let data_hsAM = {hsAlertModal: {}}

      keys_hsAM.forEach(key => {
        data_hsAM.hsAlertModal[key] = new hsAlertModal(key, data[key]).get_hsAlertModal().hsAlertModal[key]
      })

      return {
        data () {
          return {
            lang: data_hsAM
          }
        }
      }
      break
    case 'hsSimpleMessage':
      delete data.HS

      return {
        data () {
          return {
            lang: new hsSimpleMessage(data).get_hsSimpleMessage()
          }
        }
      }
      break
    case 'hsBoardMenu':
      delete data.HS
      let keys_hsBM = Object.keys(data)
      let data_hsBM = {hsBoardMenu: {}}

      keys_hsBM.forEach(key => {
        data_hsBM.hsBoardMenu[key] = new hsBoardMenu(key, data[key]).get_hsBoardMenu().hsBoardMenu[key]
      })

      return {
        data () {
          return {
            lang: data_hsBM
          }
        }
      }
      break
    default:
      return {
        data () {
          return {
            lang: null
          }
        }
      }
  }
}
