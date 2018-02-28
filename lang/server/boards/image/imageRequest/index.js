const storeLang = require('../../../_fixData/storeLang')

// [i] Packs
const server = {
  es: require('./server/serverLang_es'),
  en: require('./server/serverLang_en')
}

const requestPack = (lang, pack) => {
  let langData = {}

  switch (pack) {
    case 'server':
      langData = storeLang(lang,
        {lang: 'es', pack: server.es},
        {lang: 'en', pack: server.en}
      )
      break
  }

  return langData
}

module.exports = {requestPack}
