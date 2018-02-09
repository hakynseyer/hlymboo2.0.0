const storeLang = require('../../../_fixData/storeLang')

// [i] Packs
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

const registerPack = (lang, pack) => {
  let langData = {}

  switch (pack) {
    case 'validator':
      langData = storeLang(lang,
        {lang: 'es', pack: validator.es},
        {lang: 'en', pack: validator.en}
      )
      break
    case 'server':
      langData = storeLang(lang,
        {lang: 'es', pack: server.es},
        {lang: 'en', pack: server.en}
      )
      break
    case 'email':
      langData = storeLang(lang,
        {lang: 'es', pack: email.es},
        {lang: 'en', pack: email.en}
      )
      break
  }

  return langData
}

module.exports = {registerPack}
