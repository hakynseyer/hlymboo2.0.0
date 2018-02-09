import {hsHeaderLeft} from '../data'

import hsHL from './es/hsHL.json'

/*
 * [D] Export language
*/
export const hsHeaderLeftLang_es = {
  data () {
    return {
      lang: new hsHeaderLeft(hsHL).get_hsHeaderLeft()
    }
  }
}
