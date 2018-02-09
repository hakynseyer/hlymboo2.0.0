import {dataLink} from '../../_data/dataLink'

import hsFH from './es/hsFH.json'
import hsFHb from './es/hsFHb.json'
import hsI from './es/hsI.json'
import hsS from './es/hsS.json'
import hsC from './es/hsC.json'
import hsAM from './es/hsAM.json'

/*
 * [D] Export language
*/
export const newLang_es = {
  mixins: [dataLink(hsFH), dataLink(hsFHb), dataLink(hsI), dataLink(hsS), dataLink(hsC), dataLink(hsAM)]
}
