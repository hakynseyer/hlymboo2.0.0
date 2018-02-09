import {storeLang} from '../../_fixData/storeLang'

// [i] Module "Login"
import {loginLang_es} from './login/loginLang_es'
import {loginLang_en} from './login/loginLang_en'

const loginModule = (module) => {
  let langData = {}

  switch (module) {
    case 'login':
      langData = storeLang(
        {lang: 'es', module: loginLang_es},
        {lang: 'en', module: loginLang_en}
      )
      break
  }

  return langData
}

export {loginModule}
