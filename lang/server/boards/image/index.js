// [i] Modules
const {uploadBasicPack} = require ('./uploadBasic')
const {requestPack} = require('./imageRequest')

const imageModule = (lang, module, pack) => {
  let langData = {}

  switch (module) {
    case 'uploadBasic':
      langData = uploadBasicPack(lang, pack)
      break
    case 'requestPack':
      langData = requestPack(lang, pack)
      break
  }

  return langData
}

module.exports = {imageModule}
