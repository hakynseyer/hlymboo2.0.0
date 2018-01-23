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

// [i] Module "Login"
import {loginLang_es} from './login/loginLang_es'
import {loginLang_en} from './login/loginLang_en'

const loginModule = (module) => {
  let langData = {}

  switch (module) {
    case 'login':
      langData = registerLang(
        {lang: 'es', module: loginLang_es},
        {lang: 'en', module: loginLang_en}
      )
      break
  }

  return langData
}

export {loginModule}
