// [i] Modules

const {loginPack} = require('./login')

const loginModule = (lang, module, pack) => {
  let langData = {}

  switch (module) {
    case 'login':
      langData = loginPack(lang, pack)
      break
  }

  return langData
}

module.exports = {loginModule}
