import {hsModal} from '../data'

import hsM from './es/hsM.json'

/*
 * [D] Export language
*/
export const hsModalLang_es = {
  data () {
    return {
      lang: new hsModal(hsM).get_hsModal()
    }
  }
}
