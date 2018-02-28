import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsBoardMenu"
import {hsBoardMenuLang_es} from './hsBoardMenu/hsBoardMenuLang_es'
import {hsBoardMenuLang_en} from './hsBoardMenu/hsBoardMenuLang_en'

// [i] Module "uploadBasic"
import {uploadBasicLang_es} from './uploadBasic/uploadBasicLang_es'
import {hsUploadBasicLang_en} from './uploadBasic/uploadBasicLang_en'

// [i] Module "Search"
import {searchLang_es} from './search/searchLang_es'
import {searchLang_en} from './search/searchLang_en'

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
    case 'search':
      langData = storeLang(
        {lang: 'es', module: searchLang_es},
        {lang: 'en', module: searchLang_en}
      )
      break
  }

  return langData
}

export {imageModule}
