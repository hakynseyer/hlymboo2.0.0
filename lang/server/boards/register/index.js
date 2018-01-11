function registerLang (lang, ...modules) {
  switch (lang) {
    case 'es':
      for (let module of modules) {
        if (module.lang === 'es') return module.module
      }
      break
    case 'en':
      for (let module of modules) {
        if (module.lang === 'en') return module.module
      }
      break
    default:
      return {}
  }
}

// [i] Module "Validator"
const validator = {
  es: require('./validator/validatorLang_es'),
  en: require('./validator/validatorLang_en')
}
const server = {
  es: require('./server/serverLang_es'),
  en: require('./server/serverLang_en')
}
const email = {
  es: require('./email/emailLang_es'),
  en: require('./email/emailLang_en')
}

const registerModule = (lang, module) => {
  let langData = {}

  switch (module) {
    case 'validator':
      langData = registerLang(lang,
        {lang: 'es', module: validator.es},
        {lang: 'en', module: validator.en}
      )
      break
    case 'server':
      langData = registerLang(lang,
        {lang: 'es', module: server.es},
        {lang: 'en', module: server.en}
      )
      break
    case 'email':
      langData = registerLang(lang,
        {lang: 'es', module: email.es},
        {lang: 'en', module: email.en}
      )
      break
  }

  return langData
}

module.exports = {registerModule}
