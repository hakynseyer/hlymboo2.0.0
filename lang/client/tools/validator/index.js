import store from '../../../../client/src/store/store'

import {validatorLang_es} from './lang/validatorLang_es'
import {validatorLang_en} from './lang/validatorLang_en'

const validatorLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = validatorLang_es()
      break
    case 'en':
      langData = validatorLang_en()
      break
  }

  return langData
}

export {validatorLang}
