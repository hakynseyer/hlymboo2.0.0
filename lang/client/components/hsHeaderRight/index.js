import store from '../../../../client/src/store/store'

import {hsHeaderRightLang_es} from './lang/hsHeaderRightLang_es'
import {hsHeaderRightLang_en} from './lang/hsHeaderRightLang_en'

const hsHeaderRightLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = hsHeaderRightLang_es
      break
    case 'en':
      langData = hsHeaderRightLang_en
      break
  }

  return langData
}

export {hsHeaderRightLang}
