import {hsFilter} from '../data'

import hsF from './es/hsF.json'

/*
 * [D] Export language
*/
export const hsFilterLang_es = {
  data () {
    return {
      lang: new hsFilter(hsF).get_hsFilter()
    }
  }
}
