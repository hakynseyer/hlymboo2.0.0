// [i] Boards
import {registerModule} from './boards/register'
import {loginModule} from './boards/login'
import {imageModule} from './boards/image'

const boards = (board, module) => {
  let langData = {}

  switch (board) {
    case 'register':
      langData = registerModule(module)
      break
    case 'login':
      langData = loginModule(module)
      break
    case 'image':
      langData = imageModule(module)
      break
  }

  return langData
}

// [i] Components
import {Header} from './components/header'
import {Modal} from './components/modal'
import {Menu} from './components/menu'
import {Image} from './components/image'
import {Filter} from './components/filter'
import {Pagination} from './components/pagination'
import {Board} from './components/board'

const components = (resource, component) => {
  let langData = {}

  switch (resource) {
    case 'Header':
      langData = Header(component)
      break
    case 'Modal':
      langData = Modal(component)
      break
    case 'Menu':
      langData = Menu(component)
      break
    case 'Image':
      langData = Image(component)
      break
    case 'Filter':
      langData = Filter(component)
      break
    case 'Pagination':
      langData = Pagination(component)
      break
    case 'Board':
      langData = Board(component)
      break
  }

  return langData
}

// [i] Tools
import {Validator} from './tools/validator'
import {fixDateLang} from './tools/fixDate'

const tools = (tool) => {
  let langData = {}

  switch (tool) {
    case 'Validator':
      langData = Validator()
      break
    case 'fixDate':
      langData = fixDateLang()
      break
  }

  return langData
}

export {app, boards, components, tools}

