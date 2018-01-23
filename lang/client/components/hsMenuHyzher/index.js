import store from '../../../../client/src/store/store'

import {hsMenuHyzherLang_es} from './lang/hsMenuHyzherLang_es'
import {hsMenuHyzherLang_en} from './lang/hsMenuHyzherLang_en'

const hsMenuHyzherLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = hsMenuHyzherLang_es
      break
    case 'en':
      langData = hsMenuHyzherLang_en
      break
  }

  return langData
}

export {hsMenuHyzherLang}
