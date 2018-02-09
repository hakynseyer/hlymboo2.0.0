import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsBoardMenu"
import {hsBoardMenuLang_es} from './hsBoardMenu/hsBoardMenuLang_es'
import {hsBoardMenuLang_en} from './hsBoardMenu/hsBoardMenuLang_en'

// [i] Module "hsFormHead"
import {uploadBasicLang_es} from './uploadBasic/uploadBasicLang_es'
import {hsUploadBasicLang_en} from './uploadBasic/uploadBasicLang_en'

const imageModule = (module) => {
  let langData = {}

  switch (module) {
    case 'hsBoardMenu':
      langData = storeLang(
        {lang: 'es', module: hsBoardMenuLang_es},
        {lang: 'en', module: hsBoardMenuLang_en}
      )
      break
    case 'uploadBasic':
      langData = storeLang(
        {lang: 'es', module: uploadBasicLang_es},
        {lang: 'en', module: hsUploadBasicLang_en}
      )
      break
  }

  return langData
}

export {imageModule}
