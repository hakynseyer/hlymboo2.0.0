import store from '../../../../client/src/store/store'

import {hsModalLang_es} from './lang/hsModalLang_es'
import {hsModalLang_en} from './lang/hsModalLang_en'

const hsModalLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = hsModalLang_es
      break
    case 'en':
      langData = hsModalLang_en
      break
  }

  return langData
}

export {hsModalLang}
