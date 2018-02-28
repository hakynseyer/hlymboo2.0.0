import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsImage"
import {hsImageLang_es} from './hsImage/hsImageLang_es'
import {hsImageLang_en} from './hsImage/hsImageLang_en'

const Image = (component) => {
  let langData = {}

  switch (component) {
    case 'hsImage':
      langData = storeLang(
        {lang: 'es', module: hsImageLang_es},
        {lang: 'en', module: hsImageLang_en}
      )
      break
  }

  return langData
}

export {Image}
