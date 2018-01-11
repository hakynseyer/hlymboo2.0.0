import store from '../../../client/src/store/store'

import {appLangEs} from './appLang_es'
import {appLangEn} from './appLang_en'

const appLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = appLangEs
      break
    case 'en':
      langData = appLangEn
      break
  }

  return langData
}

export {appLang}
