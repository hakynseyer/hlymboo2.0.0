import {hsImage} from '../data'

import hsI from './es/hsI.json'

/*
 * [D] Export language
*/
export const hsImageLang_es = {
  data () {
    return {
      lang: new hsImage(hsI).get_hsImage()
    }
  }
}
