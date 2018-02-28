import {hsFormHead, hsFormHeadboard, hsInput, hsTextarea, hsSelect, hsChest, hsCheckbox, hsImage, hsAlertModal, hsSmallModal, hsSimpleMessage, hsBoardMenu, hsList, hsFilter, hsPagination} from './data'

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
    case 'hsTextarea':
      delete data.HS
      let keys_hsTA = Object.keys(data)
      let data_hsTA = {hsTextarea: {}}

      keys_hsTA.forEach(key => {
        data_hsTA.hsTextarea[key] = new hsTextarea(key, data[key]).get_hsTextarea().hsTextarea[key]
      })

      return {
        data () {
          return {
            lang: data_hsTA
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
    case 'hsChest':
      delete data.HS
      let keys_hsCh = Object.keys(data)
      let data_hsCh = {hsChest: {}}

      keys_hsCh.forEach(key => {
        data_hsCh.hsChest[key] = new hsChest(key, data[key]).get_hsChest().hsChest[key]
      })

      return {
        data () {
          return {
            lang: data_hsCh
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
    case 'hsSmallModal':
      delete data.HS
      let keys_hsSM = Object.keys(data)
      let data_hsSM = {hsSmallModal: {}}

      keys_hsSM.forEach(key => {
        data_hsSM.hsSmallModal[key] = new hsSmallModal(key, data[key]).get_hsSmallModal().hsSmallModal[key]
      })

      return {
        data () {
          return {
            lang: data_hsSM
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
    case 'hsList':
      delete data.HS
      let keys_hsL = Object.keys(data)
      let data_hsL = {hsList: {}}

      keys_hsL.forEach(key => {
        data_hsL.hsList[key] = new hsList(key, data[key]).get_hsList().hsList[key]
      })

      return {
        data () {
          return {
            lang: data_hsL
          }
        }
      }
      break
    case 'hsFilter':
      delete data.HS
      let keys_hsF = Object.keys(data)
      let data_hsF = {hsFilter: {}}

      keys_hsF.forEach(key => {
        data_hsF.hsFilter[key] = new hsFilter(key, data[key]).get_hsFilter().hsFilter[key]
      })

      return {
        data () {
          return {
            lang: data_hsF
          }
        }
      }
      break
    case 'hsPagination':
      delete data.HS
      let keys_hsP = Object.keys(data)
      let data_hsP = {hsPagination: {}}

      keys_hsP.forEach(key => {
        data_hsP.hsPagination[key] = new hsPagination(key, data[key]).get_hsPagination().hsPagination[key]
      })

      return {
        data () {
          return {
            lang: data_hsP
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
