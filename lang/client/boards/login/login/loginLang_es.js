import {dataLink} from '../../_data/dataLink'

import hsFH from './es/hsFH.json'
import hsFHb from './es/hsFHb.json'
import hsI from './es/hsI.json'

/*
 * [D] Export language
*/
export const loginLang_es = {
  mixins: [dataLink(hsFH), dataLink(hsFHb), dataLink(hsI)]
}
