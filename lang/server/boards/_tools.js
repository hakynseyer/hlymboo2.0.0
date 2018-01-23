const packsLang = {
  fragPacks: (lang, ...packs) => {
    switch (lang) {
      case 'es':
        for (let pack of packs) {
          if (pack.lang === 'es') return pack.pack
        }
        break
      case 'en':
        for (let pack of packs) {
          if (pack.lang === 'en') return pack.pack
        }
        break
      default:
        return {}
    }
  }
}

module.exports = {packsLang}
