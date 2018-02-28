import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsFilter"
import {hsFilterLang_es} from './hsFilter/hsFilterLang_es'
import {hsFilterLang_en} from './hsFilter/hsFilterLang_en'

const Filter = (component) => {
  let langData = {}

  switch (component) {
    case 'hsFilter':
      langData = storeLang(
        {lang: 'es', module: hsFilterLang_es},
        {lang: 'en', module: hsFilterLang_en}
      )
      break
  }

  return langData
}

export {Filter}
