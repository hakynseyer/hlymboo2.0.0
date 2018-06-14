import {hsBoardMenu} from '../data'

import hsBM from './es/hsBM.json'

/*
 * [D] Export language
*/
export const hsBoardMenuLang_es = {
  data () {
    return {
      lang: new hsBoardMenu(hsBM).get_hsBoardMenu()
    }
  }
}
