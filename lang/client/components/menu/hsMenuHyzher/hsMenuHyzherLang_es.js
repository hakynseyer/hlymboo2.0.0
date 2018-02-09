import {hsMenuHyzher} from '../data'

import hsMH from './es/hsMH.json'

/*
 * [D] Export language
*/
export const hsMenuHyzherLang_es = {
  data () {
    return {
      lang: new hsMenuHyzher(hsMH).get_hsMenuHyzher()
    }
  }
}
