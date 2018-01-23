// [i] Boards
import {registerModule} from './boards/register'
import {loginModule} from './boards/login'

const boards = (board, module) => {
  let langData = {}

  switch (board) {
    case 'register':
      langData = registerModule(module)
      break
    case 'login':
      langData = loginModule(module)
      break
  }

  return langData
}

// [i] Components
import {hsModalLang} from './components/hsModal'
import {hsHeaderLeftLang} from './components/hsHeaderLeft'
import {hsHeaderRightLang} from './components/hsHeaderRight'
import {hsMenuHyzherLang} from './components/hsMenuHyzher'

const components = (component) => {
  let langData = {}

  switch (component) {
    case 'hsModal':
      langData = hsModalLang()
      break
    case 'hsHeaderLeft':
      langData = hsHeaderLeftLang()
      break
    case 'hsHeaderRight':
      langData = hsHeaderRightLang()
      break
    case 'hsMenuHyzher':
      langData = hsMenuHyzherLang()
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

