// [i] Modules
const {registerPack} = require ('./new')
const {activationPack} = require ('./activation')

const registerModule = (lang, module, pack) => {
  let langData = {}

  switch (module) {
    case 'new':
      langData = registerPack(lang, pack)
      break
    case 'activation':
      langData = activationPack(lang, pack)
      break
  }

  return langData
}

module.exports = {registerModule}
