import {hsModalData} from '../data'

var hsModal = {
  msgRedirectDefault: '##### segundos para cerrar',
  msgRedirectCustomized: 'Redireccionando a ##### en ????? segundos'
}
const hsModalLink = {
  mixins: [hsModalData],
  created () {
    this.dataLink_hsModal({
      'hsM_msgRedirectDefault': hsModal.msgRedirectDefault,
      'hsM_msgRedirectCustomized': hsModal.msgRedirectCustomized
    })
  }
}

/*
 * [D] Export language
*/
export const hsModalLang_es = {
  mixins: [hsModalLink]
}
