import store from '../../../../client/src/store/store'

function imageLang (...modules) {
  switch (store.state.lang) {
    case 'es':
      for (let module of modules) {
        if (module.lang === 'es') return module.module
      }
      break
    case 'en':
      for (let module of modules) {
        if (module.lang === 'en') return module.module
      }
      break
    default:
      return {}
  }
}

// [i] Module "hsBoardMenu"
import {hsBoardMenuLang_es} from './hsBoardMenu/hsBoardMenuLang_es'
import {hsBoardMenuLang_en} from './hsBoardMenu/hsBoardMenuLang_en'

// [i] Module "hsFormHead"
import {uploadBasicLang_es} from './uploadBasic/uploadBasicLang_es'
import {hsUploadBasicLang_en} from './uploadBasic/uploadBasicLang_en'

const imageModule = (module) => {
  let langData = {}

  switch (module) {
    case 'hsBoardMenu':
      langData = imageLang(
        {lang: 'es', module: hsBoardMenuLang_es},
        {lang: 'en', module: hsBoardMenuLang_en}
      )
      break
    case 'uploadBasic':
      langData = imageLang(
        {lang: 'es', module: uploadBasicLang_es},
        {lang: 'en', module: hsUploadBasicLang_en}
      )
      break
  }

  return langData
}

export {imageModule}
