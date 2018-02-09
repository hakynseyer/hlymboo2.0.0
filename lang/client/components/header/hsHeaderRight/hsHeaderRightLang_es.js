import {hsHeaderRight} from '../data'

import hsHR from './es/hsHR.json'

/*
 * [D] Export language
*/
export const hsHeaderRightLang_es = {
  data () {
    return {
      lang: new hsHeaderRight(hsHR).get_hsHeaderRight()
    }
  }
}
