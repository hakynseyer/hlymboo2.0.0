const storeLang = require('../../_fixData/storeLang')

const validator = {
  es: require('./hsValidator/validatorLang_es'),
  en: require('./hsValidator/validatorLang_en')
}

const validatorLang = (lang) => {
  let langData = storeLang(lang,
    {lang: 'es', pack: validator.es},
    {lang: 'en', pack: validator.en}
  )

  return langData
}

module.exports = {validatorLang}
