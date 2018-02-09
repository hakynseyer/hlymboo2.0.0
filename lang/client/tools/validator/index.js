import {storeLang} from '../../_fixData/storeLang'

import {hsValidatorLang_es} from './hsValidator/hsValidatorLang_es'
import {hsValidatorLang_en} from './hsValidator/hsValidatorLang_en'

const Validator = () => {
  let langData = storeLang(
    {lang: 'es', module: hsValidatorLang_es},
    {lang: 'en', module: hsValidatorLang_en}
  )

  return langData
}

export {Validator}
