import {storeLang} from '../../_fixData/storeLang'

// [i] Module "hsBoardMenu"
import {hsBoardMenuLang_es} from './hsBoradMenu/hsBoardMenuLang_es'
import {hsBoardMenuLang_en} from './hsBoradMenu/hsBoardMenuLang_en'

const Board = (component) => {
  let langData = {}

  switch (component) {
    case 'hsBoardMenu':
      langData = storeLang(
        {lang: 'es', module: hsBoardMenuLang_es},
        {lang: 'en', module: hsBoardMenuLang_en}
      )
      break
  }

  return langData
}

export {Board}
