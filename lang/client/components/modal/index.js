import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsModal"
import {hsModalLang_es} from './hsModal/hsModalLang_es'
import {hsModalLang_en} from './hsModal/hsModalLang_en'

const Modal = (component) => {
  let langData = {}

  switch (component) {
    case 'hsModal':
      langData = storeLang(
        {lang: 'es', module: hsModalLang_es},
        {lang: 'en', module: hsModalLang_en}
      )
      break
  }

  return langData
}

export {Modal}
