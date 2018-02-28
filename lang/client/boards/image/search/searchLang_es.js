import {dataLink} from '../../_data/dataLink'

import hsL from './es/hsL.json'
import hsF from './es/hsF.json'
import hsP from './es/hsP.json'

/*
 * [D] Export language
*/
export const searchLang_es = {
  mixins: [dataLink(hsL), dataLink(hsF), dataLink(hsP)]
}
