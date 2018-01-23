import store from '../../../../client/src/store/store'

import {hsHeaderLeftLang_es} from './lang/hsHeaderLeftLang_es'
import {hsHeaderLeftLang_en} from './lang/hsHeaderLeftLang_en'

const hsHeaderLeftLang = () => {
  let langData = {}

  switch (store.state.lang) {
    case 'es':
      langData = hsHeaderLeftLang_es
      break
    case 'en':
      langData = hsHeaderLeftLang_en
      break
  }

  return langData
}

export {hsHeaderLeftLang}
