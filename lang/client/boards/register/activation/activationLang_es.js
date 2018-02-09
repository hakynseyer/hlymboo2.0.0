import {dataLink} from '../../_data/dataLink'

import hsAM from './es/hsAM.json'
import hsSM from './es/hsSM.json'

/*
 * [D] Export language
*/
export const activationLang_es = {
  mixins: [dataLink(hsAM), dataLink(hsSM)]
}
