import {storeLang} from '../../_fixData/storeLang'

import {fixDateLang_es} from './fixDate/fixDateLang_es'
import {fixDateLang_en} from './fixDate/fixDateLang_en'

const fixDateLang = () => {
  let langData = storeLang(
    {lang: 'es', module: fixDateLang_es},
    {lang: 'en', module: fixDateLang_en}
  )

  return langData
}

export {fixDateLang}
