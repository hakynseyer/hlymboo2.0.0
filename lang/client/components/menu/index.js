import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsMenuHyzher"
import {hsMenuHyzherLang_es} from './hsMenuHyzher/hsMenuHyzherLang_es'
import {hsMenuHyzherLang_en} from './hsMenuHyzher/hsMenuHyzherLang_en'

const Menu = (component) => {
  let langData = {}

  switch (component) {
    case 'hsMenuHyzher':
      langData = storeLang(
        {lang: 'es', module: hsMenuHyzherLang_es},
        {lang: 'en', module: hsMenuHyzherLang_en}
      )
      break
  }

  return langData
}

export {Menu}
