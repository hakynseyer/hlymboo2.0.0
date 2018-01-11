import store from '../../../../client/src/store/store'

import {fixDateLang_es} from './lang/fixDateLang_es'
import {fixDateLang_en} from './lang/fixDateLang_en'

const fixDateLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = fixDateLang_es()
      break
    case 'en':
      langData = fixDateLang_en()
      break
  }

  return langData
}

export {fixDateLang}
