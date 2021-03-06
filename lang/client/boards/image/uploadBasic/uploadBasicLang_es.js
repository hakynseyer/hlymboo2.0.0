import {dataLink} from '../../_data/dataLink'

import hsFH from './es/hsFH.json'
import hsFHb from './es/hsFHb.json'
import hsI from './es/hsI.json'
import hsIm from './es/hsIm.json'
import hsTA from './es/hsTA.json'
import hsCh from './es/hsCh.json'
import hsSM from './es/hsSM.json'

/*
 * [D] Export language
*/
export const uploadBasicLang_es = {
  mixins: [dataLink(hsFH), dataLink(hsFHb), dataLink(hsI), dataLink(hsTA), dataLink(hsIm), dataLink(hsCh), dataLink(hsSM)]
}
