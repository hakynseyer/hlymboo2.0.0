const validator = {
  es: require('./validatorLang_es'),
  en: require('./validatorLang_en')
}

const validatorLang = (lang) => {
  let langData = {}

  switch (lang) {
    case 'es':
      langData = validator.es
      break
    case 'en':
      langData = validator.en
      break
  }

  return langData
}

module.exports = {validatorLang}
