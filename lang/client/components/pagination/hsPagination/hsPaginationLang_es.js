import {hsPagination} from '../data'

import hsP from './es/hsP.json'

/*
 * [D] Export language
*/
export const hsPaginationLang_es = {
  data () {
    return {
      lang: new hsPagination(hsP).get_hsPagination()
    }
  }
}
