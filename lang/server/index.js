// [i] Boards
const {registerModule} = require('./boards/register')

const boards = (lang, board, module) => {
  let langData

  switch (board) {
    case 'register':
      langData = registerModule(lang, module)
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
