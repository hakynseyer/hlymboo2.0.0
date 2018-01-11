// [i] App
import {appLang} from './app'

const app = appLang()

// [i] Boards
import {registerModule} from './boards/register'

const boards = (board, module) => {
  let langData = {}

  switch (board) {
    case 'register':
      langData = registerModule(module)
      break
  }

  return langData
}

// [i] Components
import {hsModalLang} from './components/hsModal'

const components = (component) => {
  let langData = {}

  switch (component) {
    case 'hsModal':
      langData = hsModalLang()
      break
  }

  return langData
}

// [i] Tools
import {validatorLang} from './tools/validator'
import {fixDateLang} from './tools/fixDate'

const tools = (tool) => {
  let langData = {}

  switch (tool) {
    case 'validator':
      langData = validatorLang()
      break
    case 'fixDate':
      langData = fixDateLang()
      break
  }

  return langData
}

export {app, boards, components, tools}

