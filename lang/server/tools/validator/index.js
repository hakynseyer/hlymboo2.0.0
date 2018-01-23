const validator = {
  es: require('./lang/validatorLang_es'),
  en: require('./lang/validatorLang_en')
}

const validatorLang = (lang) => {
  let langData = {}

  switch (lang) {
    case 'es':
      langData = validator.es()
      break
    case 'en':
      langData = validator.en()
      break
  }

  return langData
}

module.exports = {validatorLang}
