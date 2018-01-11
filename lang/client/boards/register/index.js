import store from '../../../../client/src/store/store'

function registerLang (...modules) {
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

// [i] Module "New"
import {newLang_es} from './new/newLang_es'
import {newLang_en} from './new/newLang_en'

const registerModule = (module) => {
  let langData = {}

  switch (module) {
    case 'new':
      langData = registerLang(
        {lang: 'es', module: newLang_es},
        {lang: 'en', module: newLang_en}
      )
      break
  }

  return langData
}

export {registerModule}
