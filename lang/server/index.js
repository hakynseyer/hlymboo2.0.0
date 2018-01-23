// [i] Boards
const {registerModule} = require('./boards/register')
const {loginModule} = require('./boards/login')

const boards = (lang, board, module, pack) => {
  let langData

  switch (board) {
    case 'register':
      langData = registerModule(lang, module, pack)
      break
    case 'login':
      langData = loginModule(lang, module, pack)
      break
  }

  return langData
}


// [i] Tools
const {validatorLang} = require('./tools/validator')

const tools = (lang, tool) => {
  let langData

    switch (tool) {
      case 'validator':
        langData = validatorLang(lang)
        break
    }

    return langData
}

module.exports = {boards, tools}
